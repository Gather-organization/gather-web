import { Swiper, SwiperSlide } from 'swiper/react';

import { Card, Title } from 'shared/components';
import { Container } from 'shared/components/Layouts';
import { HomePageContent } from './styled';

import 'swiper/swiper.css';

export const Home = () => {
  return (
    <Container>
      <HomePageContent>
        <Card glow>
          <Card.Title>Something</Card.Title>
          <Title>Something</Title>
          <div>something something other something</div>
          <div>something something other something</div>
          <div>something something other something</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            dolorem, iure repudiandae delectus voluptas cum? Porro deleniti
            repellendus molestias quaerat, sequi veniam cumque. Reprehenderit
            exercitationem aliquam rem pariatur voluptatum quasi.
          </div>
        </Card>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          dolorem, iure repudiandae delectus voluptas cum? Porro deleniti
          repellendus molestias quaerat, sequi veniam cumque. Reprehenderit
          exercitationem aliquam rem pariatur voluptatum quasi.
        </div>
      </HomePageContent>
    </Container>
  );
};

export const SwipeTest = () => {
  return (
    <div>
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
    </div>
  );
};
