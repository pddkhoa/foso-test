import { Raleway } from "next/font/google";

export const raleway = Raleway({
    subsets: ["latin"], // Chọn subset phù hợp
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Tất cả weight bạn cần
    style: ["normal", "italic"], // Hỗ trợ cả italic
    display: "swap", // Giảm layout shift
});
