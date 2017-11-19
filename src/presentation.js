// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import Splash from './slides/splash';
import JSEvolution from './slides/js-evolution';

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
      </Deck>
    );
  }
}
