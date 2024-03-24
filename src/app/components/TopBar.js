'use client'
import Image from "next/image";
import imagUser from "./../../assets/image/user.png"
import Script from "@/assets/script";

const TopBar = (props) => {
    return (
        <nav className="topbar">
            <button type="button" className="btn-sidebar-toggle cursor-pointer" onClick={props.onClickSidebarShow}>
                <i className="fa-solid fa-bars"></i>
            </button>

            <ul className="topbar-list">
                <li className="topbar-item">
                    <a href="/settings" className="topbar-link">
                        <div className="topbar-profile">
                            <Image src={imagUser} width={25} alt="User Image" />
                            <span>Hi, {props.username}</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default TopBar;