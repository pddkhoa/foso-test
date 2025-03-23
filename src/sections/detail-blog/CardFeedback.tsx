"use client";
import React, { FC } from "react";
import Image from "next/image";

type CardFeedbackProps = {
    icon: string;
    count: number;
    label: string;
    isActive: boolean;
};

const CardFeedback: FC<CardFeedbackProps> = ({
    icon,
    count,
    label,
    isActive,
}) => {
    return (
        <div
            className={`flex flex-col gap-1 items-center hover:border cursor-pointer p-1 w-[90px] rounded-[4px] ${
                isActive ? "border border-[#10805B]" : null
            }`}
        >
            <span>
                <Image
                    alt="like-icon"
                    src={icon}
                    width={48}
                    height={48}
                    className="object-cover"
                />
            </span>
            <span className="text-base font-bold text-center text-[#10805B]">
                {count}
            </span>
            <p className="text-sm font-medium text-center text-[#10805B]">
                {label}
            </p>
        </div>
    );
};

export default CardFeedback;
