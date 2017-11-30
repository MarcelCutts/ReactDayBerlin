import React from 'react';
import {
  Slide,
  Image,
  Heading,
  Layout,
  Fill
} from 'spectacle';

const images = {
  bs: require('./bs.png'),
  re: require('./re.jpg')
};

const PowerCouple = (
  <Slide transition={["slide"]} bgColor="primary">
    <Layout>
      <Fill>
        <Image src={images.bs} width="80%" />
      </Fill>
      <Fill>
        <Image src={images.re} width="80%" />
      </Fill>
    </Layout>
    <Heading fit caps margin={"50px 0 0 0"}>
      POWER COUPLE
    </Heading>
  </Slide>
)

export default PowerCouple;