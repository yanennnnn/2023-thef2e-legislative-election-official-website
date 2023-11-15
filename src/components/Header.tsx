import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "@/assets/logo.svg"
import { useRef, useEffect } from 'react';
const HeaderContainer = styled.nav `
  height: 102px;
  position: fixed;
  width: 100vw;
  max-width: 100%;
  padding: 0 40px 0 40px;
  z-index: 999;
  transition: .3s;
  &.bg-white {
    background-color: rgba(255,255,255,0.9)
  }
`
const HeaderInside = styled.div`
  display: flex;
  align-items: center;
`
const StyledLink = styled(NavLink)`
  color: #3670C7;
  margin-left: 32px;
  padding: 39px 0 39px 0;
  font-weight:500;
`;
const StyledLogo = styled.img`
  height: 51px;
`
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

function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
      const heightTop = headerRef.current;
      if(window.scrollY > 0 && heightTop) {
        heightTop!.classList.add("bg-white");
      } else {
        heightTop!.classList.remove("bg-white");
      }
    });
  },[])
  return (
    <>
    <HeaderContainer className="header" ref={headerRef}>
      <HeaderInside>
        <NavLink
          to="/"
          className={({ isActive }) => 
            [
              'border p-3 hover:bg-indigo-600 duration-500',
              isActive ? 'router-link-active' : null
            ].join(' ')
          }
        >
          <StyledLogo src={logo} alt="logo" />
        </NavLink>
        {routerLink.map((item) => (
          <StyledLink key={item.title} to={item.path}>
            {item.title}
          </StyledLink>
        ))}
      </HeaderInside>
    </HeaderContainer>
     
    </>
  )
}

export default Header