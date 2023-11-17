import styled from "styled-components";
import bg1 from '@/assets/homePolicy1.png';
import bg2 from '@/assets/homePolicy2.png';
import bg3 from '@/assets/homePolicy3.png';
import bg4 from '@/assets/homePolicy4.png';
import BaseSectionTitle from '@/components/BaseSectionTitle'
import PolicyItem from '@/components/Home/PolicyItem'
import Row from "@/components/Row"
interface Iitem {
  title: string;
  path: string;
  img: string;
}


const list = [
  {
    title: `為毛孩子謀福利！<br/>推動寵物醫療保障方案`,
    path: 'serve',
    img: bg1,
  },
  {
    title: `打造休閒天堂！<br/>推廣寵物休閒與娛樂場所`,
    path: 'leisure',
    img: bg2
  },
  {
    title: `讓愛更專業！<br/>推廣寵物飼養教育`,
    path: 'educate',
    img: bg3
  },
  {
    title: `反對外貌歧視！<br/>破除寵物刻板印象`,
    path: 'impression',
    img: bg4
  },
]
const StyledPolicy = styled.div`
  padding: 80px 0;
  margin-bottom: -24px;
  .ploicyList {
    margin-right: -12px;
    margin-left: -12px;
    .ploicyItem {
      padding-right: 12px;
      padding-left: 12px;
      width: 50%;
      flex: 0 0 auto;
      margin-bottom: 24px;
    }
  }
`;

const Container = styled.div`
 width: 1130px;
 max-width: 100%;
 margin: 0 auto;
 padding-left: 40px;
 padding-right: 40px;
 position: relative;
 height: 100%;
`
function Policy() {
  return (
    <StyledPolicy>
      <Container>
        <BaseSectionTitle>政治議題</BaseSectionTitle>
        <Row className="ploicyList">
          { list.map((item: Iitem)=>(
            <div className="ploicyItem">
               <PolicyItem item={ item }/>
            </div>

          ))}
        </Row>
      </Container>
    </StyledPolicy>
  );
}

export default Policy;