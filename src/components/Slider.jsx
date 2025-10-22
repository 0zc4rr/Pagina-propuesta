import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

const slidesData = [
  {
    id: 1,
    imgSrc: "src/assets/cbb.jpg",
    altText: "Reportes Estudiantiles",
    text: "Puedes ver los reportes academicos en Seguimiento Academico",
  },
  {
    id: 2,
    imgSrc: "src/assets/co.jpg",
    altText: "Encuestas Semestrales",
    text: "Pudes ver los reportes de las encuestas en la seccion de Carreras Transformadoras",
  },
  {
    id: 3,
    imgSrc: "src/assets/coch.jpg",
    altText: "Mas Reportes",
    text: "Puedes ver los otros reportes y graficos en Apoyo Estudiantil",
  },
];

export default function ContentSwiper() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}>
      {slidesData.map((slide) => (
        <slideSlide key={slide.id}>
          <SlideContent>
            <ImageWrapper>
              <img src={slide.imgSrc} alt={slide.altText} />
            </ImageWrapper>
            <TextContent>
              <h2>{slide.altText}</h2>.<p>{slide.text}</p>
            </TextContent>
          </SlideContent>
        </slideSlide>
      ))}
    </Swiper>
  );
}
const SlideContent = styled.div`
  display: flex;
  align: flex;
  height: 400px;
  width: 100%;
`;

const ImageWrapper = styled.div`
  flex: 0 0 50%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
const TextContent = styled.div`
  flex: 1 1 50%;
  padding: 20px;
  box-sizing: border-box;
  font-family: sans-serif;

  h2 {
    margin-top: 0;
    color: #333;
  }
  p {
    color: %555;
    line-height: 1.5;
  }
`;
