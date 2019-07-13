import { BuyStep, ItemSet, QUALITIES, ITEM_INFO } from './model';
import { clone, reverse } from 'lodash';

export function solve(requiredItems: ItemSet): [BuyStep[], number] {
    const buyItems = clone(requiredItems);
    let totalGoldCost = 0;
    const buySteps: BuyStep[] = [];
    for (const quality of QUALITIES) {
        for (const item of Object.values(ITEM_INFO)) {
            if (item.quality === quality && buyItems[item.id] > 0) {
                buySteps.push({
                    item: item.id,
                    amount: buyItems[item.id],
                });
                if (item.cost.kind === "gold") {
                    totalGoldCost += buyItems[item.id];
                } else {
                    for (const costItem of item.cost.items) {
                        buyItems[costItem.item] = (buyItems[costItem.item] || 0) + costItem.amount * buyItems[item.id];
                    }
                }
                buyItems[item.id] = 0;
            }
        }
    }
    return [reverse(buySteps), totalGoldCost];
}