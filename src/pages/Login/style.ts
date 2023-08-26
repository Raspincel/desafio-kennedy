import styled from 'styled-components'
import backgroundImage from '../../assets/images/software_login_page.jpg'

export const LoginArea = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: min(5vw, 30px);
    margin-top: min(10vh, 40px);
`  

export const BackgroundImage = styled.div`
    background: url(${backgroundImage}) center/cover no-repeat;;
`

export const LoginWrapper = styled.span`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: min(25vh, 150px);
    width: min(500px, 100%);
`

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh; 
    display: grid;
    grid-template-columns: 60% 40%;
    

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
        ${BackgroundImage} {
            order: 1;
            min-height: 100px;
            -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
            mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));

        }

        ${LoginArea} {
            order: 2;
            margin-top: -20px;
        }

        ${LoginWrapper} {
            gap: min(15vh, 50px);
        }
    }
`


export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: min(25px, 5vh);
    width: 100%;

    @media (min-width: 751px) {
        button {
            align-self: flex-end;
        }
    }
`