"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiSimulator_1 = require("./models/apiSimulator");
const handleApiCalls = () => {
    (0, apiSimulator_1.fetchProductCatalog)()
        .then((products) => {
        console.log("Fetched products", products);
        const reviewPromises = products.map(product => (0, apiSimulator_1.fetchProductReviews)(product.id));
        return Promise.all(reviewPromises);
    })
        .then((reviews) => {
        console.log("Fetched revies:", reviews);
        return (0, apiSimulator_1.fetchSalesReport)();
    })
        .then((report) => {
        console.log("Sales report:", report);
    })
        .catch((error) => {
        console.log("Error", error);
    })
        .finally(() => {
        console.log("All API calls attempted.");
    });
};
handleApiCalls();
//# sourceMappingURL=index.js.map