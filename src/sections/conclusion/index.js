import React from 'react';
import {
  Slide,
  Heading,
  Image,
  Appear
} from 'spectacle';


const images = {
  madness: require('./madness.jpg'),
  lair: require('./lair.jpg'),
}

const Conclusion = [
  <Slide transition={["slide"]} bgColor="tertiary">
  <Heading size={3} caps textColor="primary">
    Should I use
    </Heading>
  <Heading fit caps textColor="primary">
    ReasonML
    </Heading>
  <Heading size={3} caps textColor="primary">
    today?
    </Heading>
</Slide>,
  <Slide transition={["slide"]} bgColor="primary">
    <Heading
      size={3}
      caps
      textAlign="left"
      textColor="tertiary"
      margin={10}
      padding={"30px 0"}
    >
      👶 Immature
</Heading>
    <Heading
      size={3}
      caps
      textAlign="left"
      textColor="tertiary"
      margin={10}
      padding={"30px 0"}
    >
      🌲 Small ecosystem
</Heading>
    <Heading
      size={3}
      caps
      textAlign="left"
      textColor="tertiary"
      margin={10}
      padding={"30px 0"}
    >
      👩‍ New community
</Heading>
  </Slide>,
  <Slide transition={["slide"]} bgImage={images.lair} />,
    <Slide transition={["slide"]} bgColor="primary">,
    <Heading fit caps textColor="tertiary">
      Mediocrity
        </Heading>
    <Heading fit caps textColor="tertiary" margin={"50px 0 50px 0"}>
      kills
        </Heading>
  </Slide>
];


export default Conclusion;