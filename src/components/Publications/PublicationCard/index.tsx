import { useNavigate } from "react-router-dom";
import { PostBody } from "./styles";
import { formatDistance } from 'date-fns'
import localeBr from 'date-fns/locale/pt-BR';


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

    const date = formatDistance(issue.updated_at, new Date(), { addSuffix: true, locale: localeBr })


    function handleOnClick() {
        navigate(`/post/${issue.number}`)
    }
    return (
        <PostBody onClick={handleOnClick}>
            <header>
                <h1>{issue.title}</h1>
                <span>{date[0].toUpperCase() + date.substring(1)}</span>
            </header>

            <p>{issue.body}</p>
        </PostBody>
    )

}


