import React from "react";

// Định nghĩa interface cho props của các component
interface SectionProps {
    id?: string; // Thêm id vào SectionProps
    heading: string;
    paragraph?: string;
    children?: React.ReactNode;
}

interface SubSectionProps {
    id?: string; // Thêm id vào SubSectionProps
    subHeading: string;
    content: string;
}

// Định nghĩa interface cho dữ liệu
export interface Reason {
    subHeading: string;
    content: string;
}

// Component cho tiêu đề chính và nội dung đoạn văn
const Section: React.FC<SectionProps> = ({
    id,
    heading,
    paragraph,
    children,
}) => (
    <div id={id} className="space-y-6">
        {" "}
        {/* Thêm id vào div */}
        <p className="heading1-content">{heading}</p>
        {paragraph && <p className="para-content">{paragraph}</p>}
        {children}
    </div>
);

// Component cho tiêu đề phụ và nội dung đoạn văn
const SubSection: React.FC<SubSectionProps> = ({ id, subHeading, content }) => (
    <div id={id} className="space-y-2">
        {" "}
        {/* Thay <p> bằng <div> và thêm id */}
        <span className="sub-heading-content">{subHeading}</span>
        <p className="para-content">{content}</p>
    </div>
);

export { Section, SubSection };
