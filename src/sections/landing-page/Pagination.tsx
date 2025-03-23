// components/Pagination.tsx
"use client";

import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    // Tạo mảng các số trang
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5; // Số trang tối đa hiển thị trước khi dùng "..."

    if (totalPages <= maxPagesToShow) {
        // Nếu tổng số trang ít hơn hoặc bằng maxPagesToShow, hiển thị tất cả
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {
        // Nếu có nhiều trang, hiển thị trang đầu, cuối, và một số trang gần trang hiện tại
        const leftBound = Math.max(2, currentPage - 1);
        const rightBound = Math.min(totalPages - 1, currentPage + 1);

        // Thêm trang 1
        pages.push(1);

        // Thêm "..." nếu cần
        if (leftBound > 2) {
            pages.push("...");
        }

        // Thêm các trang gần trang hiện tại
        for (let i = leftBound; i <= rightBound; i++) {
            pages.push(i);
        }

        // Thêm "..." nếu cần
        if (rightBound < totalPages - 1) {
            pages.push("...");
        }

        // Thêm trang cuối
        if (totalPages > 1) {
            pages.push(totalPages);
        }
    }

    // Xử lý khi nhấn nút "Trang trước"
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    // Xử lý khi nhấn nút "Trang kế tiếp"
    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="px-[240px]">
            <div className="flex items-center justify-between gap-2 py-4">
                {/* Nút "Trang trước" */}
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-3 text-[#B3C5D4] ${
                        currentPage === 1
                            ? "cursor-not-allowed"
                            : "hover:underline hover:text-black "
                    }`}
                >
                    <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p>Trang trước</p>
                </button>

                {/* Các số trang */}
                <div className="flex gap-2">
                    {pages.map((page, index) => {
                        if (page === "...") {
                            return (
                                <span
                                    key={`ellipsis-${index}`}
                                    className=" font-medium"
                                >
                                    ...
                                </span>
                            );
                        }

                        return (
                            <button
                                key={page}
                                onClick={() =>
                                    typeof page === "number" &&
                                    onPageChange(page)
                                }
                                className={`w-8 h-8 flex items-center justify-center rounded-[8px] font-medium ${
                                    currentPage === page
                                        ? "bg-[#D1F7EA] "
                                        : "hover:bg-[#D1F7EA] transition-colors"
                                }`}
                            >
                                {page}
                            </button>
                        );
                    })}
                </div>

                {/* Nút "Trang kế tiếp" */}
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={` font-medium flex items-center gap-3 text-[#B3C5D4] ${
                        currentPage === totalPages
                            ? " cursor-not-allowed"
                            : "hover:underline hover:text-black"
                    }`}
                >
                    Trang kế tiếp{" "}
                    <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Pagination;
