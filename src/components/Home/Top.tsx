import styled, { keyframes } from "styled-components";
import titleText from "@/assets/title.svg"
import topBanner from "@/assets/topBanner.png"
import BaseButton from '@/components/BaseButton'
import DonateImg from '@/assets/donate.svg?react';
const Container = styled.div`
 width: 1220px;px;
 max-width: 100%;
 margin: 0 auto;
 padding-left: 40px;
 padding-right: 40px;
 position: relative;
`
const CenteredContent = styled.div`
  position: relative;
  z-index: 2;
  padding: min(15.25vw, 280px) 0px;
  // height: 881px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: flex-start;
`
const StyledBanner = styled.div`
  position: absolute;
  background-image: url(${topBanner});
  background-repeat: no-repeat;
  right: 0;
  top: 0;
  bottom: 0;
  width: 668px;
  height: 881px;
`
const StyleTitleText = styled.img`
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
const StyleSvg = styled(DonateImg)`
  .round {
    animation: ${rotate} 8s linear infinite;
    transform-origin: center;
  }
  position: absolute;
  left: 30.5%;
  top:65%;
  z-index: 3;
`
function Top() {

  return (
    <>
      <header style={{
        backgroundColor: '#D9E8FF',
        height: '881px',
      }}>
        <Container>
          <CenteredContent>
            <h1>
              <StyleTitleText src={titleText}/>
            </h1>
            <p style={{
              marginTop: '24px',
              fontWeight: '700'
            }}>
              我是鬥立翰，堅守正義、追求共融，<br/>
              望與人類共同塑造更美好的明天。
            </p>
            <BaseButton 
              theme="white" 
              onClick={()=> alert('a')}
              style={{
                marginTop: '24px',
                fontWeight: 500,
              }}
            >
              認識候選人
            </BaseButton>
          </CenteredContent>
          <StyleSvg fill="#3670C7"/>
          <StyledBanner />
        </Container>
      </header>
    </>
  )
}

export default Top