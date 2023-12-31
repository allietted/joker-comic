import { ReactNode } from "react";
import Footer from './Footer';

interface AppLayoutProps {
    children:ReactNode;
}


const AppLayout=({children}: AppLayoutProps) => {
    return(
        <>

        {children}
        <Footer/>
        </>
    )
}

export default AppLayout;