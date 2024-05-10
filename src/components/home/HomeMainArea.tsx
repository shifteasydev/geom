/**
 * The main area of the home page, containing all the sliders, sections, and components.
 * Fetches data from the GlobalApi for top music groups and popular categories.
 */

"use client";
import React, { useEffect, useState } from "react";
import BrandSectionOne from "../SliderElements/BrandSlider/BrandSectionOne";
import HeroOne from "./HeroOne";
import TextScrollArea from "../SliderElements/TextScrollSlider/TextScrollArea";
import PopularAreaOne from "../SliderElements/PopularSlider/PopularAreaOne";
import WorkArea from "./WorkArea";
import TrendingareaOne from "./TrendingareaOne";
import FunctionBandsSectionOne from "./FunctionBandsSectionOne";
import TestimonialSliderOne from "../SliderElements/TestimonialSlider/TestimonialSliderOne";
import LatestNewsOne from "./LatestNewsOne";
import PartnerAreaSliderOne from "../SliderElements/PartnerAreaSlider/PartnerAreaSliderOne";
import CtaArea from "./CtaArea";
import SpecialEventSliderOne from "../SliderElements/SpecialEventSlider/SpecialEventSliderOne";
import GlobalApi from "@/utils/GlobalApi";

const HomeMainArea = () => {
  /**
   * State for storing top music groups data.
   */
  const [topmusicGroup, setTopmusicGroup] = useState([]);
  /**
   * State for storing popular categories data.
   */
  const [popularCategoriess, setPopularCategoriess] = useState([]);

  /**
   * Fetch top music groups and popular categories data from the GlobalApi.
   */
  useEffect(() => {
    getTopmusicGroups(), getPopularCategorie();
  }, []);

  /**
   * Fetch top music groups data from the GlobalApi.
   */
  const getTopmusicGroups = () => {
    GlobalApi.getTopmusicGroup().then((resp) => {
      console.log(resp.data.data);
      setTopmusicGroup(resp.data.data);
    });
  };
  /**
   * Fetch popular categories data from the GlobalApi.
   */
  const getPopularCategorie = () => {
    GlobalApi.getPopularCategories().then((resp) => {
      console.log(resp.data.data);
      setPopularCategoriess(resp.data.data);
    });
  };

  return (
    <>
      <BrandSectionOne topmusicGroup={topmusicGroup} />
      <HeroOne />
      <TextScrollArea />
      <PopularAreaOne popularCategoriess={popularCategoriess} />
      <WorkArea />
      <TrendingareaOne />
      <FunctionBandsSectionOne />
      <SpecialEventSliderOne />
      <TestimonialSliderOne />
      <LatestNewsOne />
      <PartnerAreaSliderOne />
      <CtaArea />
    </>
  );
};

export default HomeMainArea;
