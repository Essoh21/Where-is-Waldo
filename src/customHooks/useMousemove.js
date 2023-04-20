import { useEffect } from "react";
import { useState } from "react"

const useMousemove = () => {
    const [position, setPosition] = useState({ x: null, y: null });
    useEffect(() => {
        document.addEventListener("mousemove", handleMousemove);
        return () => document.removeEventListener("mousemove", handleMousemove);

    }, [])

    const handleMousemove = (e) => {
        const { clientX: x, clientY: y } = e;
        setPosition({ x, y })
    }

    return position;
}

export default useMousemove;
