import { useEffect, useState } from "react";

export function useMobileOrTabletCheck() {
    const [width, setWidth] = useState(window.innerWidth);

    const tabletMaxWidth = 1100

    function handleResize() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return width <= tabletMaxWidth;
}