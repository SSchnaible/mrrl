
export type MurlocVisit = {
    murloc: MurlocType;
    buys: BuyStep[];
};

export type BuyStep = {
    item: ItemType;
    amount: number;
};

export type QualityType = 'Common' | 'Uncommon' | 'Rare' | 'Epic';

export const QUALITIES: QualityType[] = ['Epic', 'Rare', 'Uncommon', 'Common'];

export type MurlocType = 'Flrgrrl' | 'Mrrglrlr' | 'Hurlgrl' | 'Grrmrlg';

export type MurlocInfoType = {
    id: MurlocType;
    wowheadLink: string;
}

export const MURLOC_INFO: { [id in MurlocType]: MurlocInfoType } = {
    'Flrgrrl': {
        id: 'Flrgrrl',
        wowheadLink: 'https://wowhead.com/npc=151952/flrgrrl',
    },
    'Mrrglrlr': {
        id: 'Mrrglrlr',
        wowheadLink: 'https://wowhead.com/npc=151950/mrrglrlr',
    },
    'Hurlgrl': {
        id: 'Hurlgrl',
        wowheadLink: 'https://wowhead.com/npc=151953/hurlgrl',
    },
    'Grrmrlg': {
        id: 'Grrmrlg',
        wowheadLink: 'https://wowhead.com/npc=151951/grrmrlg',
    },
};

export type ItemType =
    'Mass'
    | 'Bag'
    | 'Butter'
    | 'Food'
    | 'RosettaStone'
    | 'Eyeball'
    | 'Sculpture'
    | 'Rock'
    | 'Gloop'
    | 'BloodStone'
    | 'Vegetable'
    | 'Jar'
    | 'Sock'
    | 'Lunch'
    | 'Finger'
    | 'Fish'
    | 'Horn'
    | 'Snail'
    | 'Dust'
    | 'Idol';

export type ItemSet = { [id in ItemType]: number };

export type ItemInfoType = {
    id: ItemType;
    name: string;
    wowheadLink: string;
    murloc: MurlocType;
    quality: QualityType;
    cost: ItemCost;
}

export type ItemCost = {
    kind: "items";
    items: {
        amount: number;
        item: ItemType;
    }[]
} | {
    kind: "gold";
}

export const ITEM_INFO: { [id in ItemType]: ItemInfoType } = {
    'Mass': {
        id: 'Mass',
        name: 'Unidentified Mass',
        wowheadLink: 'https://wowhead.com/item=167912/unidentified-mass',
        murloc: 'Flrgrrl',
        quality: 'Common',
        cost: {
            kind: "gold",
        },
    },
    'Bag': {
        id: 'Bag',
        name: 'Bag of Who-Knows-What',
        wowheadLink: 'https://wowhead.com/item=167910/bag-of-who-knows-what',
        murloc: 'Flrgrrl',
        quality: 'Uncommon',
        cost: {
            kind: "items",
            items: [{
                amount: 2,
                item: 'Fish',
            }],
        },
    },
    'Butter': {
        id: 'Butter',
        name: 'Just Regular Butter',
        wowheadLink: 'https://wowhead.com/item=167911/just-regular-butter',
        murloc: 'Flrgrrl',
        quality: 'Uncommon',
        cost: {
            kind: "items",
            items: [{
                amount: 4,
                item: 'Vegetable',
            }],
        },
    },
    'Food': {
        id: 'Food',
        name: 'Ghost Food',
        wowheadLink: 'https://wowhead.com/item=167909/ghost-food',
        murloc: 'Flrgrrl',
        quality: 'Rare',
        cost: {
            kind: "items",
            items: [{
                amount: 6,
                item: 'Horn',
            }],
        },
    },
    'RosettaStone': {
        id: 'RosettaStone',
        name: 'Beckoner\'s Rosetta Stone',
        wowheadLink: 'https://wowhead.com/item=169782/beckoners-rosetta-stone',
        murloc: 'Flrgrrl',
        quality: 'Epic',
        cost: {
            kind: "items",
            items: [{
                amount: 2,
                item: 'Gloop',
            }, {
                amount: 9,
                item: 'Rock',
            }],
        },
    },
    'Eyeball': {
        id: 'Eyeball',
        name: 'Slimy Naga Eyeball',
        wowheadLink: 'https://wowhead.com/item=167896/slimy-naga-eyeball',
        murloc: 'Mrrglrlr',
        quality: 'Common',
        cost: {
            kind: "gold",
        },
    },
    'Sculpture': {
        id: 'Sculpture',
        name: 'Disintegrating Sand Sculpture',
        wowheadLink: 'https://wowhead.com/item=167903/disintegrating-sand-sculpture',
        murloc: 'Mrrglrlr',
        quality: 'Uncommon',
        cost: {
            kind: "items",
            items: [{
                amount: 4,
                item: 'Vegetable',
            }],
        },
    },
    'Rock': {
        id: 'Rock',
        name: 'Particularly Dense Rock',
        wowheadLink: 'https://wowhead.com/item=167902/particularly-dense-rock',
        murloc: 'Mrrglrlr',
        quality: 'Rare',
        cost: {
            kind: "items",
            items: [{
                amount: 3,
                item: 'Bag',
            }, {
                amount: 3,
                item: 'Jar',
            }],
        },
    },
    'Gloop': {
        id: 'Gloop',
        name: 'Smelly Pile of Gloop',
        wowheadLink: 'https://wowhead.com/item=167904/smelly-pile-of-gloop',
        murloc: 'Mrrglrlr',
        quality: 'Rare',
        cost: {
            kind: "items",
            items: [{
                amount: 2,
                item: 'Butter',
            }],
        },
    },
    'BloodStone': {
        id: 'BloodStone',
        name: 'Pulsating Blood Stone',
        wowheadLink: 'https://wowhead.com/item=169780/pulsating-blood-stone',
        murloc: 'Mrrglrlr',
        quality: 'Epic',
        cost: {
            kind: "items",
            items: [{
                amount: 8,
                item: 'Dust',
            }, {
                amount: 7,
                item: 'Lunch',
            }],
        },
    },
    'Vegetable': {
        id: 'Vegetable',
        name: 'Sweet Sea Vegetable',
        wowheadLink: 'https://wowhead.com/item=167915/sweet-sea-vegetable',
        murloc: 'Hurlgrl',
        quality: 'Common',
        cost: {
            kind: "gold",
        },
    },
    'Jar': {
        id: 'Jar',
        name: 'Jar of Fish Faces',
        wowheadLink: 'https://wowhead.com/item=167914/jar-of-fish-faces',
        murloc: 'Hurlgrl',
        quality: 'Uncommon',
        cost: {
            kind: "items",
            items: [{
                amount: 5,
                item: 'Fish',
            }],
        },
    },
    'Sock': {
        id: 'Sock',
        name: 'Dirty Murloc Sock',
        wowheadLink: 'https://wowhead.com/item=167916/dirty-murloc-sock',
        murloc: 'Hurlgrl',
        quality: 'Uncommon',
        cost: {
            kind: "items",
            items: [{
                amount: 6,
                item: 'Mass',
            }],
        },
    },
    'Lunch': {
        id: 'Lunch',
        name: 'Healthy Murloc Lunch',
        wowheadLink: 'https://wowhead.com/item=167913/healthy-murloc-lunch',
        murloc: 'Hurlgrl',
        quality: 'Rare',
        cost: {
            kind: "items",
            items: [{
                amount: 5,
                item: 'Horn',
            }],
        },
    },
    'Finger': {
        id: 'Finger',
        name: 'Cultist Pinky Finger',
        wowheadLink: 'https://wowhead.com/item=169783/cultist-pinky-finger',
        murloc: 'Hurlgrl',
        quality: 'Epic',
        cost: {
            kind: "items",
            items: [{
                amount: 4,
                item: 'Gloop',
            }, {
                amount: 7,
                item: 'Food',
            }],
        },
    },
    'Fish': {
        id: 'Fish',
        name: 'Flatulent Fish',
        wowheadLink: 'https://wowhead.com/item=167906/flatulent-fish',
        murloc: 'Grrmrlg',
        quality: 'Common',
        cost: {
            kind: "gold",
        },
    },
    'Horn': {
        id: 'Horn',
        name: 'Curious Murloc Horn',
        wowheadLink: 'https://wowhead.com/item=167905/curious-murloc-horn',
        murloc: 'Grrmrlg',
        quality: 'Uncommon',
        cost: {
            kind: "items",
            items: [{
                amount: 3,
                item: 'Eyeball',
            }],
        },
    },
    'Snail': {
        id: 'Snail',
        name: 'Extra-Slimy Snail',
        wowheadLink: 'https://wowhead.com/item=167907/extra-slimy-snail',
        murloc: 'Grrmrlg',
        quality: 'Rare',
        cost: {
            kind: "items",
            items: [{
                amount: 5,
                item: 'Sculpture',
            }],
        },
    },
    'Dust': {
        id: 'Dust',
        name: 'Sea Giant Foot Dust',
        wowheadLink: 'https://wowhead.com/item=167908/sea-giant-foot-dust',
        murloc: 'Grrmrlg',
        quality: 'Rare',
        cost: {
            kind: "items",
            items: [{
                amount: 3,
                item: 'Sock',
            }],
        },
    },
    'Idol': {
        id: 'Idol',
        name: 'Overwhelmingly-Alluring Idol',
        wowheadLink: 'https://wowhead.com/item=169781/overwhelmingly-alluring-idol',
        murloc: 'Grrmrlg',
        quality: 'Epic',
        cost: {
            kind: "items",
            items: [{
                amount: 8,
                item: 'Lunch',
            }, {
                amount: 4,
                item: 'Food',
            }],
        },
    }
};

export const END_ITEMS = [
    'Food',
    'Rock',
    'Gloop',
    'Lunch',
    'Snail',
    'Dust',
    'RosettaStone',
    'BloodStone',
    'Finger',
    'Idol',
];