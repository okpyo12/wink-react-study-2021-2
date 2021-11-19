import styled from "styled-components";

const Header = () => {
    const Header = styled.div`
    background: #f7df28;
    text-align: center;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
`
    return (
  <Header>
      카카오톡 내용 분석기
  </Header>
    )
    
};

export default Header;