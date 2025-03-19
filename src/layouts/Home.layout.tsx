import { ReactNode } from 'react';
// import Header from '../components/header';
// import Footer from '../components/footer';

interface HomeLayoutProps {
    children: ReactNode;
}
export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
        </>
    );
}