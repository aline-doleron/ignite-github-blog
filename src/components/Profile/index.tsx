
import React from "react";
import {
    ProfileContainer,
    ProfileData,
    ProfileDescription,
    ProfileInfo,
    ProfilePicture,
    ProfileTitle,
    GithubLink
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

interface ProfileType {
    picture: string,
    title: string,
    description: string,
    login: string,
    followers: number,

}

export function Profile({ data }: { data: ProfileType }) {

    return (
        <ProfileContainer>
            <ProfilePicture src={data.picture} />
            <ProfileInfo>
                <ProfileTitle>
                    {data.title && <span>{data.title}</span>}
                    <GithubLink><a href="https://github.com/aline-doleron" target="_blank">GITHUB</a>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </GithubLink>

                </ProfileTitle>
                <ProfileDescription>{data.description}</ProfileDescription>
                <ProfileData>
                    <span><FontAwesomeIcon icon={faGithub} />{data.login}</span>
                    <span><FontAwesomeIcon icon={faBuilding} />Rocketseat</span>
                    <span><FontAwesomeIcon icon={faUserGroup} />{data.followers} seguidores</span>
                </ProfileData>
            </ProfileInfo>
        </ProfileContainer >
    )
}