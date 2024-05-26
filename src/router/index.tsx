import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layout/defaultLayout";
import { Home } from "../pages/home";

export function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}