import { Route, Routes } from "react-router";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { ViewPost } from "./pages/ViewPost";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/post/:issueNumber" element={<ViewPost />} />
            </Route>
        </Routes>
    )
}