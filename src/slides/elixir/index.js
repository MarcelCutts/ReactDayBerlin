import React from 'react';
import {
  Slide,
  Image,
  Layout,
  Fill
} from 'spectacle';
import styled from 'react-emotion';

const images = {
  erlang: require('./erlang.png'),
  elixir: require('./elixir.png')
};

const Spacer = styled('div')`
  width: 10%;
`;

const Elixir = (
  <Slide transition={["slide"]} bgColor="primary">
    <Layout>
    <Fill>
    <Image src={images.erlang} width="100%" />
    </Fill>
    <Spacer />
    <Fill>
    <Image src={images.elixir} width="90%"/>
    </Fill>
    </Layout>
  </Slide>
);

export default Elixir;