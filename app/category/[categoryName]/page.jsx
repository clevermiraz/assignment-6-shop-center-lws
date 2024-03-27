import ProductsSection from "@/components/CategoryWiseProductPage/ProductsSection";
import EmailSubscriptionSection from "@/components/EmailSubscriptionSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { products } from "@/data/products";

export default function CategoryWiseProductPage({ params }) {
    const { categoryName } = params;

    let categoryWiseProduct = products.filter(
        (product) =>
            product.category.toLowerCase() === categoryName.toLowerCase()
    );

    if (categoryName === "all") {
        categoryWiseProduct = products;
    }

    return (
        <>
            <Header />
            <main>
                <ProductsSection
                    products={categoryWiseProduct}
                    categoryName={categoryName}
                />
                <EmailSubscriptionSection />
            </main>

            <Footer />
        </>
    );
}
