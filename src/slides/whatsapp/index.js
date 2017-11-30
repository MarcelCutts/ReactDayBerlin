import React from 'react';
import {
  Slide,
  Image,
  Heading,
  Appear
} from 'spectacle';

const images = {
  whatsApp: require('./whatsapp.svg')
};

const WhatsApp = (
  <Slide transition={["slide"]} bgColor="secondary">
    <Image src={images.whatsApp} width="50%" />
    <Appear>
      <Heading fit caps textColor="primary">
        $19 billion
  </Heading>
    </Appear>
  </Slide>
);

export default WhatsApp;