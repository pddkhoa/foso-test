"use client";

import Hero from "@/sections/landing-page/Hero";
import ListBlog from "@/sections/landing-page/ListBlog";
import Pagination from "@/sections/landing-page/Pagination";
import { useState } from "react";

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        console.log(`Chuyển đến trang: ${page}`);
    };
    return (
        <div className="space-y-24 min-h-screen py-9">
            <Hero />
            <ListBlog />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
