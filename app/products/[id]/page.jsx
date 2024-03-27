import ProductDetailsSection from "@/components/ProductDetailsPage/ProductDetailsSection";
import { products } from "@/data/products";

export default function ProductDetailsPage({ params }) {
    const { id } = params;

    const product = products.find((product) => product.id === parseInt(id));

    return (
        <>
            <main className="h-screen">
                <ProductDetailsSection product={product} />
            </main>
        </>
    );
}
