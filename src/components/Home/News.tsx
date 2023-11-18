import styled from "styled-components";
import Logo from '@/assets/logo-orange.svg';
import BaseButton from '@/components/BaseButton'
import BaseSectionTitle from '@/components/BaseSectionTitle'
import NewsList from '@/components/NewsList'
const Container = styled.div`
 width: 1130px;
 max-width: 100%;
 margin: 0 auto;
 padding-left: 40px;
 padding-right: 40px;
 position: relative;
`
const DonateBox = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 60px 40px;
  position: relative;
  .title {
    font-size: 24px;
    font-weight: 700;
    position: relative;
    z-index: 1;
  }
  .sectionTitle {
    margin-top: 24px;
    color: #EF6A23;
    font-weight: 500;
    position: relative;
    z-index: 1;
  }
  .meta {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }
  .text {
    margin-top: auto;
    font-size: 15px;
    color: #787878;
  }
  &:after {
    content: '';
    position:absolute;
    background-image: url('${Logo}');
    background-repeat: no-repeat;
    background-size: cover;
    width: 165px;
    height: 229px;
    top: 24px;
    right: 23%;
  }
`
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -31px;
  margin-left: -31px;
  >.col {
    position: relative;
    width: 100%;
    max-width: 100%;
    padding-right: 31px;
    padding-left: 31px;
    flex: 1 0 0%;
    &.right {
      flex: 0 0 auto;
      width: 52.9%;
    }
    &.left {
      width: 47.1%;
    }
  }
`

const Production = styled.div`
  margin-top: 24px;
 .name{
    font-size: 28px;
    color: #3670C7;
    line-height: 23px;
    letter-spacing: 2px;
    font-weight: 900;
    margin-bottom: 8px;
    span {
      font-size: 16px;
      font-weight: 500;
    }
 }
 .content {

 }
`

const newsListData = [
  {
    id: 1,
    title: '台北寵物論壇，爭取狗狗友善環境',
    content: '炎炎夏日的周六，我帶著鬥牛犬霸氣墨鏡走進了台北寵物論壇，決定要全力宣傳「狗狗傲嬌」的理念！誰說只有貓咪有個性，狗狗也應該活出專屬自己的個性。',
    img: 'src/assets/news1.png',
    date: '12.26'
  },
  {
    id: 2,
    title: '掃街模式開啟！鄉親父老一起來！',
    content: '街上氣氛真的很棒，從小孩到大人，雖然下起大雨，大家還是穿著雨衣來參加活動，真的太感人了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「狗狗友善環境」政策的決心。',
    img: 'src/assets/news2.png',
    date: '12.24'
  },
  {
    id: 3,
    title: '收容所模特兒大比拼！',
    content: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
    img: 'src/assets/news3.png',
    date: '12.20'
  },
 
]
const Donate = () => {
  return (
    <DonateBox>
      <div className="contentText">
        <BaseSectionTitle>小額捐款</BaseSectionTitle>
        <p className="sectionTitle"> 您的小筆捐款，<br/>是每隻毛孩未來的大大動力！</p>
        <div className="meta">
          <p className="text">目前小額贊助總金額：987,655,873</p>
          <BaseButton 
            theme="orange" 
            buttonType="link"
            linkTo="/donate"
            style={{
              fontWeight: 500,
            }}
          >
          我要捐款
        </BaseButton>
        </div>
      </div>
    </DonateBox>
  )
}
function Top() {
  return (
    <>
      <section style={{
        backgroundColor: '#D9E8FF',
      }}>
        <Container>
          <Row>
            <div className="col right">
              <Donate/>
              <Production>
                <h4 className="name">鬥立翰<span>（Dog Li-Han）</span></h4>
                <p>
                  我堅信推動更完善的狗狗福利和相關政策，能間接地發展台灣的未來。畢竟，狗狗療育的存在能幫助改善人民身心健康，進而賺更多的錢，激發工作熱情、推動經濟，為台灣的GDP帶來巨大效益。<br/>
                  因此，我期望能在立法院推進政策，確保狗狗和人類都能得到最大的福祉。護航台灣的幸福，就從照顧狗狗開始！
                </p>
              </Production>
            </div>
            <div className="col left">
              <BaseSectionTitle>最新消息</BaseSectionTitle>
              <NewsList list={newsListData} isHome/>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Top