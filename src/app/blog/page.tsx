import BreadcrumbBlog from "@/components/breadcrumb/BreadcrumbBlog";
import CardFeedback from "@/sections/detail-blog/CardFeedback";
import ContentBlog from "@/sections/detail-blog/ContentBlog";
import TableOfContents from "@/sections/detail-blog/TabContent";
import CardBlog from "@/sections/landing-page/CardBlog";
import Image from "next/image";

const BlogPage = () => {
    return (
        <div className="px-[240px] space-y-12 py-6">
            <BreadcrumbBlog />
            <div className="grid grid-cols-12 gap-6">
                <div className="space-y-6 col-span-8 ">
                    <ContentBlog />
                    <div className="py-[48px]">
                        <div className="py-[24px] flex flex-col justify-center items-center space-y-6">
                            <div className="space-y-4">
                                <p className="text-xl text-center font-extrabold text-[#33404A]">
                                    Bạn thấy bài viết như thế nào?
                                </p>
                                <p className="text-base text-center font-medium text-[#33404A]">
                                    4 phản hồi
                                </p>
                            </div>
                            <div className="flex items-center gap-8">
                                <CardFeedback
                                    icon={
                                        "https://s3-alpha-sig.figma.com/img/ee50/301f/f1a1efe576767cd2abd3f1ae0f0968d0?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MGyGEbNBCpwGi4iiOmgnBoWoQfNFWwn6PeckCcQUXfEL6DUv1GL3AtghpFb1eQcGi-3k1WaL2Cyic3of5FwEO537uCjHtCqOjiiOLHCZaJdoDTs6rs5uZLv2~u8b7f1T3UX4G06YCFSnesUl6r3Ronhtjur86ASwCVbhMLyQ7Ng4~qg1S9cI7woBjEvTmZ~sDIBT-9BodvQJVSb7zrS6DFSaBHK9m4jPuD1gPyhBfAH0qwMVVpdqt9K-azgxHlGHT44u8Ug1QC1vsAtLtOL2YqHVH2lopoMhSjtXVobxDRMKXiolVe3gNOR0zNHy~Z1oZhZA~R8VTOx8PZbxtBI1VQ__"
                                    }
                                    count={1}
                                    label="Hữu ích"
                                    isActive={true}
                                />
                                <CardFeedback
                                    icon={
                                        "https://s3-alpha-sig.figma.com/img/8dd0/bb94/6873e6d01c186237ce9e867f4db87168?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cedh6XtT7Y4d1sh8d13WHhwFfWcrnwKguoRfunc76~PgDpt6rUvEcLkT~tsZ6TD1sDDVjcTBy9YI0ivouSX7gVpXwX7BqxWw4XiI-Mc85g0Qfg~pKu5Od1Sa~k2vI-QI9rCpHl-fyk-sGkmwiaycCVzr-B6V4K8p7Uqnkp8bCE4cCjAN54asyecbwXMPL95ab07SRmXaMDe95pBcGPAB3v8WQjhhNhxosUR4XTojmcJ~BN2~v6qrAgOt3AOxNRN3SknQRREW28mgdM-zO4jZyI~biqgNJJTRMr2kvuasXkV0w9~tU8Wmw~JGhSbeW3Ui0-XOQxFVEv2bhuaRyplUYQ__"
                                    }
                                    count={2}
                                    label="Yêu thích"
                                    isActive={false}
                                />{" "}
                                <CardFeedback
                                    icon={
                                        "https://s3-alpha-sig.figma.com/img/6359/0589/63ca4b772094d9c6031efc6bf4a7a699?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=APwp8ug2BOp9otnjB9nVJy-YeVS9rMEtGFoA1WfL9O45KPuyKdrWRVCBXyToC9zHB~WQtb6JA8wU-g5iV35LVr2A~MpGWGem5jc0jx0ZyMTjSOjbvq7G4kP4-LQT4sshr-rsn5pdFqfkuNoMTyJBX6mFjg8BIg-em3mLoxbWaTdp1LVV93YxupDAuA76py81fo2U7VF1Aj1szUX-f7zeBoZnTn9l85-fPgNayTl-HtsKsI451bhICRind41RK7veHJsQAy86yIP0~frza3RYz96NSjcAYiQCel4xot1AQZgo0nHzcudRbVwnqP8LyP~FA8lyFzMrfQryF5EuG6hkLA__"
                                    }
                                    count={0}
                                    label="Thú vị"
                                    isActive={false}
                                />{" "}
                                <CardFeedback
                                    icon={
                                        "https://s3-alpha-sig.figma.com/img/9cd5/2a6b/24541573171b226839813ae404dbb33f?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FeW3rZx3BA8~h88Z~IfG4VoyHHdsaB9iVMD0V6KR~aVv3fog67FZ~OMahPbEIpS8cXV5amSOl3WWu8pDcaw1cnJDJgixOE4t1WgrP5v4Ez9sKRb1jkyyvRNgADnC4ROzZqbIbF8hGvPu5OwsaGa0WZy8tj56CyjuvszuhFv61NzB3w7LCliBsVVsVY0G4x3u0ffIezT8UKUOLAeKpmuzFZwllyzjWCCKEgqDlwCigoIC3iQauc6TDH2adhQC-0OIDavnGFL0hi-ETJvSwG4psF3pCa1e5h1PGQ-Scrq7E54JaKLVaHLYz5W3lss8AOuy~4HJUE~m1uIGmqTxYfJnOQ__"
                                    }
                                    count={1}
                                    label="Bất ngờ"
                                    isActive={false}
                                />{" "}
                                <CardFeedback
                                    icon={
                                        "https://s3-alpha-sig.figma.com/img/bfa0/942b/f7f046553c59f188f173a9212d302f46?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NMM6FgokuYuu-R7E-EHHcuBUXalWYrIL-pdk0TbXEEtv4WAeWiRy6SJPwJsxDf4K7CJ1ly8kzeqS5TU4ewhDY7y01W4waEsrxGBEmQExf3xFa-bC1F5uq5n07ESXscvvRklMmqAsNh5v2a5vKwicUIq704QgM5nLD~aFTM-fLJsG3Tbiy10M8RycuPE~~aBdbhiPdECW4d7jaYEOMj1lPS~i7m2sPouoYH2wKNjK0Tji0oKq~u8R81LP-6jC0XNfK-wUYxU7QXIHtx7zlREiJi3RSfAjl9oUeYDJCv8EtIvJUJaN5dz1WnNpaTAsg1Vq1oJXVd~MMiBv3l7KU52G8w__"
                                    }
                                    count={0}
                                    label="Nhàm chán"
                                    isActive={false}
                                />
                                <CardFeedback
                                    icon={
                                        "https://s3-alpha-sig.figma.com/img/510b/ffe2/3aaae74a2b244607f17e41010dfa21d4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aorha115B~AqbRI7g0ks1RIKhHI21CUKI4Ivl2sJZmTMnFgRG296QHCgc4eOLWj0qmaFkQSGgseq8VpJ7fsHlUNn3WZxf9lHP9h6EK007rbDLveLMgSb60YWRKgeE-WR5tiSlnRi-MBtc8fbAviOMnTqXfcHEYnxrREP8izfmgyc6vgUPIqMml9PaL7ngyG3lJmILS80qtH6gGvDGYNLkbZf7jduplWacP7obeVgWjja3KtjlkaEPkZnPi-SFGtoifY2kzSoeSwAKVSRcWQPxRl8rewd8oYRuSDAa2Jg2NlWgbwxHdpdXJeJieF~yeyiB1k~zLGQVmU9bAFDetjHcg__"
                                    }
                                    count={0}
                                    label="Tức giận"
                                    isActive={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 space-y-6">
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-2xl">Nội Dung Bài Viết</p>
                        <span className="p-4">
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 15 15"
                                className="text-[#15AA7A]"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </div>
                    <TableOfContents />
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
                                Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng
                                phát triển
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
                <div className="col-span-12 pb-[96px] space-y-6">
                    <p className="font-extrabold text-4xl align-middle">
                        Bài Viết Liên Quan
                    </p>
                    <div className="flex gap-8">
                        <CardBlog />
                        <CardBlog />
                        <CardBlog />
                        <CardBlog />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
