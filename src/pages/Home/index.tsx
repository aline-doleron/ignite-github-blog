import { useContext } from "react";
import { Profile } from "../../components/Profile";
import { Publications } from "../../components/Publications";
import { Main } from "./styles";
import { AccountContext } from "../../contexts/AccountContext";

export function Home() {
    const { userData } = useContext(AccountContext);

    const { name, avatarUrl, bio, login, followers } = userData ?? {};

    const data = {
        picture: avatarUrl ?? '',
        title: name ?? '',
        description: bio ?? '',
        login: login ?? '',
        followers: followers ?? 0,
    }

    return (
        <Main>
            <Profile data={data} />
            <Publications />
        </Main>
    )
}