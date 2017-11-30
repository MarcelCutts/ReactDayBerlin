import React from 'React';
import {
  Slide,
  Heading,
  Image
} from 'spectacle';

const images = {
  reasonReact: require('reason-react.png'),
  berghain: require('./berghain.png'),
  sven: require('./sven.png')
}

const React = [
  <Slide transition={["slide"]} bgColor="primary">
  <Image src={images.reasonReactLogo} height="100%" />
  </Slide>,
  <Slide transition={["slide"]} bgColor={"tertiary"}>
  <Heading fit caps textColor="primary">
    Lets build some
  </Heading>
  <Heading fit caps textColor="primary">
    React!
  </Heading>
</Slide>
]