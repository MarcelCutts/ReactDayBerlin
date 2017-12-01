import React from 'react';
import {
  Slide,
  Heading,
  Image
} from 'spectacle';

const images = {
  reasonReact: require('./reason-react.png'),
  berghain: require('./berghain.jpg'),
  sven: require('./sven.jpg')
}

const ReasonReact = [
  <Slide transition={["slide"]} bgColor="primary">
  <Image src={images.reasonReact} height="100%" />
  </Slide>,
  <Slide transition={["slide"]} bgColor={"tertiary"}>
    <Heading fit caps textColor="primary">
      Lets build some
    </Heading>
    <Heading fit caps textColor="primary">
      React!
    </Heading>
  </Slide>,
  <Slide bgImage={images.berghain} />,
  <Slide bgImage={images.sven} />
];

export default ReasonReact;