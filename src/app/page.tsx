"use client"

import css from "./page.module.css";
import { AccordionUsage, Brands, Header, OtherSlider, SpaSlider } from "@/components";

export default function Home() {
  return (
    <div className={css.mainPage}>
      <Header/>
      <div className={css.container}>
        <Brands/>
        <AccordionUsage/>
        <SpaSlider title={"SPA"} tags={["Spa", "Hotell"]}/>
        <OtherSlider title={"KITCHEN"} tags={["Kitchen"]}/>
        <OtherSlider title={"INTERIOR DESIGN"} tags={["Interior design"]}/>
        <OtherSlider title={"GIFTCARDS"} tags={["Giftcard"]}/>
        <OtherSlider title={"OTHER"} tags={["Spa", "Hotell"]}/>
      </div>
    </div>
  );
}
