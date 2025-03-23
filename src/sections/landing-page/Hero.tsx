"use client";

import BreadcrumbHeader from "@/components/breadcrumb/BreadcrumbHeader";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="flex justify-between h-[400px] px-8">
            <div className="flex items-center w-[282px] h-full">
                <Image
                    alt="banner-hero1"
                    width={195}
                    height={188}
                    className="w-full h-full object-contain"
                    src={
                        "https://s3-alpha-sig.figma.com/img/e0d8/1ba5/cdfffb36b1833b8a6828c5ce85910382?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tl4jx8eLct6F9P4EH-ODXRcnDwcsWyTQnVfKBGHo8ZJlb12zEEyzDNXnYUeXjq98JTVrFSKFV-1EnHGcvrOn5JYm7~A4qpItm8cL8eEEoIf7TtOKlaNNK8lkHH-xqOS8yyzQNpvHhpf0YKtpENl3SgXUXeo~zsooTwz42EdZWQjt6zYkGZnTcYUKejTFjsqFX~l0KGlTD0jonPvguGf7zMOJcy3-bTlm8XBYjR2qz3OchRFanT~0x5hOIm8XPwIuE19EfQAFblC9fr2A-ZBzyybhvn3JC1MwX4Nv8itxlZQvIMIps1EEwJPlZFU2qWCXYZhEAT~5Kff-Ysi7EQdPDw__"
                    }
                />
            </div>
            <div className="flex justify-center w-full p-12">
                <div className="w-full text-center">
                    <BreadcrumbHeader />
                    <div className="font-normal text-[64px] leading-[100px]">
                        <p className="">
                            Blog
                            <span className="font-extrabold tracking-tighter px-1 bg-[#1AD598] bg-gradient-to-l from-[#53B086] to-[#53B086FC] text-transparent bg-clip-text">
                                {" "}
                                FOSO
                            </span>{" "}
                            -{" "}
                        </p>
                        <p>
                            Cập Nhật Tin Tức{" "}
                            <span className="relative font-extrabold text-[#050505]">
                                <div className="absolute w-full h-7 bg-[#1AD598]/30 left-0 top-10  rounded-2xl"></div>
                                Mới Nhất
                            </span>
                        </p>
                    </div>
                    <p className="text-[#33404A] text-lg font-medium ">
                        Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản
                        xuất ngay!{" "}
                    </p>
                </div>
            </div>
            <div className="flex items-center w-[320px]  overflow-hidden">
                <Image
                    alt="banner-hero2"
                    width={195}
                    height={158}
                    className="w-full h-full object-contain"
                    src={
                        "https://s3-alpha-sig.figma.com/img/b71b/64bf/30cd70aca236d986b8828bb5ad1ed8a5?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OqBF3cY4YCKaT2dd~wBA~5kqYKayt8ueCwXwgWH2sQnvvRbyEhG2lMRhAxOp4xiE5pjki8yWPb92NswfZ~xevKDe5jh1K6IiefqCVNcEpMsoj92b6XJwW4mHW9bN3bzERZNvqjSy3u8Ie4s2qqTEsdVXo6mM7rcXZXZCbyW-vmLuqyN-eE1FfUE9ya6ufmFLwCjEtKOfJBashVZcQGUmdCBVkH436-Vx88rXesNe81YynXXr4pOgJLoTiRyh7by68psebRVeOp9yFxSUFZDPcsbuiVfT3XpR-~Erl45OGPuUTF7BaaOMGcxAVwveBNSrSHMrTAUoHRe7Q0Hgzxuobw__"
                    }
                />
            </div>
        </section>
    );
};

export default Hero;
