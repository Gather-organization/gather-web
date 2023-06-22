import { Swiper, SwiperSlide } from 'swiper/react';

import { Card, Container, Title } from 'shared/components';
import { HomePageContent } from './styled';

import 'swiper/swiper.css';

export const Home = () => {
  return (
    <Container>
      <HomePageContent>
        <Card style={{ width: '30vw' }}>
          <Title>Something</Title>
          <div>something something other something</div>
        </Card>
        <SwipeTest />
      </HomePageContent>
    </Container>
  );
};

export const SwipeTest = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
