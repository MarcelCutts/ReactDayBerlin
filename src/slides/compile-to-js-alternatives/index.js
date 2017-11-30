import React from 'react';
import {
  Slide,
  Image,
  Layout,
  Fill
} from 'spectacle';

const images = {
  elm: require('./elm.png'),
  purescript: require('./purescript.png'),
  coffeescript: require('./coffeescript.png'),
  typescript: require('./typescript.png'),
  livescript: require('./livescript.png'),
  clojuescript: require('./clojuescript.svg')
};

const CompileToJSAlternatives = (
  <Slide transition={["slide"]} bgColor="primary">
    <Layout>
      <Fill>
        <Image src={images.elm} height="250px" />
      </Fill>
      <Fill>
        <Image src={images.purescript} height="250px" />
      </Fill>
      <Fill>
        <Image src={images.coffeescript} height="250px" />
      </Fill>
    </Layout>
    <Layout>
      <Fill>
        <Image src={images.typescript} height="250px" />
      </Fill>
      <Fill>
        <Image src={images.livescript} height="250px" />
      </Fill>
      <Fill>
        <Image src={images.clojuescript} height="250px" />
      </Fill>
    </Layout>
  </Slide>)
;

export default CompileToJSAlternatives;