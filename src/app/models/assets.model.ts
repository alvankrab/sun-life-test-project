export class Assets {
    assetList: Asset[];
    total: Asset;
}

export class Asset {
    id: number;
    name: string;
    value: number;
    currency: string;
}