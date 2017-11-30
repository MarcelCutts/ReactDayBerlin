import React from 'react';
import {
  Slide,
  Heading,
  Text
} from 'spectacle';

const CompilationPath = (
  <Slide transition={["slide"]} bgColor="primary">
    <Heading size={2}>OCaml/Reason</Heading>
    <Text margin={"30px 0"}>⬇️</Text>
    <Heading size={2}>Bucklescript</Heading>
    <Text margin={"30px 0"}>⬇️</Text>
    <Heading size={2}>JavaScript</Heading>
  </Slide>
);

export default CompilationPath;