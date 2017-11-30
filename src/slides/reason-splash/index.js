import React from 'react';
import {
  Slide,
  Image
} from 'spectacle';

const images = {
  reason: require('./reason-logo.png'),
};

const ReasonSplash = (
  <Slide transition={["slide"]} bgColor="primary">
    <Image src={images.reason} width="100%" />
  </Slide>
);

export default ReasonSplash;