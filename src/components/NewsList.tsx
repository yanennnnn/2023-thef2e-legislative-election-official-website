import styled from "styled-components";
import Row from "@/components/Row"
interface IProps {
  list: Array;
}

const StyledSList = styled.div`
  
`;

const StyledRow = styled(Row)`
  margin-right: -15px;
  margin-left: -15px;
  >.col {
    padding-right: 15px;
    padding-left: 15px;
    &.img {
      flex: 0 0 auto;
      width: 22%;
    }
    &.content {
      width: 78%;
    }
  }
`
function newsList(props: IProps) {
  const { list } = props;
  return (
    <StyledSList>{list.map((item)=> (
      <div key={item.id}>
        <StyledRow>
          <div className="col img">
            <img src={item.img} alt="" width="100" height="100"/>
          </div>
          <div className="col content">
            <div className="date">{item.date}</div>
            <h5 className="title">{item.title}</h5>
            <div className="contentText">{item.content}</div>
          </div>
        </StyledRow>
      </div>
    ))}</StyledSList>
  );
}

export default newsList;