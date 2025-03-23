"use client";

import Image from "next/image";
import React from "react";

const itemSidebarBlog: any = [
    { label: "Tất cả", value: "108" },
    { label: "Thiết Kế Website", value: "36" },
    { label: "Thiết Kế App Mobile", value: "13" },
    { label: "Quản Lý Sản Xuất", value: "25" },
    { label: "Quản Lý Bán Hàng", value: "25" },
    { label: "Báo Chí Nói Về FOSO", value: "7" },
    { label: "Tin Tức FOSO", value: "5" },
];

const SidebarBlog = () => {
    return (
        <div className="space-y-8 w-full">
            <div className="space-y-6 ">
                <p className="font-extrabold text-2xl">Tìm Kiếm</p>
                <div className="bg-white rounded-[12px] py-2 px-3  flex justify-between items-center shadow-[0_12px_24px_#919EAB29]">
                    <p className="text-[#ACB3C7] font-medium text-base">
                        Tìm kiếm bài viết
                    </p>
                    <div className="p-3 rounded-[12px] bg-[#15AA7A]">
                        <svg
                            className="w-5 h-5 text-white"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <p className="font-extrabold text-2xl">Danh Mục</p>
                <div className="flex flex-col gap-4">
                    {itemSidebarBlog &&
                        itemSidebarBlog.map((item: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="flex justify-between items-center font-medium text-[#33404A] text-base"
                                >
                                    <p>{item.label}</p>
                                    <p>{item.value}</p>
                                </div>
                            );
                        })}
                </div>
            </div>
            <div
                style={{
                    backgroundImage:
                        "linear-gradient(77.74deg, #013DA0 11.85%, #0142A9 20.65%, #0148B3 29.45%, #024EBC 38.25%, #0254C5 47.05%, #025ACE 55.84%, #0261D7 64.64%, #0267E1 73.44%, #036EEA 82.24%, #0375F3 91.04%)",
                }}
                className="text-white rounded-[40px] p-4 py-6 md:p-6 lg:p-8 space-y-6 overflow-hidden w-full max-w-2xl mx-auto"
            >
                <div className="relative w-full flex justify-end">
                    <Image
                        width={500}
                        height={500}
                        alt="banner-laptop"
                        src="/laptop.png"
                        className="w-[70%] md:w-[60%] lg:w-[500px] h-auto -mr-9"
                        sizes="(max-width: 768px) 70vw, (max-width: 1200px) 60vw, 500px"
                    />
                </div>

                {/* Bottom Images */}
                <div className="relative w-full flex flex-col items-start gap-2 left-4 lg:left-1/5">
                    <Image
                        width={100}
                        height={100}
                        alt="banner-robo"
                        src="/robo.png"
                        className="w-[60px] md:w-[80px] lg:w-[100px] h-auto absolute -bottom-2 left-0"
                        sizes="(max-width: 768px) 60px, (max-width: 1200px) 80px, 100px"
                    />
                    <Image
                        width={300}
                        height={300}
                        alt="banner-free"
                        src="/free.png"
                        className="w-[60%] md:w-[70%] lg:w-[300px] h-auto relative"
                        sizes="(max-width: 768px) 60vw, (max-width: 1200px) 70vw, 300px"
                    />
                </div>
                <button className="w-full border-2 rounded-[40px] py-2 px-4 md:px-6 flex justify-between items-center gap-4 hover:bg-white/10 transition-colors">
                    <span className="text-sm md:text-base font-medium">
                        Trải Nghiệm Ngay
                    </span>
                    <svg
                        className="w-4 h-4 flex-shrink-0"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.50001 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <div
                style={{
                    backgroundImage:
                        "linear-gradient(77.74deg, #013DA0 11.85%, #0142A9 20.65%, #0148B3 29.45%, #024EBC 38.25%, #0254C5 47.05%, #025ACE 55.84%, #0261D7 64.64%, #0267E1 73.44%, #036EEA 82.24%, #0375F3 91.04%)",
                }}
                className="text-white rounded-[40px] p-4 space-y-6 overflow-clip py-9"
            >
                <div className="relative">
                    <Image
                        width={400}
                        height={400}
                        alt="banner-blog"
                        className="h-full w-full  scale-100  top-7 object-contain "
                        src={"/Group.png"}
                    />
                </div>
                <div className="p-2 space-y-6 w-full">
                    <p className="text-xl font-bold">
                        Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng phát
                        triển
                    </p>
                    <button className="rounded-[40px] w-full border-2 py-2 px-6 flex justify-between gap-8 items-center">
                        <p>Tham Gia Ngay</p>
                        <span className="">
                            <svg
                                className="w-4 h-4 text-white"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SidebarBlog;
