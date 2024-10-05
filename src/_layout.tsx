import React, { useEffect, useState } from 'react';
import SideBar from './components/SideBar.tsx';
import { Menu } from 'lucide-react';

type LayoutType = {
    children: React.ReactNode;
    theme: boolean;
};

const Layout = ({ children, theme }: LayoutType) => {
    const [path, setPath] = useState<string>('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const currentPath = window.location.pathname;
        setPath(currentPath);
    }, [window.location.pathname]);

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <main className="relative w-full min-h-screen">
            <div className="flex items-start">
                {/* Side Bar */}
                {/* Laptop view */}
                <div className="lg:w-[320px] hidden lg:block top-0 left-0 fixed scroll overflow-y-scroll h-screen">
                    <SideBar />
                </div>

                {/* Mobile view */}
                <div className="absolute top-0 right-0 left-0 z-50 dark:bg-dark-sidebar bg-sidebar_green h-16 flex lg:hidden items-center">
                    <div className={`flex ${isMenuOpen ? "w-[55%]":"w-[50%]"} transition_all justify-between pl-4 text-white`}>
                        <div onClick={openMenu} className="cursor-pointer">
                            <Menu />
                        </div>
                        <h1 className="text-xl">Rusti Here!</h1>
                    </div>
                    <div className="absolute top-12 right-0 left-0">
                    <div className={`${isMenuOpen ? "h-full ": "h-0 overflow-hidden "} transition-all ease-in-out duration-300`}>
                    <SideBar />
                    </div>
                    </div>
                </div>

                {/* Main content space */}
                <div className="xl:ml-[280px] lg:ml-[180px] w-full xl:w-[calc(100%-280px)] lg:w-[calc(100%-80px)] max-w-full min-h-screen dark:bg-dark-background dark:text-gray-400 p-4">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default Layout;
