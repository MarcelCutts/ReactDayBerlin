import React from 'react';
import {
  Slide,
  Heading
} from 'spectacle';

const images = {
  syntax: require("./syntax.png"),
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
    <Heading size={3} textColor="tertiary">
        OCaml + Type Erasure
    </Heading>
    <Heading size={2} textColor="tertiary" margin={"50px 0 50px 0"}>
        ≈
    </Heading>
    <Heading size={3} textColor="tertiary">
        JavaScript
    </Heading>
  </Slide>,
  <Slide transition={["slide"]} bgColor="primary">
    <Heading fit textColor="tertiary">
      Familiar
        </Heading>
    <Heading size={3} textColor="tertiary" margin={"50px 0 50px 0"}>
      BUT
        </Heading>
    <Heading  fit  textColor="tertiary">
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
  <Slide transition={["slide"]} bgColor="primary">
    <Heading size={1} textColor="tertiary">
      <span role="img" aria-label="pizza">🍕</span>
    </Heading>
  </Slide>
];

export default Syntax;