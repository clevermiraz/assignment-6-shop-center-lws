import { products } from "@/data/products";
import { discountedPrice } from "@/lib/utils";
import Link from "next/link";

export default function ProductsSection() {
    const allProducts = products.slice(0, 12);

    return (
        <>
            <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
                    {/* <!-- Product 1 Start --> */}
                    {allProducts.map((product) => (
                        <div key={product?.id}>
                            <Link href={`/products/${product?.id}`}>
                                <div
                                    className={`relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform`}
                                    style={{
                                        backgroundImage: `url(${product?.thumbnail})`,
                                    }}
                                ></div>
                            </Link>
                            <h2 className="text-sm lg:text-base mt-2">
                                <Link
                                    className="text-base font-bold"
                                    href={`/products/${product?.id}`}
                                >
                                    {product?.title}
                                </Link>
                                <span className="text-[#919090]">
                                    <Link
                                        href={`/category/${product?.category}`}
                                    >
                                        ({product?.category})
                                    </Link>
                                </span>
                            </h2>
                            <p className="text-[#919090] text-sm ">
                                {product?.description}
                            </p>

                            <p className="text-rose-600 text-sm mt-4">
                                <span className="text-[#919090] line-through">
                                    ${product?.price.toFixed(2)}
                                </span>{" "}
                                ${discountedPrice(product).toFixed(2)}
                            </p>
                        </div>
                    ))}
                    {/* <!-- Product 1 End --> */}
                </div>
            </section>
        </>
    );
}
