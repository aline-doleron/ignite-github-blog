import styled from "styled-components";
import background from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

    img {
        margin-top: 4rem;
        margin-bottom: 8.4rem;
    }
`