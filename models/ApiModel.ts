export interface ApiResponseModel<T> {
    limit: number;
    skip: number;
    total: number;
    products: T[];
}