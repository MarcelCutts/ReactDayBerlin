import React from 'react';
import {
  Slide,
  Heading,
  Image,
  Layout,
  Fill
} from 'spectacle';

const images = {
  flow: require('./flow.png'),
  typescript: require('./typescript.png'),
  patrick: require('./patrick.jpg'),
  tictactoe: require('./tictactoe.png'),
  flow1: require('./flow1.png'),
  flow2: require('./flow2.png'),
  re1: require('./re1.png'),
  re2: require('./re2.png'),
  error1: require('./errors1.png'),
  error2: require('./errors2.png')
};

const TypeHype = [
  <Slide transition={["slide"]} bgColor="tertiary">
    <Heading size={3} caps textColor="primary" margin={10}>
      What's all the fuss about
    </Heading>
    <Heading fit caps textColor="primary" margin={10}>
      types?
    </Heading>
  </Slide>,
  <Slide transition={["slide"]} bgColor="primary">
    <Heading fit caps>
      Types? Types!
    </Heading>,
    <Heading caps size={3} textAlign="left" margin={"30px 0 0 50px"}>
      🏎 Fast feedback
    </Heading>
    <Heading caps size={3} textAlign="left" margin={"30px 0 0 50px"}>
      💪 Confidence
    </Heading>
    <Heading caps size={3} textAlign="left" margin={"30px 0 0 50px"}>
      🛠 Tooling
    </Heading>
    <Heading caps size={3} textAlign="left" margin={"30px 0 0 50px"}>
      ❤️ Data structures
    </Heading>
  </Slide>,
  <Slide transition={["slide"]} bgColor="primary">
    <Layout>
      <Fill>
        <Image src={images.flow} width="90%" />
      </Fill>
      <Fill>
        <Image src={images.typescript} width="90%" />
      </Fill>
    </Layout>
  </Slide>,
  <Slide transition={["fade"]} bgColor="primary">
    <Heading fit caps>
      Reason Types
    </Heading>
    <Heading caps size={4} textAlign="left" margin={"30px 0 0 50px"}>
      💯 100% coverage
    </Heading>
    <Heading caps size={4} textAlign="left" margin={"30px 0 0 50px"}>
      🕵🏾‍♀️ Superb Inference
    </Heading>
    <Heading caps size={4} textAlign="left" margin={"30px 0 0 50px"}>
      ⛑ Type Sound
    </Heading>
  </Slide>
];

export default TypeHype;