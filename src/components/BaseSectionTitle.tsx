import styled from "styled-components";

interface IProps {
  children: React.ReactNode | string;
}

const StyledSectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  position: relative;
  z-index: 1;
  margin-bottom: 24px;
`;

function SectionTitle(props: IProps) {
  const { children } = props;
  return (
    <StyledSectionTitle>{children}</StyledSectionTitle>
  );
}

export default SectionTitle;