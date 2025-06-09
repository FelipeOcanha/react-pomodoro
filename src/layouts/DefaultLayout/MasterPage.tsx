import { Header } from "../../components/Header";
import {Outlet} from 'react-router-dom';
import { LayoutContainer } from "./styles";

export function MasterPage() {
    return (
        <LayoutContainer>
             <Header />
             <Outlet />
        </LayoutContainer>
    )
}