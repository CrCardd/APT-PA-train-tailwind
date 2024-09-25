"use client"

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import i1 from "@/assets/cartoonlogo.png"

export default function CarouselCustomNavigation() {


  return (
    <div className="relative">
        <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-[-5%] left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
            {new Array(length).fill("").map((_, i) => (
                <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-['']  ${
                    activeIndex === i ? "w-8 h-2 bg-blue-600" : "h-2 w-4 bg-neutral-400"
                    }`}
                    onClick={() => setActiveIndex(i)}
                    />
                ))}
            </div>
        )}
        placeholder={<div className="h-full w-full bg-gray-200 overflow-hidden" />} // Example placeholder
        onPointerEnterCapture={() => {/* handle pointer enter */}}
        onPointerLeaveCapture={() => {/* handle pointer leave */}}
        >
            <div className="h-full w-screen rounded-lg ">
                <Image
                    src={i1}
                    alt="image 1"
                    />
            </div>

            <div className="h-full w-screen rounded-lg "> 
                <Image
                    src={i1}
                    alt="image 2"
                    />
            </div>

            <div className="h-full w-screen rounded-lg ">
                <Image
                    src={i1}
                    alt="image 3"
                    />
            </div>
        </Carousel>
    </div>
  );
}
