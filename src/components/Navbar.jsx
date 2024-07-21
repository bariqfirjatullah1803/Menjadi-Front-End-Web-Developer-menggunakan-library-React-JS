import {useState} from "react";

const Navbar = ({children}) => {
    return (
        <>
            <nav className={"container mx-auto py-14 flex flex-row justify-between items-center"}>
                {children}
            </nav>
        </>
    )
}

const NavTitle = ({children}) => {
    return <h1 className={"font-extrabold text-3xl flex-shrink-0"}>{children}</h1>
}

const Menu = ({children}) => {
    return (
        <div className={"w-full flex flex-row justify-end items-center gap-10"}>{children}</div>
    )
}


const DropdownMenu = ({ title, children }) => {
    const [active, setActive] = useState(false);

    const handleMouseEnter = () => {
        setActive(true);
    };

    const handleMouseLeave = () => {
        setActive(false);
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className="font-normal text-lg">{title}</span>
            {active && (
                <div className="absolute top-5 z-10 pt-6">
                    <ul className="bg-white shadow-md py-2 px-4 rounded-lg">
                        {children}
                    </ul>
                </div>
            )}
        </div>
    );
};

DropdownMenu.Item = ({ children }) => {
    return (
        <li className="font-normal text-lg inline-block whitespace-nowrap">
            <a href="#">{children}</a>
        </li>
    );
};



const MenuItem = ({
                      children
                  }) => {
    return (
        <a href={"#"} className={"font-normal text-lg"}>{children}</a>
    )
}

export {
    Navbar, NavTitle, Menu, MenuItem, DropdownMenu
}