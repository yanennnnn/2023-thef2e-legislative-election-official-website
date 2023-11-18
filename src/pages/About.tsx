import styled, { keyframes } from 'styled-components';
import aboutBg from '@/assets/aboutBg.svg'
import Donate from '@/assets/donate.svg?react'
import BaseSectionTitle from '@/components/BaseSectionTitle'
// import aboutBgColor from '@/assets/aboutBgColor.png'
const StyledAbout = styled.div`
  width: 100%;
  height: calc(100vh - 110px);
  overflow: hidden;
  background-image: url('${aboutBg}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  padding-top: min(18vh, 200px);
  .content {
    width: 322px;
    height: min(54vh, 700px);
    overflow: auto;
    p {
      margin-bottom: 16px;
    }
  }
`

const Container = styled.div`
 width: 1220px;
 max-width: 100%;
 margin: 0 auto;
 padding-left: 40px;
 padding-right: 40px;
 position: relative;
`
// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const StyleSvg = styled(Donate)`
  .round {
    animation: ${rotate} 8s linear infinite;
    transform-origin: center;
  }
  position: absolute;
  left: 30%;
  bottom: -5vh;
  z-index: 3;
`
function About() {

  return (
    <StyledAbout>
      <Container>
        <BaseSectionTitle>認識鬥立翰</BaseSectionTitle>
        <div className='content'>
          <p>鬥立翰在台灣這片土地長大，深感對台灣的情感。狗狗們需要人類的呵護和照顧，而狗狗也需要一位忠實的代表，一位能夠聆聽毛孩們心聲，並將這些聲音帶入立法院的代表。因此，我踏上了參選立委的征程，希望能為毛孩們帶來更好的未來。</p>
          <p>我堅信推動更完善的狗狗福利和相關政策，能間接地發展台灣的未來。畢竟，狗狗療育的存在能幫助改善人民身心健康，進而賺更多的錢，激發工作熱情、推動經濟，為台灣的GDP帶來巨大效益。台灣經濟發展良好，就能過上更好的生活，狗狗們也能改善生活環境，是一箭雙鵰的好事。因此，我期望能在立法院推進政策，確保狗狗和人類都能得到最大的福祉。</p>
          <p>護航台灣的幸福，就從照顧狗狗開始！請支持鬥立翰，讓我們攜手努力，為台灣帶來更美好的未來。</p>
        </div>
        <StyleSvg fill="#ffffff"/>
      </Container>
    </StyledAbout>
  )
}

export default About