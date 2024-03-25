'use client'
import Image from "next/image";
import imagUser from "./../../assets/image/user.png"
import Link from "next/link";

const TopBar = (props) => {
    return (
        <nav className="topbar">
            <button type="button" className="btn-sidebar-toggle cursor-pointer" onClick={props.onClickSidebarShow}>
                <i className="fa-solid fa-bars"></i>
            </button>

            <ul className="topbar-list">
                <li className="topbar-item">
                    <Link href={'/settings'} className="topbar-link topbar-profile">
                        <Image src={imagUser} width={25} alt="User Image" />
                        Hi, {props.username}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default TopBar;