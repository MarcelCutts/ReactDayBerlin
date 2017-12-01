import React from 'react';
import {
  Slide,
  Heading,
  Image
} from 'spectacle';

// Reasonably typed ???

import CompiletoJsAlternatives from '../../slides/compile-to-js-alternatives';

const images = {
  webpack: require('./webpack.png'),
  bsval: require('./bsval.png'),
  config: require('./config.png'),
  export: require('./export.png'),
  raw: require('./raw.png'),
  require: require('./require.png'),
  stein: require('./stein.png'),
}


const Intro = [
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

const JsInRe = [
  <Slide transition={["slide"]} bgImage={images.stein} />,
  <Slide transition={["slide"]} bgImage={images.bsval} />,
  <Slide transition={["slide"]} bgImage={images.raw} />,
]

const ReInJs = [
  <Slide transition={["slide"]} bgImage={images.config} />,
  <Slide transition={["slide"]} bgImage={images.require} />,
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

const Interop = [
  ...Intro,
  CompiletoJsAlternatives,
  ...JsInRe,
  ...ReInJs
];

export default Interop;