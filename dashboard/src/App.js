import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import { spring ,AnimatedSwitch } from 'react-router-transition';
import Home from "./components/home.component"
import IceCream from "./components/icecream.component"

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

function App() {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="switch-wrapper"
      >
        <Route path="/" exact component={Home} />
        <Route path="/icecream" exact component={IceCream} />
      </AnimatedSwitch>
    </Router >
  );
}

export default App;
