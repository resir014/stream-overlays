/* eslint-disable import/no-extraneous-dependencies */
import css from 'styled-jsx/css'
import { fonts, colors } from './variables'

const progressBarColor = '#000'

const global = css.global`
html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

html, body, #__next {
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

html {
  font-family: ${fonts.sansSerif};
  font-size: 16px;
  line-height: 1.5;
}

body {
  color: ${colors.grey90};
  background-color: ${colors.greenscreen};
}

a {
  text-decoration: none;
  color: ${colors.white};
  border-bottom: 2px solid ${colors.white};
  border-top: 2px solid transparent;
}

a:hover, a:focus {
  background-color: ${colors.white};
  color: ${colors.grey90};
  border-top-color: ${colors.white};
}

/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: ${progressBarColor};

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px ${progressBarColor}, 0 0 5px ${progressBarColor};
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: ${progressBarColor};
  border-left-color: ${progressBarColor};
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

export default global
