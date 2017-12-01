import React from 'react';
import {
  Slide,
  Headng,
  Image
} from 'spectacle';

// Reasonably typed ???

import CompiletoJsAlternatives from '../../slides/compile-to-js-alternatives';

const images = {
  webpack: require('./webpack.png'),
}

const Heading = [
  <Slide transition={["slide"]} bgColor={"tertiary"}>
    <Heading fit caps textColor="primary">
      Please, what about the
  </Heading>
    <Heading fit caps textColor="primary">
      real world?
  </Heading>
  </Slide>,
  <Slide transition={["slide"]} bgColor="primary">
    <Heading fit textColor="tertiary">
      Interop
    </Heading>
    <Heading size={1} textColor="tertiary" margin={"50px 0 0 0"}>
      🤝
    </Heading>
  </Slide>
];

// lots of escape hatches
// Output types

const ReInJs = [
  <Slide transition={["slide"]}>
    <Image src={images.webpack} width="80%" />
  </Slide>,
  <Slide transition={["slide"]} bgColor="primary">
    <Heading fit textColor="tertiary">
      bsb -make-world
    </Heading>
    <Heading size={2} textColor="tertiary">
      &&
    </Heading>
    <Heading fit textColor="tertiary">
      yarn webpack
    </Heading>
  </Slide>
]
 // JS

 // Pizza example
const JsInRe = [
  
]


const Interop = [
  ...Heading,
  CompiletoJsAlternatives,
  ...ReInJs
];

export default Interop;