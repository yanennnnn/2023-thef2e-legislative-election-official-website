import styled from "styled-components";
import BaseButton from "@/components/BaseButton"
import { Link } from "react-router-dom";

interface Iitem {
  title: string;
  path: string;
  img: string;
}

const StyledSItem = styled(Link)`
  height: 309px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-size: cover;
  border-radius: 20px;
  .content {
    position: relavtive;
    z-index: 2;
    text-align: center;
    .title {
      margin-bottom: 24px;
      line-height: 33px;
      font-size: 22px;
    }
  }
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #F98950;
    opacity: 0;
    border-radius: 20px;
    transition: .3s
  }
  &:hover {
    &:after {
      opacity: 0.7;
    }
    .baseButton {
      color: #222222;
      background: #fffff;
      border: 1px solid #222222;
    }
  }
`

function NewsItem({ item, index } : {item:Iitem, index:number }) {
  return (
    <StyledSItem 
      key={item.path} 
      to={`/policy?query=${index}`}
      style={{
      backgroundImage: `url(${item.img})`
    }}>
      <div className="content" >
        <h5 className="title" dangerouslySetInnerHTML={{__html: item.title}} />
        <BaseButton 
          theme="orangeBorder" 
          buttonType="link" 
          linkTo={`/policy?query=${index}`}
        >
            了解更多
        </BaseButton>
      </div>
    </StyledSItem>
  )
}

export default NewsItem