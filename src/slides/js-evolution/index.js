import React from 'react';
import { Slide, CodePane, Magic } from 'spectacle';
import styled from 'styled-components';

const callbacks = `
getData(a => {
  getMoreData(a, b => {
    getMoreData(b, c => {
      getMoreData(c, e => {
        console.log(e);
      })
    })
  })
});
`;

const promises = `
getData()
  .then(a => getMoreData(a))
  .then(b => getMoreData(b))
  .then(c => getMoreData(c))
  .then(e => console.log(e));
`;

const async = `
(async() => {
  const a = await getData())
  const b = await getMoreData(a))
  const c = await getMoreData(b))
  const d = await getMoreData(c))
  const e = await console.log(d));
  console.log(e);
})();
`;

// This makes me feel dirty
const LargeCodePane = styled(CodePane)`
  font-size: 2rem !important; 
`;

const JSEvolution = (
  <Magic>
    <Slide bgColor="#2a2734">
      <LargeCodePane source={callbacks} lang="javascript" />
    </Slide>
    <Slide bgColor="#2a2734">
      <LargeCodePane source={promises} lang="javascript" />
    </Slide>
    <Slide bgColor="#2a2734">
      <LargeCodePane source={async} lang="javascript" />
    </Slide>
  </Magic>
);

export default JSEvolution;
