import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

const slidesData = [
  {
    id: 1,
    imgSrc: "/images/cbb.jpg",
    altText: "Reportes Estudiantiles",
    text: "Puedes ver los reportes academicos en Seguimiento Academico",
  },
  {
    id: 2,
    imgSrc: "/images/co.jpg",
    altText: "Encuestas Semestrales",
    text: "Pudes ver los reportes de las encuestas en la seccion de Carreras Transformadoras",
  },
  {
    id: 3,
    imgSrc: "/images/coch.jpg",
    altText: "Mas Reportes",
    text: "Puedes ver los otros reportes y graficos en Apoyo Estudiantil",
  },
];

export default function ContentSwiper() {
  return (
    <SwiperContainer>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideContent>
              <ImageWrapper>
                <img src={slide.imgSrc} alt={slide.altText} />
              </ImageWrapper>
              <TextContent>
                <h2>{slide.altText}</h2>
                <p>{slide.text}</p>
              </TextContent>
            </SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
}
const SwiperContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
  }
`;
const SlideContent = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
  width: 100%;
  margin: 20px 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ImageWrapper = styled.div`
  flex: 0 0 50%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    max-height: 400px;
    transition: transform 0.3s ease;
  }
`;
const TextContent = styled.div`
  flex: 1 1 50%;
  padding: 20px;
  box-sizing: border-box;
  font-family: sans-serif;
  backgrpund-color: #fff;

  h2 {
    margin-top: 0;
    color: #4d4a4aff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p {
    color: #7b7777ff;
    line-height: 1.5;
    font-size: 1rem;
  }
`;
