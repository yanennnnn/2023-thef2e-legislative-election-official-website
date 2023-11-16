import styled from "styled-components";

interface IProps {
  children: React.ReactNode | string;
  className?: string
}

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -31px;
  margin-left: -31px;
  > .col {
    position: relative;
    width: 100%;
    max-width: 100%;
    padding-right: 31px;
    padding-left: 31px;
    flex: 1 0 0%;
  }
  &.newsList {
    margin-right: -15px;
    margin-left: -15px;
    >.col {
      padding-right: 15px;
      padding-left: 15px;
      &.img {
        flex: 0 0 auto;
        width: 21%;
      }
      &.content {
        width: 79%;
      }
    }
  }
`;

function Row(props: IProps) {
  const { children, className } = props;
  return (
    <StyledRow className={className}>{ children }</StyledRow>
  );
}

export default Row;