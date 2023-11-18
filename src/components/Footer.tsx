import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledFooter = styled.footer`
  padding: 30px 40px;
  border-top: 1px solid  #B9B9B9;
  color: #595959;
  font-size:15px;
  height: 106px;
  .bottom {
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`
const StyledLink = styled(Link)`
  margin-left: 24px;
  font-size: 15px;
`;
const routerLink = [
  {
    title: '首頁',
    path: '/'
  },
  {
    title: '認識候選人',
    path: 'about'
  },
  {
    title: '最新活動',
    path: 'news'
  },
  {
    title: '政治議題',
    path: 'policy'
  },
  {
    title: '小額捐款',
    path: 'donate'
  },
]

function Footer() {

  
  return (
    <StyledFooter>
      <p>2023 鬥立翰 版權所有。</p>
      <div className="bottom">
        <p>辦公室地址｜毛孩區，毛茸茸大道99號，狗狗大厦99樓　Tel｜(02) 888-5678　Email｜dogoffice@doglihan.tw</p>
        <div>
          {routerLink.map((item) => (
            <StyledLink key={item.title} to={item.path}>
              {item.title}
            </StyledLink>
          ))}
        </div>
      </div>
     
    </StyledFooter>
  )
}

export default Footer