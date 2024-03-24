'use client'
import './../../assets/globals.css';
import './../../assets/dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Inter } from "next/font/google"

import Script from '@/assets/script';

import Sidebar from '../components/SideBar';
import TopBar from '../components/TopBar';
import LoadingProviders from '../utils/LoadingProviders';

const inter = Inter({ subsets: ['latin'] })

export default function DashboardLayout({ children }) {
  const { widthSize, showHideSidebar, setShowHideSidebar } = Script()
  return (
    <html lang="en">
      {/* <LoadingProviders> */}
      <body className={inter.className}>
        <div className="row">
          <Sidebar sidebarShow={showHideSidebar} onClickSidebarShow={() => setShowHideSidebar(!showHideSidebar)} />

          <div className={
            widthSize <= 850 ?
              'content'
              :
              showHideSidebar ?
                "content"
                :
                "content-full"
          }>
            <TopBar onClickSidebarShow={() => setShowHideSidebar(!showHideSidebar)} username="Apip Rahman S" />

            {/* Content Here */}
            {children}
          </div>
        </div>
      </body>
      {/* </LoadingProviders> */}
    </html>
  );
}
