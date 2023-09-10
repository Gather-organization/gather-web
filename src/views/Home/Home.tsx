import { Swiper, SwiperSlide } from 'swiper/react';

import { Card, Title } from 'shared/components';
import { Container } from 'shared/components/Layouts';
import { HomePageContent } from './styled';

import { ButtonGroup } from 'shared/components/Buttons/ButtonGroup';
import 'swiper/swiper.css';

const options = [{ label: 'Light' }, { label: 'Dark' }, { label: 'Auto' }];

export const Home = () => {
  return (
    <Container>
      <HomePageContent>
        <Card style={{ width: '30vw' }}>
          <Title>Something</Title>
          <div>something something other something</div>
        </Card>
        <ButtonGroup name="theme" options={options} />
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
