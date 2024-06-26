import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import back from "@/assets/topbanner.png";

import styles from "./SwiperMid.module.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function SwiperMid() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className={styles.swiper}
      >
        <div
          slot="container-start"
          className={styles.parallaxBg}
          style={{
            backgroundImage: `url(https://moonkti.cafe24.com/web/upload/newcanvas/product/big/201603/TL0025.jpg)`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className={styles.swiperSlide1}>
          <div
            className={styles.swiperSlide1.title}
            data-swiper-parallax="-300"
          >
            Slide 1
          </div>
          <div
            className={styles.swiperSlide1.subtitle}
            data-swiper-parallax="-200"
          >
            Subtitle
          </div>
          <div className={styles.swiperSlide1.text} data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide1}>
          <div
            className={styles.swiperSlide1.title}
            data-swiper-parallax="-300"
          >
            Slide 2
          </div>
          <div
            c
            className={styles.swiperSlide1.subtitle}
            data-swiper-parallax="-200"
          >
            Subtitle
          </div>
          <div className={styles.swiperSlide1.text} data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide1}>
          <div
            className={styles.swiperSlide1.title}
            data-swiper-parallax="-300"
          >
            Slide 3
          </div>
          <div
            className={styles.swiperSlide1.subtitle}
            data-swiper-parallax="-200"
          >
            Subtitle
          </div>
          <div className={styles.swiperSlide1.text} data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
