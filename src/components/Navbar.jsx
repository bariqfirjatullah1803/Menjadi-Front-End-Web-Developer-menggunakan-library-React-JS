import {Popover, PopoverButton, PopoverPanel} from "@headlessui/react";
import {useRef} from "react";

const Navbar = ({children}) => {
    return (
        <>
            <nav className={"container mx-auto py-14 flex flex-row justify-between items-center"}>
                {children}
            </nav>
        </>
    )
}

Navbar.Title = ({children}) => {
    return <h1 className={"font-extrabold text-3xl flex-shrink-0"}>{children}</h1>
}

Navbar.Menu = ({children}) => {
    return (
        <div className={"w-full flex flex-row justify-end items-center gap-10"}>{children}</div>
    )
}
Navbar.MenuItem = ({children}) => {
    return (
        <a href={"#"} className={"font-normal text-lg"}>{children}</a>
    )
}


const Dropdown = ({children, title}) => {
    const buttonNav = useRef(null);
    let timeout;

    const closePopOver = () => {
        buttonNav.current?.dispatchEvent(new KeyboardEvent("keydown",
            {
                key: "Escape",
                bubbles: true,
                cancelable: true,
            }
        ))
    }
    const onMouseEnter = (open, ref) => {
        clearTimeout(timeout)
        if (open) return
        return ref.current?.click()
    }
    const onMouseLeave = (open) => {
        if (!open) return
        timeout = setTimeout(() => closePopOver(), 200)
    }

    return <Popover className={'relative'}>
        {({open}) => {
            return (
                <>
                    <PopoverButton ref={buttonNav} onMouseEnter={() => onMouseEnter(open, buttonNav)}
                                   onMouseLeave={() => onMouseLeave(open)}
                                   className={"font-normal text-lg focus-visible:outline-none"}>{title}</PopoverButton>
                    {(open &&
                        <PopoverPanel anchor="bottom"
                                      className="flex flex-col flex-wrap !max-w-[50%] gap-x-4 gap-y-2 bg-white mt-5 py-5 px-10 rounded-md shadow-lg"
                                      onMouseEnter={() => onMouseEnter(open, buttonNav)}
                                      onMouseLeave={() => onMouseLeave(open)}>
                            {children}
                        </PopoverPanel>
                    )}
                </>
            )
        }}
    </Popover>
}

Dropdown.Item = ({children, link}) => {
    return <a href={link} className={"font-normal text-lg"}>{children}</a>
}

export {Navbar, Dropdown}