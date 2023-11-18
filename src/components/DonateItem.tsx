import styled from "styled-components";
import BaseButton from "@/components/BaseButton"

interface Iitem {
  id: number;
  title: string,
  content: string,
  secondary: string;
  img: string;
}

const StyledDonate = styled.div`
  background: #ffffff;
  padding: 24px 0;
  border-radius: 20px;
  .content {
    text-align: center;
    .title {
      margin-top: 16px;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 16px;
    }
    .secondaryText {
      font-size: 15px;
      color: #787878;
      margin: 4px 0 16px 0;
      height: 22px;
    }
  }
`

function Donate({ item } : {item:Iitem}) {
  return (
    <StyledDonate>
      <div className="content">
        <img src={item.img} alt="" />
        <h5 className="title">{ item.title }</h5>
        <p className="text">{ item.content }</p>
        <p className="secondaryText">{ item.secondary }</p>
        <BaseButton 
          theme="orange" 
          onClick={() => alert('恭喜捐款~')}
        >
            我要捐款
        </BaseButton>
      </div>
    </StyledDonate>
  )
}

export default Donate