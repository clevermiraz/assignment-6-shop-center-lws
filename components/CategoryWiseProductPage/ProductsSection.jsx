import CustomLink from "@/components/CustomLink";
import { categories } from "@/data/categories";
import { discountedPrice } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function ProductsSection({ products, categoryName }) {
    return (
        <>
            <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
                <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
                    <CustomLink path="/category/all" scroll={false}>
                        <button className="hover:border-b border-black block h-6 box-border mt-4">
                            All
                        </button>
                    </CustomLink>
                    {categories.map((category, index) => (
                        <React.Fragment key={index}>
                            <CustomLink
                                path={`/category/${category}`}
                                scroll={false}
                            >
                                <button className="hover:border-b border-black block h-6 box-border mt-5">
                                    {category}
                                </button>
                            </CustomLink>
                        </React.Fragment>
                    ))}
                </div>
                <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
                    {/* <!-- Product 1 Start --> */}
                    {products.length > 0 ? (
                        <>
                            {products.map((product) => (
                                <div key={product?.id}>
                                    <Link href={`/products/${product?.id}`}>
                                        <div
                                            className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform"
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
                        </>
                    ) : (
                        <h1>No products found in {categoryName}</h1>
                    )}
                    {/* <!-- Product 1 End --> */}
                </div>
            </section>
        </>
    );
}
