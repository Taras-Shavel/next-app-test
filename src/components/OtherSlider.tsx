import React, { FC, useRef } from "react";
import Slider from "react-slick";
import itemsData from "../data/otherSlider.json";
import { ISlider } from "@/interfaces";
import css from '../styles/Slider.module.css'


const data: ISlider[] = itemsData;

interface IProps {
    title: string;
    tags: string[];
}

const OtherSlider: FC<IProps> = ({ title, tags }) => {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <div className="w-full h-[344px] mt-10 box-border overflow-hidden">
            <div className="w-full h-8 flex justify-between mb-5">
                <h1 className="m-0 text-2xl font-bold">{title}</h1>
                <div className="w-[145px] flex items-center justify-end">
                    <h4 className="m-0 font-bold mr-4">SEE ALL</h4>
                    <img
                        className="w-6 h-6 cursor-pointer mr-2"
                        src="./Images/buttons/leftArrow.png"
                        alt="Left Arrow"
                        onClick={goToPrev}
                    />
                    <img
                        className="w-6 h-6 cursor-pointer"
                        src="./Images/buttons/rightArrow.png"
                        alt="Right Arrow"
                        onClick={goToNext}
                    />
                </div>
            </div>
            
            <Slider ref={sliderRef} {...settings} className={css.containerSlider}>
                {data.map((item, index) => (
                    <div key={index} className="h-full w-[250px] box-border shrink-0">
                        <div className="h-[150px] w-[250px] relative">
                            <img className="h-full rounded-t-md m-0" src={item.imgSrc} alt={`Image ${item.title}`} />
                            <div className="w-[98px] h-[34px] rounded-md p-2.5 bg-black absolute top-2.5 right-2.5 z-20 box-border flex items-center">
                                <img className="w-[12px] h-[11px] mr-2" src="./Images/SelectedIcon.png" alt="icon selected"/>
                                <p className="m-0 text-[10px] font-bold text-white">LÄGG TILL</p>
                            </div>
                        </div>
                        <div className="h-[142px] w-[250px] m-0 rounded-b-md bg-white pt-2">
                            <div className="flex h-[22px] px-3">
                                {tags.map((tag, tagIndex) => (
                                    <div key={tagIndex} className="rounded-full border border-black px-2.5 py-1 flex justify-center items-center mr-2">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            <div className="px-3 my-2 text-[14px] font-bold">{item.title}</div>
                            <div className="h-4 px-3 mb-2 text-[12px] font-medium">{item.description}</div>
                            <div className="h-5 flex items-center justify-between px-3">
                                <div className="w-[104px] h-4 text-[12px] font-normal flex items-center">{item.location}</div>
                                <div className="w-[64px] h-[22px] rounded-sm p-1.5 bg-[#FAEBE3] text-[12px] font-medium flex items-center justify-center">{item.price}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export { OtherSlider };
