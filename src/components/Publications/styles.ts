import styled from "styled-components";

export const PublicationsContainer = styled.section`
    width: 54rem;
    max-width: 100%;
`
export const PublicationsHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: .75rem;

    h1 {
        color: ${(props) => props.theme['base-subtitle']};
        font-weight: bold;
        font-size: 1.25rem;
        line-height: 160%;
    }

    span {
        color: ${(props) => props.theme['base-span']};
        font-size: .875rem;
        line-height: 160%;
    }

`

export const PublicationsForm = styled.form`
    input {
        width: 100%;
        background-color: ${(props) => props.theme['base-input']};
        border: 1px ${(props) => props.theme['base-border']} solid;
        border-radius: 6px;
        color: ${(props) => props.theme['base-text']};
        padding: 0.75rem 1rem;

        &::placeholder {
            color: ${(props) => props.theme['base-label']};
        }
    }
`

export const PostsContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;       
    margin-top: 1rem;

    header {
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: flex-start;
        justify-content: space-between;
    }

    h1 {
        color: ${(props) => props.theme['base-title']};
        font-weight: bold;
        font-size: 1.25rem;
        line-height: 160%;
        max-width: 16rem;
    }

    span {
        color: ${(props) => props.theme['base-span']};
        font-size:0.875rem;
        line-height: 160%;
    }
`
