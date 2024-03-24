'use client'
import Script from "@/assets/script";

const Sidebar = (props) => {
    const { widthSize } = Script()
    return (
        <>
            {
                widthSize <= 850 ?
                    props.sidebarShow ?
                        ''
                        :
                        <div className="background-sidebar"></div>
                    :
                    ''
            }
            <aside className={
                widthSize <= 850 ?
                    props.sidebarShow ?
                        "hide-sidebar" : "show-sidebar"
                    :
                    props.sidebarShow ?
                        "show-sidebar" : "hide-sidebar"
            }>
                <h3 className="nav-title">DashBUI</h3>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="fa-solid fa-tachometer-alt"></i>
                            Dashboard
                        </a>
                    </li>
                    <p className="nav-subtitle">Products</p>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fa-solid fa-boxes"></i>
                            Product
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fa-solid fa-cubes"></i>
                            Stock
                        </a>
                    </li>
                    <p className="nav-subtitle">Users</p>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fa-solid fa-users"></i>
                            Users
                        </a>
                    </li>
                    {
                        widthSize <= 850 ?
                            <li className="nav-item">
                                <a href="#" className="nav-link" onClick={props.onClickSidebarShow}>
                                    <i className="fa-solid fa-times"></i>
                                    Close
                                </a>
                            </li>
                            :
                            ''
                    }
                </ul>
            </aside>
        </>
    )
}

export default Sidebar;