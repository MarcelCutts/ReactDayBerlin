import React from 'react';
import {
  Slide,
  Heading,
  Layout,
  Fill,
  Image
} from 'spectacle';

const images = {
  twitter: require('./twitter.png')
};

const Outro = [
  <Slide transition={["slide"]} bgColor="primary">
    <Heading fit caps textColor="tertiary">
      Thanks
    </Heading>
    <Heading fit caps textColor="tertiary" margin={"0 0 80px 0"}>
      for listening!
    </Heading>
    <Layout>
      <Fill>
        <Heading
          size={6}
          caps
          textColor="primary"
          bgColor="tertiary"
          margin={10}
          padding={"5px 0"}
        >
          Marcel Cutts
    </Heading>
      </Fill>
      <Fill>
        <Heading
          size={6}
          caps
          textColor="primary"
          bgColor="tertiary"
          margin={10}
          padding={"5px 0"}
        >
          @marcelcutts{" "}
          <Image
            src={images.twitterLogo}
            height="30px"
            margin="3px 0 0 0"
          />
        </Heading>
      </Fill>
    </Layout>
  </Slide>
];

export default Outro;