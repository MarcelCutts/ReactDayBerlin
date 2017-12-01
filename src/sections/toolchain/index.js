import React from 'react';
import {
  Slide,
  Heading,
  Image,
  Layout,
  Fill
} from 'spectacle';
import styled from 'react-emotion'
import CompileToJSAlternatives from '../../slides/compile-to-js-alternatives';
import Tooling from '../../slides/tooling';

const images = {
  bs: require('./bs.png'),
  perfTweet: require('./perf-tweet.png'),
  equivCode: require('./equiv-code.png'),
  seanGrove: require('./seangrove.jpg'),
  output1: require('./output-1.png'),
  output2: require('./output-2.png')
};

const FunHeading = styled(Heading) `
-webkit-box-sizing: content-box;
-moz-box-sizing: content-box;
box-sizing: content-box;
border: none;
font: normal 84px/normal "Anton", Helvetica, sans-serif;
color: rgb(255, 255, 255);
text-align: center;
-o-text-overflow: clip;
text-overflow: clip;
text-shadow: 1px 1px 0 #db4d3f , 2px 2px 0 #CECECE , 3px 3px 0 #db4d3f , 4px 4px 0 #333333;
`;

const Toolchain = [
  <Slide transition={["slide"]} bgColor="tertiary">
    <Heading fit caps textColor="primary" margin={10}>
      Hey! You promised
    </Heading>
    <Heading fit caps textColor="primary" margin={10}>
      more
    </Heading>
  </Slide>,
  <Slide transition={["slide"]} bgColor="primary">
    <Heading fit caps textColor="tertiary" margin={10}>
      Tooling!
    </Heading>
  </Slide>,
  <Slide transition={["slide"]} bgColor="primary">
    <Heading size={5} caps textColor="tertiary" margin={10}>
      Bucklescript is a
    </Heading>
    <FunHeading fit caps textColor="tertiary" margin={10}>
      BEAST
    </FunHeading>
  </Slide> ,
  <Slide transition={["slide"]} bgColor="primary">
    <Image src={images.bs} height={"100%"} />
  </Slide> ,
  <Slide transition={["slide"]} bgColor="primary" >
    <Heading size={5} caps textColor="tertiary" margin={10}>
      Bucklescript compiles
    </Heading>
    <Heading fit caps textColor="tertiary" margin={10}>
      10x faster
    </Heading>
    <Heading size={5} caps textColor="tertiary" margin={10}>
      than TypeScript
    </Heading>
  </Slide> ,
  <Slide transition={["slide"]} bgImage={images.perfTweet} /> ,

  <Slide transition={["fade"]} bgImage={images.ojcompare} /> ,
  <Slide
    transition={["fade"]}
    bgImage={images.equivCode}
    maxWidth={window.innerWidth}
    maxHeight={window.innerHeight}
  >
    <Layout>
      <Fill>
        <Heading textColor="primary" size={3} margin="50% 50px 0 0">
          3415 ms
    </Heading>
      </Fill>
      <Fill>
        <Heading textColor="primary" size={3} margin="50% 0 0 50px">
          1186 ms
    </Heading>
      </Fill>
    </Layout>
  </Slide> ,
  <Slide
    transition={["fade"]}
    bgImage={images.equivCode}
    maxWidth={window.innerWidth}
    maxHeight={window.innerHeight}
  >
    <Layout>
      <Fill>
        <Heading textColor="primary" size={4} margin="50% 50px 0 0">
          3415 ms
    </Heading>
        <Heading textColor="primary" size={4} margin="50px 50px 0 0">
          55.3K Bytes
    </Heading>
      </Fill>
      <Fill>
        <Heading textColor="primary" size={4} margin="50% 0 0 50px">
          1186 ms
    </Heading>
        <Heading textColor="primary" size={4} margin="50px 0 0  50px">
          899 bytes
    </Heading>
      </Fill>
    </Layout>
  </Slide> ,
  <Slide transition={["slide"]} bgColor="tertiary">
    <Heading fit caps textColor="primary" margin={10}>
      HOW‽
</Heading>
  </Slide> ,
  <Slide transition={["slide"]} bgColor="primary">
    <Heading fit textColor="tertiary">
      Human readable
</Heading>
    <Heading fit textColor="tertiary">
      JS output
</Heading>
    <Heading size={1} textColor="tertiary">
      😱
</Heading>
  </Slide> ,
  <Slide
    transition={["slide"]}
    bgImage={images.output1}
    className="compiled"
    bgColor="secondary"
  /> ,
  <Slide
    transition={["slide"]}
    bgImage={images.output2}
    className="compiled"
    bgColor="secondary"
  /> ,
  <Slide transition={["slide"]} bgColor="secondary">
    <Image src={images.seanGrove} height="50%" />
    <Heading fit caps textColor="primary">
      @sgrove
    </Heading>
  </Slide>
];


export default [...Toolchain, Tooling];