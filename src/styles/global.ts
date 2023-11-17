import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

// @font-face {
//   font-family: 'Noto Sans TC';
//   src: url(https://fonts.googleapis.com/css2?family=Agbalumo&family=Noto+Sans+TC:wght@400;500;700&display=swap);
// }
*, ::after, ::before {
  box-sizing: border-box;
}
body {
  font-family: 'Noto Sans TC', system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #222222;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  font-size: 18px;
  padding: 0;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1;
  margin: 0;
  font-style: normal;
  font-weight: 700;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 32px;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 22px;
}

h5 {
  font-size: 18px;
}

ol, ul {
  padding: 0px;
  margin: 0px;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}

p{
  margin: 0;
}

button {
  font-family: unset
}
`

export default GlobalStyle