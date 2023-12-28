import styled from 'styled-components'
import bgimg from './../assets/images/login-background.jpg';
import logo1 from './../assets/images/cta-logo-one.svg';
import logo2 from './../assets/images/cta-logo-two.png';

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src={logo1} alt=''/>
                    <SignUp>JUMP RIGHT IN!</SignUp>
                    <Description>
                        Get premium access to Raya and the 
                        Last Dragon for no additional cost with a 
                        Disney+ subscription! Hurry now, the prices 
                        are bound to rise soon!
                    </Description>
                    <CTALogoTwo src={logo2} alt=''/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>    
    )
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;

`

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${bgimg});
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`

const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover{
        background-color: #0483ee;
        cursor: pointer;
    }
`

const Description = styled.h4`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5em;
    letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`

export default Login;