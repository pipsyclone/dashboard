'use client'
import Link from "next/link";

const Sidebar = (props) => {
    return (
        <>
            {
                props.sidebarShow ?
                    ''
                    :
                    <div className="background-sidebar"></div>
            }

            <aside className={props.sidebarShow ? 'sidebar-desktop' : 'sidebar-responsive'}>
                <h3 className="nav-title">DashBUI</h3>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link href="/" className="nav-link">
                            <i className="fa-solid fa-tachometer-alt"></i>
                            Dashboard
                        </Link>
                    </li>
                    <p className="nav-subtitle">Products</p>
                    <li className="nav-item">
                        <Link href="#" className="nav-link">
                            <i className="fa-solid fa-boxes"></i>
                            Product
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#" className="nav-link">
                            <i className="fa-solid fa-cubes"></i>
                            Stock
                        </Link>
                    </li>
                    <p className="nav-subtitle">Users</p>
                    <li className="nav-item">
                        <Link href="#" className="nav-link">
                            <i className="fa-solid fa-users"></i>
                            Users
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#" className="nav-link" onClick={props.onClickSidebarShow}>
                            <i className="fa-solid fa-times"></i>
                            Close
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Sidebar;