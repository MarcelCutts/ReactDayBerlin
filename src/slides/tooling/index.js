import React from 'react';
import { Slide, Layout, Fill, Image } from 'spectacle';

const images = {
  flowLogo: require('./flow-logo.png'),
  babelLogo: require('./babel-logo.png'),
  esLintLogo: require('./es-lint-logo.png'),
  prettierLogo: require('./prettier-logo.png')
};

const Tooling = (
  <Slide transition={['slide']} bgColor="primary">
    <Layout>
      <Fill>
        <Image src={images.flowLogo} height="250px" />
      </Fill>
      <Fill>
        <Image src={images.babelLogo} height="250px" />
      </Fill>
    </Layout>
    <Layout>
      <Fill>
        <Image src={images.esLintLogo} height="250px" />
      </Fill>
      <Fill>
        <Image src={images.prettierLogo} height="250px" />
      </Fill>
    </Layout>
  </Slide>
);

export default Tooling;
