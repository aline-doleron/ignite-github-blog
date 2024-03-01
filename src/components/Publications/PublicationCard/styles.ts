import styled from "styled-components";

export const PostBody = styled.div`
    background-color: ${(props) => props.theme['base-post']};
    border-radius: 10px;
    border: 2px solid transparent;
    padding: 2rem;
    height: 16.25rem;
    width: 26rem;
    overflow: hidden;
    margin-top: 2rem;

    p {
        margin-top: 1.25rem;
        display: -webkit-box; 
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 4; 
        overflow: hidden; 
        text-overflow: ellipsis; 
    }

    &:hover {
        border: 2px solid  ${(props) => props.theme['base-label']};
        cursor: pointer;
    }
`
