import React from 'react';
import {
  Slide,
  Heading
} from 'spectacle';

const images = {
  syntax: require("./syntax.png"),
  init: require("./init.png"),
  directory: require('./directory.png'),
  ide: require('./bare-ide.png'),
  src: require('./src.png'),
  package: require('./package.png'),
  bsconfig: require('./bsconfig.png'),
  yarn: require('./yarnstart.png'),
  output: require('./jsoutput.png'),
  add: require('./add.png'),
  addoutput: require('./addoutput.png'),
  typeerror: require('./typeerror.png')
}

const Syntax = [
  <Slide transition={["slide"]} bgColor="tertiary">
    <Heading size={3} caps textColor="primary">
      What's writing in
      </Heading>
    <Heading fit caps textColor="primary">
      ReasonML
      </Heading>
    <Heading size={3} caps textColor="primary">
      actually like?
      </Heading>
  </Slide>,
  <Slide transition={["slide"]} bgColor="primary">
    <Heading fit textColor="tertiary">
      Familiar
        </Heading>
    <Heading size={3} textColor="tertiary" margin={"50px 0 50px 0"}>
      BUT
        </Heading>
    <Heading fit textColor="tertiary">
      Powerful
  </Heading>
  </Slide>,
  <Slide transition={["slide"]} bgColor="primary">
    <Heading size={3} fit textColor="tertiary">
      Functional
      </Heading>
    <Heading size={2} textColor="tertiary" margin={"50px 0 50px 0"}>
      BUT
      </Heading>
    <Heading size={3} fit textColor="tertiary">
      Permissive
  </Heading>
  </Slide>,
  <Slide transition={["slide"]} bgImage={images.syntax} />,
  <Slide transition={["slide"]} bgImage={images.page} />,
  <Slide transition={["slide"]} bgImage={images.bsbinstall} />,
  <Slide transition={["slide"]} bgImage={images.nine} />,
  <Slide transition={["slide"]} bgImage={images.init} />,
  <Slide transition={["slide"]} bgImage={images.directory} />,
  <Slide transition={["slide"]} bgImage={images.ide} />,
  <Slide transition={["slide"]} bgImage={images.src} />,
  <Slide transition={["slide"]} bgImage={images.package} />,
  <Slide transition={["slide"]} bgImage={images.bsconfig} />,
  <Slide transition={["slide"]} bgImage={images.yarn} />,
  <Slide transition={["slide"]} bgImage={images.output} />,
  <Slide transition={["slide"]} bgImage={images.add} />,
  <Slide transition={["slide"]} bgImage={images.addoutput} />,
  <Slide transition={["slide"]} bgImage={images.typeerror} />,
  <Slide transition={["slide"]} bgColor="primary">
    <Heading fit textColor="tertiary">
      "67"
    </Heading>
    <Heading size={2} textColor="tertiary" margin={"50px 0 50px 0"}>
      obviously
    </Heading>
  </Slide>,
  <Slide transition={["slide"]} bgImage={images.student} />
];

export default Syntax;