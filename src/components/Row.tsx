import styled from "styled-components";

interface IProps {
  children: React.ReactNode | string;
}

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  > .col {
    position: relative;
    width: 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1 0 0%;
  }
`;

function Row(props: IProps) {
  const { children } = props;
  return (
    <StyledRow>{ children }</StyledRow>
  );
}

export default Row;