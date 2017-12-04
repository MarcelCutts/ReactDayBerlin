import React from 'react';
import {
  Slide,
  Heading,
  Appear
} from 'spectacle';


const CoreIntro = [
  <Slide transition={["slide"]} bgColor="primary">
    <Heading fit caps>
      Why bother?
  </Heading>
    <Appear>
      <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
        ⚡️ Lightning compilation
    </Heading>
    </Appear>
    <Appear>
      <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
        🏎 Incredible performance
    </Heading>
    </Appear>
    <Appear>
      <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
        📝 Editor  bliss
    </Heading>
    </Appear>
    <Appear>
      <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
        🐜 Tiny bundle sizes
    </Heading>
    </Appear>
  </Slide>,
  <Slide transition={["fade"]} bgColor="primary">
    <Heading fit caps>
      Why bother?
  </Heading>
    <Appear>
      <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
        🤔 Staggering type inference
    </Heading>
    </Appear>
    <Appear>
      <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
        👨‍🏫 Easy onboarding
    </Heading>
    </Appear>
    <Appear>
      <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
        🔊 100% type soundness
    </Heading>
    </Appear>
    <Appear>
      <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
        🤝 Joyful interop
    </Heading>
    </Appear>
  </Slide>,
  <Slide transition={["fade"]} bgColor="primary">
    <Heading fit caps>
      Why bother?
  </Heading>
    <Appear>
      <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
        🖲 Native compilation
    </Heading>
    </Appear>
    <Appear>
      <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
        ⛑ Saviour errors
    </Heading>
    </Appear>
    <Appear>
      <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
        😴 Sleeping 8 hours a night
    </Heading>
    </Appear>
    <Appear>
      <Heading caps size={5} textAlign="left" margin={"30px 0 0 50px"}>
        🚲 Hipster cred
    </Heading>
    </Appear>
  </Slide>
];

const Outstanding = (
  <Slide transition={["slide"]} bgColor="primary">
    <Heading caps size={1} textAlign="left" margin={"30px 0 0 0"}>
      🐱️ Familiar
    </Heading>
    <Heading caps size={1} textAlign="left" margin={"30px 0 0 0"}>
      👨‍🏫 Types
    </Heading>
    <Heading caps size={1} textAlign="left" margin={"30px 0 0 0"}>
      🏎 Toolchain
    </Heading>
    <Heading caps size={1} textAlign="left" margin={"30px 0 0 0"}>
      🤝 Interop
    </Heading>
  </Slide>
);



export default [...CoreIntro, Outstanding];