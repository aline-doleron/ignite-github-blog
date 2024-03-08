import { useNavigate } from "react-router-dom";
import { PublicationContainer, PublicationData, PublicationInfo, PublicationNavigation, PublicationTitle } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { formatDistance } from 'date-fns'
import localeBr from 'date-fns/locale/pt-BR';

export interface PublicationType {
    title: string,
    description: string,
    htmlUrl: string,
    login: string,
    updatedAt: string,
    comments: number
}

export function Publication({ data }: { data: PublicationType }) {
    const { title, login, updatedAt, htmlUrl, comments } = data;
    const navigate = useNavigate();

    function handleBackClick() {
        navigate(`/`);
    }

    const date = formatDistance(updatedAt, new Date(), { addSuffix: true, locale: localeBr })

    return (
        <PublicationContainer>
            <PublicationNavigation>
                <span onClick={handleBackClick}><FontAwesomeIcon icon={faChevronLeft} />Voltar</span>
                <a href={htmlUrl} target="_blank">Ver no github<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </PublicationNavigation>

            <PublicationInfo>
                <PublicationTitle>
                    <span>{title}</span>
                </PublicationTitle>

                <PublicationData>
                    <span><FontAwesomeIcon icon={faGithub} />{login}</span>
                    <span><FontAwesomeIcon icon={faCalendarDay} />{date}</span>
                    <span><FontAwesomeIcon icon={faComment} />{comments} seguidores</span>
                </PublicationData>
            </PublicationInfo>
        </PublicationContainer >
    )
}