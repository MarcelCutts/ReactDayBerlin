import React from "react";
import styled from "styled-components";
import {
  Heading,
  Layout,
  Fill,
  Image,
  Slide
} from "spectacle";

const images = {
  reasonLogo: require("./reason-logo.svg"),
  twitterLogo: require("./twitter-logo.png")
};

const TwitterBlock = styled.span`
  display: flex;
  justify-content: center;
`;

const Splash = (
  <Slide transition={["slide"]} bgColor="primary">
    <Image src={images.reasonLogo} width="100%" />
    <Layout>
      <Fill>
        <Heading
          size={6}
          caps
          textColor="primary"
          bgColor="tertiary"
          margin={10}
          padding={"5px 0"}
        >
          Marcel Cutts
        </Heading>
      </Fill>
      <Fill>
        <Heading
          size={6}
          caps
          textColor="primary"
          bgColor="tertiary"
          margin={10}
          padding={"5px 0"}
        >
          <TwitterBlock>
            @marcelcutts
            <Image src={images.twitterLogo} height="30px" margin="5px 0 0 5px" />
          </TwitterBlock>
        </Heading>
      </Fill>
    </Layout>
  </Slide>
);

export default Splash;
