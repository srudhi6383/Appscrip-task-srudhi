"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Loader } from "..";

const Main = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [filters, setFilters] = useState([
        {
            title: "Ideal for",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ],
        },
        {
            title: "Occasion",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ],
        },
        {
            title: "Work",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ],
        },
        {
            title: "Fabric",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ],
        },
        {
            title: "Segment",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ],
        },
        {
            title: "Suitable for",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ],
        },
        {
            title: "Raw Materials",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ],
        },
        {
            title: "Pattern",
            show: false,
            option: [
                { Men: false },
                { Women: false },
                { Kids: false },
            ],
        },
    ]);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        setLoading(true);
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const json = await res.json();
            setProducts(json);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const toggleFilterVisibility = (index) => {
        setFilters((prevFilters) =>
            prevFilters.map((filter, i) =>
                i === index ? { ...filter, show: !filter.show } : filter
            )
        );
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="w-full max-w-[95rem] mx-auto">
            <div className="my-8 p-4 md:px-10 flex justify-between items-center uppercase border-t-[1px] border-b-[1px] border-slate-400">
                <span onClick={() => setShowFilter(!showFilter)} className="w-full sm:w-1/2 text-center md:hidden cursor-pointer">Filter</span>
                <span onClick={() => setShowFilter(!showFilter)} className="hidden md:block cursor-pointer">Show Filter</span>
                <span className="w-[2px] h-[26px] bg-black md:hidden"></span>
                <select className="uppercase text-center cursor-pointer">
                    <option value="recommended">Recommended</option>
                    <option value="newest first">Newest First</option>
                    <option value="popular">Popular</option>
                    <option value="high to low">Price: High to Low</option>
                    <option value="low to high">Price: Low to High</option>
                </select>
            </div>
            <div className="pb-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {showFilter && (
                    <div className="relative md:static z-20 bg-white w-[150px] pl-3 md:w-[260px]">
                        <div className="flex gap-3">
                            <input type="checkbox" className="p-4 font-bold" />
                            <label className="uppercase">Customizable</label>
                        </div>
                        {filters.map((item, index) => (
                            <div key={index} className="p-4 border-b-[1px] border-slate-400">
                                <span
                                    className="text-xl font-bold cursor-pointer"
                                    onClick={() => toggleFilterVisibility(index)}
                                >
                                    {item.title}
                                </span>
                                {item.show && (
                                    <div className="flex flex-col gap-2 my-2">
                                        <ul>
                                            {item.option.map((elem, i) =>
                                                Object.keys(elem).map((key) => (
                                                    <li key={key + index + i}>
                                                        <input
                                                            type="checkbox"
                                                            defaultChecked={elem[key]}
                                                            id={key + index + i}
                                                        />
                                                        <label className="ml-3" htmlFor={key + index + i}>
                                                            {key}
                                                        </label>
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
                {products.map((prod, i) => (
                    <ProductCard key={i} prod={prod} />
                ))}
            </div>
        </div>
    );
};

export default Main;
