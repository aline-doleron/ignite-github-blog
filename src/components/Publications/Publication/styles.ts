import styled from "styled-components";

export const PublicationContainer = styled.section`
    display: flex;
    flex-direction: column;                                                                                                 
    width: 54rem;
    background-color: ${(props) => props.theme['base-profile']};    
    border-radius: 10px;
    padding: 2rem 2.5rem;
    top: -5.5rem;
    position: relative;
    max-width: 100%;
    gap: 2rem;
`

export const PublicationNavigation = styled.div`
    display: flex;
    color: ${(props) => props.theme['blue']};
    flex-direction: row;
    justify-content: space-between;

    span, a {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.75rem;
        line-height: 160%;
        text-decoration: none;
    }
    span {
        svg {
            padding-right: 0.5rem;
        }
    }

    a {
        svg {
            padding-left: 0.5rem;
        }
    }

    a:hover, a:visited {
        text-decoration: underline;
        color: ${(props) => props.theme['blue']};
    }
`

export const PublicationPicture = styled.img`
    height: 9.25rem;
    border-radius: 8px;
    width: 100%;
    max-width: 9.25rem;
    height: 9.25rem;
`
export const PublicationInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;


`
export const PublicationTitle = styled.div`
    color: ${(props) => props.theme['base-title']};
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 160%;
    display: flex;
    justify-content: space-between;


`

export const PublicationDescription = styled.span`
    line-height: 160%;
    font-size: 1.125rem;
`

export const PublicationData = styled.span`
    display: flex;
    gap: 1.5rem;
    padding-top: 0.5rem;

    svg {
        padding-right: 0.5rem;
    }
`