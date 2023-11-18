
import styled from 'styled-components';
import BaseSectionTitle from '@/components/BaseSectionTitle'
import newsBanner from '@/assets/newsBanner.png'
import NewsList from '@/components/NewsList'
import newsBg1 from '@/assets/newsBig1.png'
import newsBg2 from '@/assets/newsBig2.png'
import newsBg3 from '@/assets/newsBig3.png'
function News() {
const StyledNews = styled.div`
  background: #D9E8FF;
`
const Container = styled.div`
  width: 1220px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 48px 40px 60px;
 `
const StyledBanner = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`
const newsListData = [
  {
    id: 1,
    title: '台北寵物論壇，爭取狗狗友善環境',
    content: '炎炎夏日的周六，我帶著鬥牛犬霸氣墨鏡走進了台北寵物論壇，決定要全力宣傳「狗狗傲嬌」的理念！誰說只有貓咪有個性，狗狗也應該活出專屬自己的個性。',
    img: newsBg1,
    date: '12.26'
  },
  {
    id: 2,
    title: '掃街模式開啟！鄉親父老一起來！',
    content: '街上氣氛真的很棒，從小孩到大人，雖然下起大雨，大家還是穿著雨衣來參加活動，真的太感人了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「狗狗友善環境」政策的決心。',
    img:  newsBg2,
    date: '12.24'
  },
  {
    id: 3,
    title: '收容所模特兒大比拼！',
    content: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
    img:  newsBg3,
    date: '12.20'
  },
 
]
  return (
    <StyledNews>
      <StyledBanner src={newsBanner} alt="" />
      <Container>
        <BaseSectionTitle>最新活動</BaseSectionTitle>
        <NewsList list={newsListData} isHome={false} />
      </Container>
    </StyledNews>
  )
}

export default News