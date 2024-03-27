import EmailSubscriptionSection from "@/components/EmailSubscriptionSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductsSection from "@/components/HomePage/ProductsSection";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <ProductsSection />
                <EmailSubscriptionSection />
            </main>

            <Footer />
        </>
    );
}
