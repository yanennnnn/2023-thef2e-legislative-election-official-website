import styled from "styled-components";
import Row from "@/components/Row"

interface Iitem {
  id: number;
  title: string;
  img: string;
  img2?: string;
  content: string,
  date: string
}

const StyledSItem = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #222222;
  .date {
    font-size: 24px;
    color: #3670C7;
    font-weight: 700;
  }
  .title {
    margin-bottom: 8px;
  }
  .contentText {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .img {
    display: flex;
    align-items: center;
    img {
      width: auto;
      &.isHome {
        width: 100px;
        height: 100px
      }
    }
    
  }
`

function NewsItem({ item, isHome = false } : {item:Iitem, isHome:boolean}) {
  return (
    <StyledSItem key={item.id}>
      <Row className="newsList">
        <div className="col img">
          <img src={isHome ? item.img : item.img2 } alt=""/>
        </div>
        <div className="col content">
          <div className="date">{item.date}</div>
          <h5 className="title">{item.title}</h5>
          <div className="contentText">{item.content}</div>
        </div>
      </Row>
    </StyledSItem>
  )
}

export default NewsItem