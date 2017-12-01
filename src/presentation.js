// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import Splash from './slides/splash';
import JSEvolution from './slides/js-evolution';
import Tooling from './slides/tooling';
import QuestionRelevance from './slides/question-relevance';
import ReasonSplash from './slides/reason-splash';
import OcamlSplash from './slides/ocaml-splash';
import Elixir from './slides/elixir';
import Definition from './slides/definition';
import Whatsapp from './slides/whatsapp';
import QuestionBrowser from './slides/question-browser';
import BucklescriptBloomberg from './slides/bucklescript-bloomberg';
import BucklescriptSplash from './slides/bucklescript-splash';
import QuestionWhy from './slides/question-why';
import Syntax from './sections/syntax';
import PowerCouple from './slides/power-couple';
import CoreIntro from './sections/core-intro';
import TypeHype from './sections/type-hype';
import Toolchain from './sections/toolchain';
import CompilationPath from './slides/compilation-path';
import CompileToJSAlternatives from './slides/compile-to-js-alternatives';
import Outro from './sections/outro';
import ReasonReact from './sections/reason-react/';
import Conclusion from './sections/conclusion';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#555',
    tertiary: '#db4d3f',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

/* Basic section strucutre

Intro
What is ReasonML
  - History
  - Origins
  - Analogous tech
  - Bucklescript
Why?
  - Replace of tooling
  - Language features
    - Typing is a big thing here
Non-func outut
   - Performance
Reason React
  - Demo of how to start
  - Cool features
  - Home run - messenger stats
- Summary
  - Comparison to other, similar techs
  - Which to choose for your project
*/

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        {Splash}
        {JSEvolution}
        {Tooling}
        { /* Lang? */ }

        {ReasonSplash}
        {Definition}
        {OcamlSplash}
        {QuestionRelevance}
        {Elixir}
        {Whatsapp}
        {QuestionBrowser}
        {BucklescriptBloomberg}
        {BucklescriptSplash}
        {CompilationPath}

        {QuestionWhy}
        {PowerCouple}
        {CompileToJSAlternatives}
        {CoreIntro}
        {Syntax}
        {TypeHype}
        {Toolchain}
        {ReasonReact}
        {Conclusion}



        {/*}
        {PowerCouple}
        {Approachable but deep}
        {Absolute type hype - editor, errors}
        {Bucklescript is a beast - perf, readable output, ffi}
        {alternatives fail in ffi, size, etc}
        {what does it actually look like?}
        {berghain but one small problem...}
        {gig example + interop?}
        {comparison to other ctjs}
        {react}
        {Benefits}
        */
        }

        {Outro}

      </Deck>
    );
  }
}
