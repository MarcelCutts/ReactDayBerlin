import React from 'react';
import {
  Slide,
  Heading
} from 'spectacle';

const QuestionWhy = [
  <Slide transition={["slide"]} bgColor="tertiary">
    <Heading fit caps textColor="primary" margin={10}>
      OK, you can...
   </Heading>
  </Slide>,
  <Slide bgColor="tertiary">
    <Heading fit caps textColor="primary" margin={10}>
      but
    </Heading>
  </Slide>,
  <Slide transition={["slide"]} bgColor="tertiary">
    <Heading size={3} textAlign="left" textColor="primary" margin={10}>
      Why should I write applications in a meta language for a 20 year old
      systems language that is compiled to JavaScript by a fancy keyboard
      company?
    </Heading>
  </Slide>
];

export default QuestionWhy;