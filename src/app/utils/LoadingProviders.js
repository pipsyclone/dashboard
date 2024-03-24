'use client'
import { useEffect, useState } from "react";
import Loading from "../components/loading";

const LoadingProviders = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [])

    return (isLoading ? <Loading /> : children)
}

export default LoadingProviders;