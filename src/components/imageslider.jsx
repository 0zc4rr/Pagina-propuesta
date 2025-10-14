import styled from "styled-components";
import { swiper, SwiperSlide } from "swiper/react";
import { Navigation, Paginarion, autoplay } from "swiper, autoplay";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdDescription } from "react-icons/md";

const slideData = [
  {
    id: 1,
    imageUrl: "src/assets/cbb.jpg",
    title: "Primero",
    description: "Navegacion",
  },
  {
    id: 2,
    imageUrl: "src/assets/co.jpg",
    title: "Segundo",
    description: "Muestra",
  },
  {
    id: 3,
    imageUrl: "src/assets/coch.jpg",
    title: "tercero",
    description: "Imagen",
  },
];

const Container = styled.div``;
