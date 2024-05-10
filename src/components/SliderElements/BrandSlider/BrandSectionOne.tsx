"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import brand_data from "@/data/brand-data";
//swiper-slider
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import { imageLoader } from "@/hooks/ImageLoader";

interface BrandSectionOneProps {
  topmusicGroup: any[]; // Replace 'any' with the actual type of your data
}

const BrandSectionOne: React.FC<BrandSectionOneProps> = ({ topmusicGroup }) => {
  return (
    <>
      <section className="ms-song-area pt-40 pb-40">
        <div className="container-fluid ms-maw-1710">
          <div className="ms-song-active fix">
            <div>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={25}
                loop={false}
                autoplay={{
                  delay: 3000,
                }}
                breakpoints={{
                  1800: {
                    slidesPerView: 7,
                  },
                  1600: {
                    slidesPerView: 6,
                  },
                  1400: {
                    slidesPerView: 5,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  450: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
              >
                {topmusicGroup.slice(0, 7).map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="ms-song-item">
                      <div className="ms-song-img p-relative">
                        <Link href={`/genres-details/${item.id}`}>
                          <Image
                            loader={imageLoader}
                            // placeholder="blur"
                            loading="lazy"
                            style={{ width: "100%", height: "auto" }}
                            src={item?.attributes?.Image?.data?.attributes?.url}
                            width={100}
                            height={400}
                            alt="hii"
                          />
                        </Link>
                        <span className="ms-song-num">{item?.attributes?.Number}</span>
                      </div>
                      <div className="ms-song-content">
                        <h3 className="ms-song-title">
                          <Link href={`/genres-details/${item.id}`}>
                            {item?.attributes?.Title}
                          </Link>
                        </h3>
                        <span className="ms-song-text">{item?.attributes?.Description}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandSectionOne;
