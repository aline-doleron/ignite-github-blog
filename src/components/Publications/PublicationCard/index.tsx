import { useNavigate } from "react-router-dom";
import { PostBody } from "./styles";


interface IssueType {
    body: string;
    comments: number;
    number: number;
    title: string;
    updated_at: string;
    user: string;
}



export function PublicationCard({ issue }: { issue: IssueType }) {
    const navigate = useNavigate();

    function handleOnClick() {
        navigate(`/post/${issue.number}`)
    }
    return (
        <PostBody onClick={handleOnClick}>
            <header>
                <h1>{issue.title}</h1>
                <span>{issue.updated_at}</span>
            </header>

            <p>{issue.body}</p>
        </PostBody>
    )

}


