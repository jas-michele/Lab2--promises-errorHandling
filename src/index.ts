
import {
    fetchProductCatalog,
    fetchProductReviews,
    fetchSalesReport
} from "./models/apiSimulator";



const handleApiCalls = () => {
    fetchProductCatalog()
        .then((products) => {
            console.log("Fetched products", products);

            const reviewPromises = products.map(product =>
                fetchProductReviews(product.id)
            );

            return Promise.all(reviewPromises);
        })
        .then((reviews) => {
            console.log("Fetched revies:", reviews);
            return fetchSalesReport();
        })
        .then((report) => {
            console.log("Sales report:", report);
        })
        .catch((error) => {
            console.log("Error", error);
        })
        .finally(() => {
            console.log("All API calls attempted.");
        })
}

handleApiCalls();