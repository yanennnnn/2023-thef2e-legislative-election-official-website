import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
  @import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Noto+Sans+TC:wght@400;500;700&display=swap');
}
body {
  font-family: 'Noto Sans TC', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #222222;
}
`

export default GlobalStyle