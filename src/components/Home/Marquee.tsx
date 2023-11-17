import styled, { keyframes }from 'styled-components'
import marquee1 from '@/assets/marquee1.png'
import marquee2 from '@/assets/marquee2.png'
import marquee3 from '@/assets/marquee3.png'
import marquee4 from '@/assets/marquee4.png'
import marquee5 from '@/assets/marquee5.png'
import marquee6 from '@/assets/marquee6.png'
import marquee7 from '@/assets/marquee7.png'
import marquee8 from '@/assets/marquee8.png'
import marquee9 from '@/assets/marquee9.png'
import marquee10 from '@/assets/marquee10.png'

const scroll = keyframes`
0% {
  transform: translate(0)
}

100% {
  transform: translate(calc(-100% - var(--gap)))
}
`;

const StyledMarquee = styled.div`
    --gap: 1.3rem;
    width: 100%;
    background: linear-gradient(to bottom, #fff 50%, #D9E8FF 50%);
    display: flex;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    gap: var(--gap);
    .marqueeList {
      flex-shrink: 0;
      display: flex;
      justify-content: space-around;
      min-width: 100%;
      gap: var(--gap);
      animation: ${scroll} 60s linear infinite;
      // &:hover {
      //   animation-play-state: paused;
      // }
    }
    .marqueeItem {
      img {
        padding: 0.3rem 0.6rem;
        transition: all 15s ease-in-out;
      }
      // &:hover {
      //   animation-play-state: paused;
      // }
    }
`;
function Marquee () {
  return (
    <StyledMarquee>
      <ul className='marqueeList'>
        <li className='marqueeItem'>
          <img src={marquee1} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee2} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee3} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee4} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee5} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee6} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee7} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee8} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee9} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee10} alt="" />
        </li>
      </ul>
      <ul className='marqueeList'>
        <li className='marqueeItem'>
          <img src={marquee1} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee2} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee3} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee4} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee5} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee6} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee7} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee8} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee9} alt="" />
        </li>
        <li className='marqueeItem'>
          <img src={marquee10} alt="" />
        </li>
      </ul>
    </StyledMarquee>
  )
}

export default Marquee