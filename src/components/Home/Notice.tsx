import styled from "styled-components";
import bg from '@/assets/noticeBg.png';
import text from '@/assets/noticeText.svg';

const StyledNotice = styled.div`
  background-image: url('${bg}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 310px;
  background-position: right;
`;
const Container = styled.div`
 width: 1130px;
 max-width: 100%;
 margin: 0 auto;
 padding-left: 40px;
 padding-right: 40px;
 position: relative;
 height: 100%;
 .imgBox {
  display: flex;
  align-items:center;
  height: 100%;
 }
`
function Notice() {
  return (
    <StyledNotice>
      <Container>
        <div className="imgBox">
          <img src={text} alt="更好的台灣，一同守護" />
        </div>
      </Container>
    </StyledNotice>
  );
}

export default Notice;