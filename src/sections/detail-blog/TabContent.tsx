"use client";

import React, { useCallback } from "react";
import { Reason } from "./SubHeadingContent";

interface TocItem {
    id: number;
    title: string;
    subItems?: { id: string; title: string }[];
}

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

// Component TableOfContents
const TableOfContents = () => {
    const tocItems: TocItem[] = [
        { id: 1, title: "Quy trình 5S là gì?" },
        { id: 2, title: "Lợi ích quy trình 5S đem lại" },
        {
            id: 3,
            title: "Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
            subItems: reasonsData3.map((reason) => ({
                id: reason.subHeading.split(" ")[0],
                title: reason.subHeading,
            })),
        },
        {
            id: 4,
            title: "Quy trình 5S gồm các bước",
            subItems: reasonsData4.map((reason) => ({
                id: reason.subHeading.split(" ")[0],
                title: reason.subHeading,
            })),
        },
        {
            id: 5,
            title: "Quy trình được thực hiện như sau:",
            subItems: reasonsData5.map((reason) => ({
                id: reason.subHeading.split(" ")[0],
                title: reason.subHeading,
            })),
        },
        { id: 6, title: "Quy trình 5S có giống với Kaizen?" },
        { id: 7, title: "Đối tượng nào nên áp dụng 5S?" },
        { id: 8, title: "Các yếu tố tạo nên thành công cho quy trình 5S" },
    ];

    const handleScroll = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <div className="space-y-4 w-full ">
            <ul className="space-y-2 ">
                {tocItems.map((item) => (
                    <li key={item.id}>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
                                handleScroll(`section-${item.id}`);
                            }}
                            className="cursor-pointer text-[18px] font-bold text-[#15AA7A] hover:underline break-words text-left mr-auto"
                        >
                            {item.id}. {item.title}
                        </button>
                        {item.subItems && (
                            <ul className="pl-6 space-y-1 mt-1 truncate">
                                {item.subItems.map((subItem) => (
                                    <li key={subItem.id}>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleScroll(
                                                    `subsection-${subItem.id.replace(
                                                        ".",
                                                        "-"
                                                    )}`
                                                );
                                            }}
                                            className="text-[18px] cursor-pointer font-medium text-foreground hover:underline break-words text-left mr-auto"
                                        >
                                            {subItem.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TableOfContents;
