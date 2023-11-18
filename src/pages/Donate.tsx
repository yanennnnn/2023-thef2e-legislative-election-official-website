import styled from "styled-components";
import donate1 from '@/assets/donate-1.png';
import donate2 from '@/assets/donate-2.png';
import donate3 from '@/assets/donate-3.png';
import donate4 from '@/assets/donate-4.png';
import newsBanner from '@/assets/newsBanner.png'
import BaseSectionTitle from '@/components/BaseSectionTitle'
import Row from "@/components/Row"
import DonateItem from "@/components/DonateItem"
const StyleDonate = styled.div`
  background: #D9E8FF;
  .donateList {
    margin-top: 60px;
  }
  .donateListBox {
    height: 100%;
  }
  .donateItem {
    height: auto;
  }
`

interface Iitem {
  id: number;
  title: string,
  content: string,
  secondary: string;
  img: string;
}

const Container = styled.div`
 width: 1220px;
 max-width: 100%;
 margin: 0 auto;
 padding-left: 40px;
 padding-right: 40px;
 position: relative;
 padding: 48px 40px 88px;
`
const StyledBanner = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`
const donateData = [
  {
    id: 1,
    title: '鬥小將',
    content: '捐款新台幣600元',
    secondary: '已有 9957 人贊助',
    img: donate1,
  },
  {
    id: 2,
    title: '鬥之星',
    content: '捐款新台幣6,000元',
    secondary: '已有 2000 人贊助',
    img: donate2,
  },
  {
    id: 3,
    title: '鬥傳奇',
    content: '捐款新台幣60,000元',
    secondary: '已有 999 人贊助',
    img: donate3,
  },
  {
    id: 4,
    title: '鬥之友',
    content: '自訂贊助金額',
    secondary: '',
    img: donate4,
  },
 
]

function Donate() {

  return (
    <StyleDonate>
      <StyledBanner src={newsBanner} alt="" />
      <Container>
        <BaseSectionTitle>小額捐款</BaseSectionTitle>
        <p style={{fontWeight: 500, fontSize: '20px'}}>您的小筆捐款，是每隻毛孩未來的大大動力！</p>
        <div className="donateList">
          <p style={{fontWeight: 700, marginBottom: '17px'}}>捐款方案：</p>
          <Row className="donateListBox">
            { donateData.map((item: Iitem)=>(
              <div className=" col donateItem"  key={item.id}>
                <DonateItem item={ item }/>
              </div>
            ))}
          </Row>
        </div>
       
      </Container>
    </StyleDonate>
  )
}

export default Donate