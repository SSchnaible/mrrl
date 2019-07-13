import { BuyStep, ItemSet, QUALITIES, ITEM_INFO, ItemType, MurlocVisit } from './model';
import { every, clone, cloneDeep, forEach, filter, size, uniq, map, mapValues } from 'lodash';

export function solve(input: ItemSet): [MurlocVisit[], number] {
    const requiredItems = clone(input);
    let totalGoldCost = 0;
    for (const quality of QUALITIES) {
        for (const item of Object.values(ITEM_INFO)) {
            if (item.quality === quality && requiredItems[item.id] > 0) {
                if (item.cost.kind === "gold") {
                    totalGoldCost += requiredItems[item.id];
                } else {
                    for (const costItem of item.cost.items) {
                        requiredItems[costItem.item] = (requiredItems[costItem.item] || 0) + costItem.amount * requiredItems[item.id];
                    }
                }
            }
        }
    }
    const buyOrder = findBestOrder(mapValues(requiredItems, v => v > 0));
    const murlocVisits: MurlocVisit[] = [];
    forEach(buyOrder, (item: ItemType) => {
        if (murlocVisits.length === 0 || murlocVisits[murlocVisits.length - 1].murloc !== ITEM_INFO[item].murloc) {
            murlocVisits.push({
                murloc: ITEM_INFO[item].murloc,
                buys: [{
                    item: item,
                    amount: requiredItems[item],
                }],
            });
        } else {
            murlocVisits[murlocVisits.length - 1].buys.push({
                item: item,
                amount: requiredItems[item],
            });
        }
    });

    return [murlocVisits, totalGoldCost];
}

export function findBestOrder(requiredItems: ItemCheck): ItemType[] {
    const amountRequiredItems = filter(requiredItems, v => v === true).length;
    if (amountRequiredItems === 0) {
        return [];
    }
    const nodes: SearchNode[] = [{
        boughtItems: {},
        travelledDist: 0,
        heuristicRestDist: amountRequiredItems, //uniq(map(requiredItems, (_, item: ItemType) => ITEM_INFO[item].murloc)).length - 1,
        buyOrder: [],
    }];

    while (nodes.length > 0) {
        const node = extractNearestNode(nodes);
        const nextItems = findNextItems(node, requiredItems);
        for (const nextItem of nextItems) {
            const nextNode = cloneDeep(node);
            nextNode.boughtItems[nextItem] = true;
            if (node.buyOrder.length > 0 && ITEM_INFO[node.buyOrder[node.buyOrder.length - 1]].murloc != ITEM_INFO[nextItem].murloc) {
                nextNode.travelledDist += 1;
            }
            const missingItems = filter(Object.keys(requiredItems), id => requiredItems[id as ItemType] === true && !nextNode.boughtItems[id as ItemType]);
            nextNode.heuristicRestDist = missingItems.length; //uniq(map(missingItems, (item: ItemType) => ITEM_INFO[item].murloc)).length - 1;
            nextNode.buyOrder.push(nextItem);
            if (size(nextNode.boughtItems) === amountRequiredItems) {
                return nextNode.buyOrder;
            }
            nodes.push(nextNode);
        }
    }
    throw new Error(`Did not find a buy order`);
}

function extractNearestNode(nodes: SearchNode[]): SearchNode {
    let nearestIndex = 0;
    let nearestDist = Infinity;
    for (const i in nodes) {
        const dist = nodes[i].travelledDist + nodes[i].heuristicRestDist;
        if (dist < nearestDist) {
            nearestDist = dist;
            nearestIndex = Number(i);
        }
    }
    return nodes.splice(nearestIndex, 1)[0];
}

function findNextItems(node: SearchNode, requiredItems: ItemCheck): ItemType[] {
    const nextItems: ItemType[] = [];
    forEach(requiredItems, (_, id) => {
        const item = id as ItemType;
        if (requiredItems[item] === true && !node.boughtItems[item]) {
            const cost = ITEM_INFO[item].cost;
            if (cost.kind === "gold" || every(cost.items, v => node.boughtItems[v.item] === true)) {
                nextItems.push(item);
            }
        }
    });
    return nextItems;
}

type ItemCheck = { [id in ItemType]?: boolean };

type SearchNode = {
    boughtItems: ItemCheck;
    travelledDist: number;
    heuristicRestDist: number;
    buyOrder: ItemType[];
}