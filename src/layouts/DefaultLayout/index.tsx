import { Outlet } from "react-router";
import { Header } from "../../components/Header";
import { Footer, HomeContainer } from "./styles";


export function DefaultLayout() {
    return (
        <HomeContainer>
            <Header />
            <Outlet />
            <Footer />

        </HomeContainer>
    )
}