import styled from "styled-components";


export const ProfileContainer = styled.section`
    display: flex;
    width: 54rem;
    background-color: ${(props) => props.theme['base-profile']};    
    border-radius: 10px;
    padding: 2rem 2.5rem;
    top: -5.5rem;
    position: relative;
    max-width: 100%;
    gap: 2rem;
`

export const ProfilePicture = styled.img`
    height: 9.25rem;
    border-radius: 8px;
    width: 100%;
    max-width: 9.25rem;
    height: 9.25rem;
`
export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;



`

export const GithubLink = styled.div`
    display: flex;
    font-size: 0.75rem;
    line-height: 160%;
    gap: 0.5rem;
    align-items: center;
    a, svg {
        color: ${(props) => props.theme['blue']};
        text-decoration: none;
    }


`

export const ProfileTitle = styled.div`
    color: ${(props) => props.theme['base-title']};
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 160%;
    display: flex;
    justify-content: space-between;


`

export const ProfileDescription = styled.span`
    line-height: 160%;
    font-size: 1.125rem;
`

export const ProfileData = styled.span`
    display: flex;
    gap: 1.5rem;

    svg {
        padding-right: 0.5rem;
    }
`