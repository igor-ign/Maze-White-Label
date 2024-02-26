import { useEffect, useState } from "react";

export function useMobileOrTabletCheck() {
    const [width, setWidth] = useState(window.innerWidth);

    const tabletMaxWidth = 1100

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return width <= tabletMaxWidth;
}