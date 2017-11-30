import React from 'react';
import {
  Slide,
  Image
} from 'spectacle';

const images = {
  ocaml: require('./ocaml.png')
};

const Ocaml = (
  <Slide transition={["slide"]} bgColor="primary">
    <Image src={images.ocaml} width="100%" />
  </Slide>
);

export default Ocaml;