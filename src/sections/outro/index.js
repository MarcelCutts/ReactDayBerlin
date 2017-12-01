import React from 'react';
import {
  Slide,
  Heading,
  Layout,
  Fill,
  Image
} from 'spectacle';
import styled from 'react-emotion';

const images = {
  twitter: require('./twitter.png')
};

const TwitterBlock = styled('span')`
display: flex;
justify-content: center;
`;

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
          <TwitterBlock>
          @marcelcutts
          <Image src={images.twitter} height="30px" margin="5px 0 0 5px" />
        </TwitterBlock>
        </Heading>
      </Fill>
    </Layout>
  </Slide>
];

export default Outro;