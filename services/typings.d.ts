export interface IFilterOptions {
    current: number;
    pageSize?: number;
}

export interface IProductListItem {
    id: string;
    name: string;
    normalizedName: string;
    description: string;
    thumbnail: string;
    price: number;
    salePrice?: number;
    modifiedDate: string;
}