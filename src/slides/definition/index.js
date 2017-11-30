import React from 'react';
import styled from 'react-emotion';
import { Slide, Heading, Appear } from 'spectacle';

const LeftAlignedHeader = styled(Heading)`
  text-align: left;
`;

const Definition = (
  <Slide transition={['slide']} bgColor="primary">
    <Heading fit caps>
      Reason is...{' '}
    </Heading>
    <Appear>
      <LeftAlignedHeader size={4} textAlign="left" margin={'30px 0 0 50px'}>
        {' '}
        📝 New syntax for OCaml
      </LeftAlignedHeader>
    </Appear>
    <Appear>
      <Heading size={4} textAlign="left" margin={'30px 0 0 50px'}>
        {' '}
        🌊 Compiler workflow
      </Heading>
    </Appear>
    <Appear>
      <Heading size={4} textAlign="left" margin={'30px 0 0 50px'}>
        {' '}
        🛁 Docs, libs, utils
      </Heading>
    </Appear>
  </Slide>
);

export default Definition;
