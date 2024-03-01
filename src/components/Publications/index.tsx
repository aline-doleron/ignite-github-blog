import { PostsContainer, PublicationsContainer, PublicationsForm, PublicationsHeader } from "./styles";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod';
import { useContext } from "react";
import { AccountContext } from "../../contexts/AccountContext";
import { PublicationCard } from "./PublicationCard";

const schema = z.object({
    query: z.string(),
});

type FormInputs = z.infer<typeof schema>

export function Publications() {
    const { issues, getIssues } = useContext(AccountContext);

    const {
        register,
        handleSubmit,
    } = useForm<FormInputs>({
        resolver: zodResolver(schema),
    });

    function handleSearchIssues(data: FormInputs) {
        getIssues(data.query)
    }

    return (
        <PublicationsContainer>
            <PublicationsHeader>
                <h1>Publicações</h1>
                <span>{issues.length} publicações</span>
            </PublicationsHeader>
            <PublicationsForm onSubmit={handleSubmit(handleSearchIssues)}>
                <input type="text" placeholder="Buscar conteúdo"  {...register('query')} />
            </PublicationsForm>

            <PostsContainer >
                {issues.map((issue) => {
                    return (
                        <PublicationCard key={issue.number} issue={issue} />
                    )
                })}
            </PostsContainer>
        </PublicationsContainer>
    )
}