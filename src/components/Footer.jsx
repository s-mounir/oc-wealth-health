import styled from 'styled-components';

const FooterDiv = styled.footer`
display: flex;
font-family: "Montserrat", sans-serif;
align-items: center;
justify-content: center;
border-top-style: solid;
border-top-color: #5a6f07;
margin-top: 50px;
`

function Footer() {
    return (
        <FooterDiv className="footer">
      <p className="footer-text">Copyright 2024 HRnet</p>
    </FooterDiv>);
}
export default Footer