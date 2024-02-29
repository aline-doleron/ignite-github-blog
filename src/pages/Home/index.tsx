import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { Publications } from "../../components/Publications";
import { Footer, HomeContainer, Main } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Header />
            <Main>
                <Profile />
                <Publications />
            </Main>
            <Footer />

        </HomeContainer>
    )
}