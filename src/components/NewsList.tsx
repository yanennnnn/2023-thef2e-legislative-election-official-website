import styled from "styled-components";
import NewsItem from "@/components/NewsItem"
interface IProps {
  list: Iitem[];
  isHome: boolean;
}

interface Iitem {
  id: number;
  title: string;
  img: string;
  content: string,
  date: string
}

const StyledSList = styled.div`
 margin-top: -24px;
 >div{
  &:last-child {
    border-color: transparent;
   }
 }

`

function newsList(props: IProps) {
  const { list, isHome = false } = props;
  return (
    <StyledSList>{list.map((item: Iitem)=> (
      <NewsItem item={item} isHome={ isHome } key={item.id}></NewsItem>
    ))}</StyledSList>
  );
}

export default newsList;