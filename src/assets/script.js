import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Script = () => {
    // Show Hide Sidebar
    const [showHideSidebar, setShowHideSidebar] = useState(true)

    // Check window size
    const [widthSize, setWidthSize] = useState(1200)
    const [heightSize, setHeightSize] = useState(1200)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const realtimeSize = () => {
                setWidthSize(window.innerWidth)
                setHeightSize(window.innerHeight)
            }
            window.addEventListener('resize', realtimeSize)
            return () => {
                window.addEventListener('resize', realtimeSize)
            }
        }
    }, [])

    // Sweetalert 2
    // Alert
    const handleAlert = (icon, title, message) => {
        Swal.fire({
            title: title,
            text: message,
            icon: icon
        })
    }

    return {
        showHideSidebar, setShowHideSidebar,
        widthSize, heightSize,
        handleAlert
    }
}

export default Script;