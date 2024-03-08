import { useParams } from "react-router-dom"
import { Main } from "../Home/styles";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { Publication, PublicationType } from "../../components/Publications/Publication";
import { PublicationBody } from "./styles";
import ReactMarkdown from "react-markdown";

export function ViewPost() {
    const [postData, setPostData] = useState<PublicationType>();
    const params = useParams();

    const { issueNumber } = params;

    async function getIssue(issueNumber: string) {
        const response = await api.get(`/repos/aline-doleron/ignite-github-blog/issues/${issueNumber}`);

        const { title, body, user, updated_at, html_url, comments } = response.data;

        const data = {
            title,
            description: body,
            login: user.login,
            htmlUrl: html_url,
            updatedAt: updated_at,
            comments,
        };

        setPostData(data);
    }

    useEffect(() => {
        getIssue(issueNumber as string);
    }, [issueNumber])

    if (!postData) {
        return "...loading..."
    } else {
        return (
            <Main>
                <Publication data={postData} />

                <PublicationBody>
                    <ReactMarkdown children={postData.description} />
                </PublicationBody>

            </Main>
        )
    }


}


