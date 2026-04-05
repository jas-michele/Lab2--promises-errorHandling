"use strict";
//console.log("starting app...")
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSalesReport = exports.fetchProductReviews = exports.fetchProductCatalog = void 0;
class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }
}
class DataError extends Error {
    constructor(message) {
        super(message);
        this.name = "DataError";
    }
}
const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};
exports.fetchProductCatalog = fetchProductCatalog;
const fetchProductReviews = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: productId, name: `Product: ${productId}`, review: "Works great!" },
                    { id: productId, name: `Product: ${productId}`, review: "Never buying again" },
                ]);
            }
            else {
                reject(new NetworkError(`Failed to fetch reviews for product ID ${productId}`));
            }
        }, 1500);
    });
};
exports.fetchProductReviews = fetchProductReviews;
const fetchSalesReport = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.08) {
                resolve({
                    totalSales: 50000,
                    unitsSold: 120,
                    averagePrice: 416.67
                });
            }
            else {
                reject(new DataError("Failed to load Sales Report"));
            }
        }, 1000);
    });
};
exports.fetchSalesReport = fetchSalesReport;
// checking returns
//fetchProductCatalog()
//.then((product) => {
// console.log("Fetched product:", product);
//return fetchProductReviews(product[0].id);
//})
//.then((review) => {
//  console.log("Fetched review:", review);
//return fetchSalesReport();
//})
//.then((report) => {
//console.log("Sales report:", report)
//})
//.catch((error) => {
//console.log("Error:", error);
//})
//.finally(() => {
//  console.log("All API calls attempetd.");
//});
//# sourceMappingURL=apiSimulator.js.map