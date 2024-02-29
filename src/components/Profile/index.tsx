import { useContext } from "react";
import {
    ProfileContainer,
    ProfileData,
    ProfileDescription,
    ProfileInfo,
    ProfilePicture,
    ProfileTitle
} from "./styles";
import { AccountContext } from "../../contexts/AccountContext";

export function Profile() {
    const { userData } = useContext(AccountContext);

    const { name, avatarUrl, bio, login, followers } = userData ?? {};


    return (
        <ProfileContainer>
            <ProfilePicture src={avatarUrl} />
            < ProfileInfo >
                <ProfileTitle >
                    <span>{name}</span>
                    <a href="#">github</a>
                </ProfileTitle>
                <ProfileDescription>{bio}</ProfileDescription>
                <ProfileData>
                    <span>{login}</span>
                    <span>Rocketseat</span>
                    <span>{followers} seguidores</span>
                </ProfileData>
            </ProfileInfo>
        </ProfileContainer >
    )
}