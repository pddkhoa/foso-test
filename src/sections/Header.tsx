"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

// Interface cho props của NavItem
interface NavItemProps {
    label: string;
    hasDropdown?: boolean;
    isActive?: boolean;
}

// Interface cho props của Button
interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}

// Component cho biểu tượng mũi tên xuống
const DropdownArrow = () => (
    <svg
        className="h-4 w-4"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
        />
    </svg>
);

// Component cho mục điều hướng
const NavItem: React.FC<NavItemProps> = ({
    label,
    hasDropdown = false,
    isActive = false,
}) => (
    <div className="navItem relative">
        <span className={isActive ? "font-bold" : ""}>{label}</span>
        {isActive && (
            <div className="absolute top-6 left-10 h-1.5 w-1.5 rounded-full bg-[#1AD598]" />
        )}
        {hasDropdown && (
            <span className="inline-flex items-center">
                <DropdownArrow />
            </span>
        )}
    </div>
);

// Component cho nút chung
const Button: React.FC<ButtonProps> = ({ children, className }) => (
    <button
        className={`rounded-[40px] py-2 px-3 flex items-center ${className}`}
    >
        {children}
    </button>
);

const Header = () => {
    const router = useRouter();
    // Dữ liệu logo
    const logoSrc =
        "https://s3-alpha-sig.figma.com/img/72a0/cd2b/6e981218d4aee7968a13351e9bc8d935?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cIAF5RTgHvpIHgI9Jpq-mA2RRFAEBa6lSEC-Yp6HSqhCQNr9RU1yuiHdc9aBnLoyGOfFh-lc3sS9sS2f2Eo5SICIbv~vFWN4VnzUWevj42vRP8N4aHpu5DQOsrMnpXeIUNSJ6BL9HZH~0xAr7SQ6C1zBYv4sl7hV~0ll3h~-oHNgdE1v8HRX8SIzsiEvHDEcfGa400amN~2NObcQis8D~Z-WUFn0OOkcVBFi2CHncuGWw41A15mr266j0ORwhaeQFxtG4TkuYgvlPfRjBWhnRXbRIDwD0mG6Y5te1v3iMA2dSys1vYeAptQ07EUYvrWlwGM3S5KZpI6vCRJyP2PArw__";

    return (
        <header className="sticky top-0 z-20 py-6 flex justify-center items-center">
            <div className="flex gap-16 justify-center bg-[#FFFFFFA6] items-center px-9 py-3 w-[1280px] shadow-[0px_2px_14px_#EAEAEA] rounded-[40px] backdrop-blur-[25px]">
                {/* Logo */}
                <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    <Image
                        src={logoSrc}
                        width={134}
                        height={60}
                        alt="logo-header"
                    />
                </button>

                {/* Navigation */}
                <nav className="flex items-center justify-center gap-2">
                    <NavItem label="Về chúng tôi" />
                    <NavItem label="Giải pháp" hasDropdown />
                    <NavItem label="Tài nguyên" hasDropdown isActive />
                    <NavItem label="Liên hệ" />
                </nav>

                {/* Action Buttons */}
                <div className="flex gap-2 items-center justify-center">
                    <Button className="bg-gradient-to-b from-[#09090B0D] to-[#09090B1A]  border border-gray-100/20 gap-3">
                        <Image
                            alt="flag-country"
                            height={24}
                            width={24}
                            className="object-cover"
                            src="/icon_country.png"
                        />
                        <div className="flex items-center text-sm gap-1">
                            <span>VI</span>
                            <DropdownArrow />
                        </div>
                    </Button>
                    <Button className="bg-[#1AD598] gap-3 bg-gradient-to-l from-[#FFFFFF4D] to-[#FFFFFF00] text-[#052B1E] font-bold">
                        <p>Trở Thành Khách Hàng</p>
                        <span className="bg-black rounded-[40px] p-1">
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
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
