import React from 'react';
import {
  Slide,
  Image,
} from 'spectacle';

const images = {
  bs: require('./bs.png')
};

const BucklescriptSplash = (
  <Slide transition={["slide"]} bgColor="primary">
    <Image src={images.bs} height={"100%"} />
  </Slide>
);

export default BucklescriptSplash;