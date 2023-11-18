import styled from 'styled-components';
import policy1 from '@/assets/policy1.png'
import policy2 from '@/assets/policy2.png'
import policy3 from '@/assets/policy3.png'
import policy4 from '@/assets/policy4.png'
import policyBg1 from '@/assets/policyBg1.svg'
import policyBg2 from '@/assets/policyBg2.svg'
import policyBg3 from '@/assets/policyBg3.svg'
import policyBg4 from '@/assets/policyBg4.svg'
import ArrowTop from '@/assets/arrowTop.svg?react';
import ArrowBottom from '@/assets/arrowBottom.svg?react'
import SectonPage from '@/components/Policy/SectionPage'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from 'react';

interface IPolicyItem {
  id: string;
  title: string;
  list: string[];
  img: string;
  imgBg: string;
}
const policyList = [
  {
    id: 'serve',
    title: `為毛孩子謀福利！<br/>推動寵物醫療保障方案`,
    list:['設立寵物醫療基金：每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用', 
    '提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力', 
    '合作動物醫院：目前已有和超過 200 家動物醫院進行初步的合作討論'],
    img: policy1,
    imgBg: policyBg1,
  },
  {
    id: 'leisure',
    title: `打造休閒天堂！<br/>推廣寵物休閒與娛樂場所`,
    list:['建立寵物公園：每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園', 
    '推廣寵物友善商家：鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫', 
    '舉辦寵物活動和工作坊：與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等'],
    img: policy2,
    imgBg: policyBg2
  },
  {
    id: 'educate',
    title: `讓愛更專業！<br/>推廣寵物飼養教育`,
    list:['建立寵物飼養教育中心：每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心',
     '推廣寵物飼養課程：與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益', 
     '製作教育資料：出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識'],
    img: policy3,
    imgBg: policyBg3
  },
  {
    id: 'impression',
    title: `反對外貌歧視！<br/>破除寵物刻板印象`,
    list:['建立狗狗友善宣導機制：每年撥款新台幣 5 千萬元，在流浪狗之家及動物醫院利用網站及宣傳物，建立正確的知識體系，宣導並破除對狗狗長相的刻板印象。',
     '舉辦黑狗選美大會： 每年撥款新台幣 2 億元，透過選美大賽破除黑狗的傳統印象，提升對黑狗的重視度。', 
     '組織人道救援志工： 培養志工團隊協助流浪狗轉換形象，出版宣導手冊和影片宣導流浪狗等相關知識，輔導流浪狗重新適應與人類生活的模式，並協助接洽寵物國際領養系統。'],
    img: policy4,
    imgBg: policyBg4
  }
];

const StyledSwiper = styled(Swiper)`
  &.mySwiper {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  position: relative;
`
const Navigation = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  padding: 5px 0;
  border: 1px solid #787878;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;
  z-index: 3;
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  align-items:center;
  color: #787878;
  font-size: 14px;
  letter-spacing: .1em;
  .prev-arrow, .next-arrow {
    width: 20px;
    height: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    &:hover {
      .iconPath {
          stroke: #3670C7;
      }
    }
  }
`
function Policy() {
  const sliderRef = useRef(null);
  const [page, setPage] = useState(1)
  const [searchParams] = useSearchParams();
  const [query] = useState(
    searchParams.get("query")
  );
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slideNext();
  }, []);


  useEffect(() => {
    
    const swiperInstance = sliderRef?.current.swiper;
    console.log(swiperInstance)
    if (swiperInstance) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      swiperInstance.slideTo(query,500)
    }

    return () => {
      if (swiperInstance) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        swiperInstance.slideTo(query,500)
      }
    };
  }, [query]);
  return (
    <StyledSwiper
    ref={sliderRef}
    direction={'vertical'}
    mousewheel={{
      thresholdTime: 1000,
    }}
    modules={[Mousewheel]}
    className="mySwiper"
    onSlideChange={() => setPage(sliderRef.current?.swiper?.activeIndex + 1)}
      >
      { policyList.map((item:IPolicyItem, index)=> (
        <SwiperSlide key={item.id}>
          <SectonPage  item={item} index={index}></SectonPage>
        </SwiperSlide>
      ))}
      <Navigation>
        <div className="prev-arrow"  onClick={handlePrev}>
          <ArrowTop/>
        </div>
          <div>{ page }/{policyList.length}</div>
        <div className="next-arrow" onClick={handleNext}>
          <ArrowBottom/>  
        </div>
      </Navigation>
    </StyledSwiper>

  )
}

export default Policy