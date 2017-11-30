import React from 'react';
import {
  Slide,
  Image,
  Appear,
  Heading
} from 'spectacle';

const images = {
  keyboard: require('./keyboard.jpg')
};

const BloombergBucklescript = (
  <Slide transition={["slide"]} bgColor="primary" notes={"testing"}>
    <Image src={images.keyboard} width="100%" />
    <Appear>
      <Heading size={2}>Bucklescript</Heading>
    </Appear>
  </Slide>
);

export default BloombergBucklescript;

