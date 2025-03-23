"use client";
import Image from "next/image";
import React from "react";
import CardBlog from "./CardBlog";
import SidebarBlog from "./SidebarBlog";

const ListBlog = () => {
    return (
        <section className="px-[240px] ">
            <div className=" grid grid-cols-12 gap-8">
                <div className="col-span-8 space-y-8">
                    <p className="font-extrabold text-4xl align-middle">
                        Tất Cả Bài Viết
                    </p>
                    <div
                        style={{
                            backgroundImage:
                                "linear-gradient(77.74deg, #013DA0 11.85%, #0142A9 20.65%, #0148B3 29.45%, #024EBC 38.25%, #0254C5 47.05%, #025ACE 55.84%, #0261D7 64.64%, #0267E1 73.44%, #036EEA 82.24%, #0375F3 91.04%)",
                        }}
                        className="text-white rounded-[40px] p-12 flex "
                    >
                        <div className="w-[60%] space-y-8">
                            <p className="text-3xl font-bold">
                                Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng
                                phát triển
                            </p>
                            <button className="rounded-[40px] border-2 py-2 px-6 flex justify-between gap-8 items-center">
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
                        <div className="relative w-[40%] ">
                            <Image
                                width={400}
                                height={400}
                                alt="banner-blog"
                                className="h-full w-full absolute scale-125  top-7 object-contain "
                                src={"/Group.png"}
                            />
                        </div>
                    </div>
                    <div className="col-span-8 grid grid-cols-2 gap-8">
                        <div className="w-full">
                            <CardBlog />
                        </div>
                        <div className="w-full">
                            <CardBlog />
                        </div>{" "}
                        <div className="w-full">
                            <CardBlog />
                        </div>{" "}
                        <div className="w-full">
                            <CardBlog />
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <SidebarBlog />
                </div>
            </div>
        </section>
    );
};

export default ListBlog;
