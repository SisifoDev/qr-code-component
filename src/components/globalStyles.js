import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

:root{
    --white: hsl(0, 0%, 100%);
    --lightGray: hsl(212, 45%, 89%);
    --grayishBlue: hsl(220, 15%, 55%);
    --darkBlue: hsl(218, 44%, 22%);

}


html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

  body {
    background: var(--lightGray);
    color:  var(--darkBlue);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    margin: 0;
    padding: 0%;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${"" /* transition: all 0.50s linear; */}
  }

  input,
button,
textarea {
  margin: 0;
  border: none;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  outline: none;
  /* Browsers have different default form fonts */
  font-size: 13px;
  font-family: "Space Mono", monospace;
}

p {
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
}
  `;
