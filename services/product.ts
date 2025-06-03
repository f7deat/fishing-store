import server from "./server";
import { IFilterOptions } from "./typings";

export async function apiProductNewArrivals(params: IFilterOptions) {
    return server.get('product/new-arrivals', { params });
}