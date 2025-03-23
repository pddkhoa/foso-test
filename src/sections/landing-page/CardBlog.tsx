"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

// Constants
const POST = {
    image: {
        src: "https://s3-alpha-sig.figma.com/img/fb49/59c7/3f1f17145ea689bd38538129e6319827?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tkJcLhC4ViBGXzlxV-2ePkPNfR-Ix6f0QRNpj2cAcPDH3Gw9jlk4cL2R1Nxvkba1-gvG9mZu6xqF5mrMAz9rte45Y9rvU6k74oPWkPngAcNAG7QU9tgAE4MzlLURafh5MCmJpokHxTJMUUArH5eWwaE~fcL5leX-SvDcWbaLTczBgx0ztopfryPPURe96rsCgE8zMgNq2HGnp4fupP-iTdfWuFhfKO8wFsoGtv4bQVNRcrpI0ovX0RJOu73SGg9w11-6myzp3bddMGtsuO6jIUklOQeWBRaC~uU2bixriemITukOt-0r6w~ax4wOf2vArK7NTyFVftxV7wABkqDwhg__",
        alt: "card-blog",
        width: 505,
        height: 500,
    },
    category: "Quản Lý Sản Xuất",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    date: "17/11/2022",
    readTime: "10 phút đọc",
};

// Reusable Icon Component
const Icon = ({ svgPath, className = "w-4 h-4" }: any) => (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d={svgPath}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
        />
    </svg>
);

const CardBlog = () => {
    const router = useRouter();

    // Icon paths
    const calendarIcon =
        "M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z";
    const clockIcon =
        "M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z";
    const arrowIcon =
        "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z";

    return (
        <div className="h-[600px]">
            {/* Image Section */}
            <Image
                src={POST.image.src}
                alt={POST.image.alt}
                width={POST.image.width}
                height={POST.image.height}
                className="h-[65%] w-full rounded-3xl object-cover"
            />

            {/* Content Section */}
            <div className="space-y-3 pt-6">
                <div className="w-fit rounded-[8px] bg-[#E2F0FE] px-2 py-1">
                    <p className="text-xs font-medium text-[#0F4F9E]">
                        {POST.category}
                    </p>
                </div>

                <h2 className="text-2xl font-extrabold">{POST.title}</h2>

                <div className="flex items-center gap-3 divide-x text-[#667F93]">
                    <div className="flex items-center gap-1 pr-3 font-medium">
                        <Icon svgPath={calendarIcon} />
                        <p>{POST.date}</p>
                    </div>
                    <div className="flex items-center gap-1 pl-3 font-medium">
                        <Icon svgPath={clockIcon} />
                        <p>{POST.readTime}</p>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => router.push("/blog")}
                    className="flex items-center gap-4 text-lg font-semibold text-[#667F93] hover:text-black"
                >
                    <p>Khám phá thêm</p>
                    <Icon svgPath={arrowIcon} />
                </button>
            </div>
        </div>
    );
};

export default CardBlog;
