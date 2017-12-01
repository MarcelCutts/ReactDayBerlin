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
  messenger: require('./messenger.svg')
}

const Conclusion = [
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
  <Slide transition={["slide"]} bgImage={images.madness} />,
  <Slide transition={["slide"]} bgImage={images.lair} />,
  <Slide bgImage={images.messenger} bgColor={"#0084ff"}/>,
  <Slide transition={["slide"]} bgColor="primary">
  <Heading fit caps>
    Messenger.com{" "}
  </Heading>
  <Appear>
    <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
      {"⚡️ <100ms build"}
    </Heading>
  </Appear>
  <Appear>
    <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
      🐜 10 bugs /year
    </Heading>
  </Appear>
  <Appear>
    <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
      🚀 Days->Mins refactor
    </Heading>
  </Appear>
</Slide>
];

export default Conclusion;