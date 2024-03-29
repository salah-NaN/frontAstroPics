import { useRef, useState, useEffect} from "react"



export default function DropdownNavBar({ func: handleLogout }) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null);

    // useEffects
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    return (
        <div ref={dropdownRef}>
            <button
                className="relative"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img className="size-6" src="/button.svg" ></img>

                <ul className={` absolute top-8 -right-3 w-48 ${isOpen ? 'visible' : 'hidden'} shadow-lg rounded-lg bg-[#2d2e34] backdrop-filter backdrop-blur-lg bg-opacity-70 hover:rounded-lg`}>
                    <a className=" flex justify-center items-center pl-1 pr-1.5 py-3.5 w-full transition duration-200 text-[#ea499d] hover:bg-[#34343c] " 
                    href="/MyProfile" >
                    <img  className="inline mr-2 " src="/profile-circle.svg" />
                    My profile</a>
                    <a className={` text-red-500 flex justify-center items-center pl-1 pr-1.5 py-3.5 w-full transition duration-200 hover:bg-[#34343c] `}
                    href="/" >
                    <img  className="inline mr-2 " src="/log-out.svg" />
                    Sign out</a>
                </ul>
            </button>

        </div>
    )
}