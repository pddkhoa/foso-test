"use client";

import {
    Reason,
    Section,
    SubSection,
} from "@/sections/detail-blog/SubHeadingContent";
import Image from "next/image";
import React from "react";

const reasonsData3: Reason[] = [
    {
        subHeading: "3.1 Cải thiện rõ nét môi trường làm việc",
        content:
            "Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.",
    },
    {
        subHeading: "3.2 Tiết kiệm thời gian đáng kể",
        content:
            "Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.",
    },
    {
        subHeading: "3.3 Tăng năng suất làm việc",
        content:
            "Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.",
    },
    {
        subHeading: "3.4 Tiết kiệm chi phí",
        content:
            "Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.",
    },
    {
        subHeading: "3.5 Tăng chất lượng sản phẩm",
        content:
            "5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.",
    },
];

const reasonsData4: Reason[] = [
    {
        subHeading: "4.1 Seiri (Ngăn nắp)",
        content:
            "Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.",
    },
    {
        subHeading: "4.2 Seiton (Sắp xếp)",
        content:
            "Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.",
    },
    {
        subHeading: "4.3 Seiso (Vệ sinh)",
        content:
            "Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.",
    },
    {
        subHeading: "4.4 Seiketsu (Tiêu chuẩn hóa)",
        content:
            "Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu. ",
    },
    {
        subHeading: "4.5 Shitsuke (Kỷ luật)",
        content:
            "Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.",
    },
];

const reasonsData5: Reason[] = [
    {
        subHeading: "5.1 Giai đoạn chuẩn bị",
        content:
            "Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.",
    },
    {
        subHeading: "5.2 Triển khai rộng rãi ",
        content:
            "Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.",
    },
    {
        subHeading: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp",
        content:
            "Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.",
    },
    {
        subHeading: "5.4 Sàng lọc, sắp xếp và đánh giá",
        content:
            "Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này. ",
    },
    {
        subHeading: "5.5 Đánh giá",
        content:
            "Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.",
    },
];

const ContentBlog = () => {
    return (
        <>
            <div className="rounded-[8px] py-1 px-2 bg-[#E2F0FE] w-fit">
                <p className="font-medium text-xs text-[#0F4F9E]">
                    Quản Lý Sản Xuất
                </p>
            </div>
            <div className="font-extrabold text-4xl">
                Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nên Biết
            </div>
            <div className="flex justify-between">
                <div className="flex justify-center items-center  gap-3">
                    <div className="rounded-[40px] w-[64px] h-[64px] flex justify-center items-center bg-white border border-[#F1F5F7] px-[5px] py-[6px]">
                        <Image
                            alt="logo-auth"
                            width={32}
                            height={32}
                            src={"/logo.png"}
                            className=" object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#667F93] text-sm font-medium">
                            Tác Giả
                        </p>
                        <p className="text-base font-bold text-[#33404A]">
                            FOSO Creator
                        </p>
                    </div>
                </div>
                <div className="flex gap-6 items-center divide-x ">
                    <div className="text-[#667F93] font-medium text-base flex items-center gap-1 pr-6">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p>Cập nhật vào 17/11/2022</p>
                    </div>
                    <div className="text-[#667F93] font-medium text-base flex items-center gap-1">
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg>

                        <p>10 phút đọc</p>
                    </div>
                </div>
            </div>
            <div className="space-y-2 w-full">
                <Image
                    alt="image-content"
                    height={600}
                    width={900}
                    className="rounded-[8px] w-full"
                    src={
                        "https://s3-alpha-sig.figma.com/img/3c2e/9e54/043c2dc1df0b9a516b94427df3ad144d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MmqvW9vkNK8abpqMuTkUBMmIpoClVJGkvZj1ExaMZq2AgA9CU8B19uofMgVi7-eW71Fs13tM3oKBwjTsl-ytBKBeILNazcyB45U1fV~cXkaAIAC12PorARrP0O4~uH4dLeJJVUIfPzx5b0D2AlBTT3lSDXkQEht1VIaEIoN6mdAqZ7LK2ZNcfB6eNMliYtxlTf2hmUOs4v7C0Uum9ZRRCTAkRsjAToM-EtoVTQOFSBlrzgxKjfijOVgBeZJOijUFjSozTOIFSQZLicF4gTesxezqtU56sa4c3cEhBlGNLKXEdt29iHsr-147olldVVzlxEVsitzaFlEMCbta52~iWg__"
                    }
                />
                <p className="text-center text-base font-normal text-[#667F93]">
                    Quy trình 5S là gì?
                </p>
            </div>
            <div className="px-4 relative">
                <div className="absolute left-0 -top-2 font-[Racing_Sans_One] text-[94px] font-normal leading-[24px] text-center text-[#15AA7A]">
                    &quot;
                </div>
                <p className="font-medium italic text-[20px] leading-[24px] text-[#33404A] text-center">
                    Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là
                    gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ
                    trả lời cho bạn thông tin chi tiết về mô hình này cũng như
                    yếu tố tạo nên thành công của quy trình bạn nhé.
                </p>
            </div>
            <div className="space-y-6">
                <div id="section-1" className="space-y-6 font-medium text-base">
                    <h1 className="heading1-content">1. Quy trình 5S là gì?</h1>
                    <p>
                        Quy trình 5S được biết đến là mô hình quản trị tinh gọn
                        trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ
                        sở hoa anh đào Nhật Bản.
                    </p>
                    <p>
                        Quy trình 5S hiện nay đang được rất nhiều nước trên thế
                        giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy
                        trình này bao gồm 5 chữ S đầu trong tiếng Nhật:
                    </p>
                    <ul className="list-disc text-[#15AA7A] pl-10">
                        <li>
                            Seiri{" "}
                            <span className="text-foreground">(Ngăn nắp)</span>
                        </li>
                        <li>
                            Seiso{" "}
                            <span className="text-foreground">(Sạch sẽ)</span>
                        </li>
                        <li>
                            Seiton
                            <span className="text-foreground">(Trật tự)</span>
                        </li>
                        <li>
                            Shitsuke {" "}
                            <span className="text-foreground">(Kỷ luật)</span>
                        </li>
                        <li>
                            Seiketsu {" "}
                            <span className="text-foreground">
                                (Tiêu chuẩn hóa)
                            </span>
                        </li>
                    </ul>
                </div>
                <div id="section-2" className="space-y-6 font-medium text-base">
                    <h1 className="heading1-content">
                        2. Lợi ích quy trình 5S đem lại
                    </h1>
                    <p>
                        Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể
                        hiện cho mỗi bước của quy trình với mục đích cải tiến
                        môi trường làm việc của doanh nghiệp.
                    </p>
                    <p>
                        Khi doanh nghiệp áp dụng quy trình vào trong tổ chức,
                        doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo
                        nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn,
                        các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và
                        dễ dàng tìm kiếm khi cần thiết.
                    </p>
                    <p>
                        Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo
                        ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp
                        phần vào tạo nên một văn hóa doanh nghiệp tích cực.
                    </p>
                </div>

                <div className="space-y-2 w-full">
                    <Image
                        alt="image-content"
                        height={600}
                        width={900}
                        className="rounded-[8px] w-full"
                        src={
                            "https://s3-alpha-sig.figma.com/img/4563/6b8c/cab8950d8e2e5b6260cc5f935988f9e3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JSttCtEOFkqt6TFz3vKZQmjjAJyws1dQ1ZLvHrhwCRNliSDf0soyKyE~t3XazfsMsOtuqeEnr9xU2xP8eymDeZzLMv3JdwaMBTKSLn~hEMjPoywyNrbLOTiXeOhnWWkrFm1YiSySpgOU1yZoCZigToX2K-dJaeP~H98dOZmcPs4CCKCIQhD2ucsxNd9y3xjswuMk5Qz8wfRCiMCSuHmYEVhv97lxhW-PcHJsmEIWFOoaTmIPWUUizLaduOuTQksyUb1APlnmsTOEpUovuNYqmTCv4Ip2u1zOx-j5PmvtKhstSMV0OHeOIojY3WCIDrYYB9P4Ah6EYhi~ufJyNfAEoA__"
                        }
                    />
                    <p className="text-center text-base font-normal text-[#667F93]">
                        Tại sao doanh nghiệp cần quy trình 5S?
                    </p>
                </div>
                <Section
                    id="section-3"
                    heading="3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?"
                    paragraph="Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:"
                >
                    <div className="space-y-6">
                        {reasonsData3.map((reason, index) => (
                            <SubSection
                                key={index}
                                subHeading={reason.subHeading}
                                content={reason.content}
                            />
                        ))}
                    </div>
                </Section>

                <div className="space-y-2 w-full">
                    <Image
                        alt="image-content"
                        height={600}
                        width={900}
                        className="rounded-[8px] w-full"
                        src={
                            "https://s3-alpha-sig.figma.com/img/aca4/ad52/0d964d5a355eb835e1850fadc975c3ec?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kFsB5qwHMddaowYxzhtiDqcBNmOzYoSk-pesmG1JMror4vM2SZihT02INxfHRA~Au1x5auG~UGHUgE3HftNgxiqRlOZYJho8rHJ9GUbJ3CRtuAsw33buJY3nLieDqQwCbc2dgVq~xPNn6CjXQN8RVNPHMkmit3VKyD5Ohls8ShFWZ-uuOldySe3OId6M~0Oko3uQs51SYIxSd6lnbhEkI-7NYFDmXz56uB3BNmH5zbjVrmS32u5DZqQZbFBc~w65EBDyjZammY4w6rBX14yTOG5QvVA5T8REd7GcMo3CCLO3ZpJqIwfVUwGom4DEzBTmVjR9KmcJsNtTsCU0cxVWlQ__"
                        }
                    />
                    <p className="text-center text-base font-normal text-[#667F93]">
                        Quy trình 5s gồm các bước
                    </p>
                </div>
                <Section
                    id="section-4"
                    heading="4. Quy trình 5S gồm các bước"
                    paragraph="5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:"
                >
                    <div className="space-y-6">
                        {reasonsData4.map((reason, index) => (
                            <SubSection
                                key={index}
                                subHeading={reason.subHeading}
                                content={reason.content}
                            />
                        ))}
                    </div>
                </Section>
                <div className="space-y-2 w-full">
                    <Image
                        alt="image-content"
                        height={600}
                        width={900}
                        className="rounded-[8px] w-full"
                        src={
                            "https://s3-alpha-sig.figma.com/img/3012/23da/92e5913dc28eee4002bbae19871f9c95?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E4yxOW1h3VkccpppagOdLa~~VMjc9R~koku4Td9ts28PCObAwt7Wf87fpfwa4MThXIN2kjgY7za1Np5-05fBLNL7LkKICaOskdqgn8plulrnMzMSMQUpTo1c8ueH1ggWkKK69uy42f0Y6loEg9UifajYBt1sN5kZsa5lxdqmCcJsdTw2CQRIqtdkmtJXAMDZ3NyMp3R0wy2Zd13HVR6kqCC1cFpKkq-WHJ1aw89fUc1n6ER~4hp~FytBFtRq4ZVoC4P0Z0GtFuHyLnHARKsp1mf6EcMnclmDsz747aTyPUchA9nVlIKmvPrf2F5sscdnSLxZSUj-Ek0PwEhRwr-yFg__"
                        }
                    />
                    <p className="text-center text-base font-normal text-[#667F93]">
                        Các bước thực hiện quy trình 5s
                    </p>
                </div>
                <Section
                    id="section-5"
                    heading="5. Quy trình được thực hiện như sau:"
                    paragraph="Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:"
                >
                    <div className="space-y-6">
                        {reasonsData5.map((reason, index) => (
                            <SubSection
                                key={index}
                                subHeading={reason.subHeading}
                                content={reason.content}
                            />
                        ))}
                    </div>
                </Section>

                <div id="section-6" className="space-y-6">
                    <h1 className="heading1-content">
                        6. Quy trình 5S có giống với Kaizen?
                    </h1>
                    <p className="para-content">
                        Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với
                        Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm
                        khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với
                        nhau.
                    </p>
                    <div className="pr-[16px] pl-[36px] pt-[12px] pb-[8pb] border-l-[3px] border-[#15AA7A] ">
                        <p className="font-medium italic text-[20px] leading-[28px] text-[#33404A]">
                            Về Kaizen, thì đây được xem là một triết lý cải tiến
                            liên tục trong doanh nghiệp. Phương pháp này nhằm
                            tạo ra sự thay đổi tích cực, mang tính liên tục và
                            bền vững.
                        </p>
                    </div>
                    <div className="pr-[16px] pl-[36px] pt-[12px] pb-[8pb] border-l-[3px] border-[#15AA7A] ">
                        <p className="font-medium italic text-[20px] leading-[28px] text-[#33404A]">
                            Còn đối với quy tắc 5S, đây là một phương pháp quản
                            lý và cải tiến trong sản xuất. 5S tập trung vào việc
                            sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật
                            trong môi trường làm việc.
                        </p>
                    </div>
                    <p className="para-content">
                        Tuy nhiên, quy trình 5S được xem là một phần của Kaizen.
                        Và quy tắc này đóng vai trò quan trọng trong việc tạo ra
                        môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường
                        được sử dụng làm bước đầu tiên trong quá trình cải tiến
                        liên tục của phương pháp Kaizen để tạo ra một nền tảng
                        vững chắc cho các hoạt động cải tiến tiếp theo.
                    </p>
                </div>

                <div id="section-7" className="space-y-6">
                    <h1 className="heading1-content">
                        7. Đối tượng nào nên áp dụng 5S?
                    </h1>
                    <p className="para-content">
                        Quy trình 5S được xem là phương pháp quản lý được áp
                        dụng rộng rãi ở nhiều ngành công nghiệp và các loại
                        doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt
                        cho các doanh nghiệp sản xuất, các cơ quan hành chính,
                        các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.
                    </p>
                    <p className="para-content">
                        Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt
                        động phức tạp, các trang thiết bị và vật dụng phải được
                        quản lý và sử dụng hiệu quả.
                    </p>
                    <div className="space-y-2 w-full">
                        <Image
                            alt="image-content"
                            height={600}
                            width={900}
                            className="rounded-[8px] w-full"
                            src={
                                "https://s3-alpha-sig.figma.com/img/dba1/89ad/0c990ce2db7276da34630a0782d968e4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rL2zAXiq3QWsCvR0h1~3dRWrfeLIPMQo6KB-JsC3piC08EPSJIUe~s3VecMkVL9OnczRHeMiJwbcpAWf3BJBLme2KMsHBD5vSBh0KTTNraex7zzT8dIMZqLgtjKVe4msMcEbelIsBnjGd17tVEHaFBkWfUV7SakOlcWrCBEdW-~FAGxvc9bs7GSlAt2onwL6cqjizGjCmj645cWQ6vwTZK7imJ6j6dQJYbRGWId~f02yt8YFVTiFkhyLG6glyb~MyPFZMF1GeUaHqNphrPm5W1kTVKFv8W9LlGHkTJisuBk20Jv38f0spl6WSUZRiM-89aTFfHsYfswPRQK6OXMw6A__"
                            }
                        />
                        <p className="text-center text-base font-normal text-[#667F93]">
                            Các yếu tố tạo nên thành công cho quy trình 5S
                        </p>
                    </div>
                </div>
                <div id="section-8" className="space-y-6">
                    <h1 className="heading1-content">
                        8. Các yếu tố tạo nên thành công cho quy trình 5S
                    </h1>
                    <p className="para-content">
                        Và những nhân tố quyết định đến quá trình thành công của
                        quy trình nhằm cải tiến môi trường làm việc của doanh
                        nghiệp đó là từ phía:
                    </p>
                    <ul className="list-disc text-foreground pl-10">
                        <li className="para-content">
                            Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào
                            doanh nghiệp. Bởi đây yếu tố quan trọng nhất để
                            quyết định doanh nghiệp có áp dụng quy tắc này hay
                            không.
                        </li>
                        <li className="para-content">
                            Chương trình, kế hoạch thực hiện quy trình: Sau khi
                            phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa
                            lên ý tưởng, kế hoạch thực hiện triển khai 5S.
                        </li>{" "}
                        <li className="para-content">
                            Sự tự nguyện tham gia của toàn thể nhân viên: Doanh
                            nghiệp cần huy động và khuyến khích nhân viên tự
                            nguyện thực hiện vì lợi ích chung của tổ chức, của
                            doanh nghiệp.
                        </li>
                    </ul>
                    <p className="para-content">
                        Đồng thời, trên đây là các yếu tố tạo nên sự thành công
                        nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt
                        trước khi bắt tay vào triển khai quy trình 5S vào doanh
                        nghiệp của mình. Và với những thông tin bổ ích như trên,
                        FOSO mong rằng phần nào giúp được doanh nghiệp của bạn
                        phát triển, cải tiến vượt bậc trong tương lai.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ContentBlog;
