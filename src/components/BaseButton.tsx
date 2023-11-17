import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

// 定義主題屬性的型別
interface Theme {
  bg: string,
  color: string,
  border: string,
  radius: string,
  hoverColor: string,
  hoverBg: string,
  hoverBorder: string,
}

// 定義所有主題的型別
interface Themes {
  blue: Theme;
  orange: Theme;
  white: Theme;
  blueBorder: Theme;
  orangeBorder: Theme;
  blueText: Theme;
}
// 定義按鈕組件的屬性，包含 React 提供的 HTML 按鈕屬性以及主題屬性
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  theme?: keyof Themes; // 使用 keyof 確保 theme 只能是 Themes 中的一個主題;
  buttonType?: string | undefined;
  linkTo?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

// 使用 styled-components 創建按鈕組件，接受主題屬性
const StyledButton = styled(Link)<{ theme?: Theme, to?: string }>`
  background: ${props => props.theme?.bg || "#3670C7"};
  border-radius: 50px;
  border: none;
  color: ${props => props.theme?.color || "#ffffff"};
  border: 1px solid ${props => props.theme?.border || 'transparent'};
  box-sizing: border-box;
  padding: 12px 40px;
  font-size: 16px;
  cursor: pointer;
  transition: .2s;
  display: inline-block;
  &:hover {
    color: ${props => props.theme?.hoverColor || "#ffffff"};
    background: ${props => props.theme?.hoverBg || "#222222"};
    border: 1px solid ${props => props.theme?.hoverBorder || 'transparent'};
  }
`;


// 定義不同主題的屬性
const themes: { [key: string]: Theme } = {
  blue: {
    bg: "#3670C7",
    color: "#ffffff",
    border: 'transparent',
    radius: '50px',
    hoverColor: '#ffffff',
    hoverBg: '#222222',
    hoverBorder: 'transparent',
  },
  orange: {
    bg: '#EF6A23',
    color: "#ffffff",
    border: 'transparent',
    radius: '50px',
    hoverColor: '#ffffff',
    hoverBg: '#222222',
    hoverBorder: 'transparent',
  },
  white: {
    bg: '#ffffff',
    color: "#3670C7",
    border: 'transparent',
    radius: '50px',
    hoverColor: '#ffffff',
    hoverBg: '#3670C7',
    hoverBorder: 'transparent',
  },
  blueBorder: {
    bg: "#ffffff",
    color: "#3670C7",
    border: '#3670C7',
    radius: '50px',
    hoverColor: '#222222',
    hoverBg: '#ffffff',
    hoverBorder: '#222222',
  },
  orangeBorder: {
    bg: "#ffffff",
    color: "#EF6A23",
    border: '#EF6A23',
    radius: '50px',
    hoverColor: '#222222',
    hoverBg: '#ffffff',
    hoverBorder: '#222222',
  },
  blueText: {
    bg: "transparent",
    color: "#3670C7",
    border: 'transparent',
    radius: '0',
    hoverColor: '#222222',
    hoverBg: 'transparent',
    hoverBorder: 'transparent',
  }
};


// 創建 BaseButton 組件，接受主題屬性並使用對應的主題風格
function BaseButton(props: IProps) {
  const { children, theme = 'primary', buttonType, linkTo, ...rest } = props;
  return buttonType === 'link' ? (
    <StyledButton className="baseButton" theme={themes[theme]} to={linkTo!} {...rest as LinkProps}>
      {children}
    </StyledButton>
  ) : (
    <StyledButton className="baseButton" as="button" theme={themes[theme]} {...rest}>
      {children}
    </StyledButton>
  );
}

export default BaseButton;
