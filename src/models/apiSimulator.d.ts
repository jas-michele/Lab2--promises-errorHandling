export declare const fetchProductCatalog: () => Promise<{
    id: number;
    name: string;
    price: number;
}[]>;
type Review = {
    id: number;
    name: string;
    review: string;
};
export declare const fetchProductReviews: (productId: number) => Promise<Review[]>;
type Report = {
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
};
export declare const fetchSalesReport: () => Promise<Report>;
export {};
//# sourceMappingURL=apiSimulator.d.ts.map