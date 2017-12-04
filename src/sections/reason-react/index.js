import React from 'react';
import {
  Slide,
  Heading,
  Image,
  Appear
} from 'spectacle';

const images = {
  reasonReact: require('./reason-react.png'),
  berghain: require('./berghain.jpg'),
  sven: require('./sven.jpg'),
  apprun: require('./apprun.png'),
  docs: require('./docs.png'),
  baseapp: require('./baseapp.png'),
  baseconfig: require('./baseconfig.png'),
  basepackage: require('./basepackage.png'),
  basepage: require('./basepage.png'),
  enzyme: require('./enzyme.png'),
  enzymeadd: require('./enzymeadd.png'),
  enzymeconfig: require('./enzymeconfig.png'),
  firsttest: require('./firsttest.png'),
  firsttestcontent: require('./firsttestcontent.png'),
  headertests: require('./headertests.png'),
  headerpass: require('./headerpass.png'),
  hellosven: require('./hellosven.png'),
  justheader: require('./justheader.png'),
  scripts: require('./scripts.png'),
  scriptsdone: require('./scriptsdone.png'),
  reducer: require('./reducer.png'),
  svenplz: require('./svenplz.png'),
  messenger: require('./messenger.svg')
};

const ReasonReact = [
  <Slide transition={["slide"]} bgColor="primary">
  <Image src={images.reasonReact} height="100%" />
  </Slide>,
  <Slide bgImage={images.docs} />,
  <Slide transition={["slide"]} bgColor={"tertiary"}>
    <Heading fit caps textColor="primary">
      Lets build some
    </Heading>
    <Heading fit caps textColor="primary">
      React!
    </Heading>
  </Slide>,
  <Slide bgImage={images.berghain} />,
  <Slide bgImage={images.sven} />,
  <Slide bgImage={images.scripts} />,
  <Slide bgImage={images.scriptsdone} />,
  <Slide bgImage={images.baseapp} />,
  <Slide bgImage={images.basepackage} />,
  <Slide bgImage={images.baseconfig} />,
  <Slide bgImage={images.apprun} />,  
  <Slide bgImage={images.justheader} />,
  <Slide bgImage={images.firsttest} />,
  <Slide bgImage={images.firsttestcontent} />,
  <Slide bgImage={images.enzyme} />,
  <Slide bgImage={images.enzymeadd} />,
  <Slide bgImage={images.headertests} />,
  <Slide bgImage={images.headerpass} />,
  <Slide bgImage={images.reducer} />,
  <Slide bgImage={images.svenplz} />,
  <Slide bgImage={images.messenger} bgColor={"#0084ff"}/>,
  <Slide transition={["slide"]} bgColor="primary">
  <Heading fit caps>
    Messenger.com{" "}
  </Heading>
  <Appear>
    <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
      {"⚡️ <100ms build"}
    </Heading>
  </Appear>
  <Appear>
    <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
      🐜 10 bugs /year
    </Heading>
  </Appear>
  <Appear>
    <Heading size={4} textAlign="left" margin={"30px 0 0 50px"}>
      🚀 Days->Mins refactor
    </Heading>
  </Appear>
  </Slide>
];

export default ReasonReact;