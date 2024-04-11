import { IMAGES } from "../assets/images/index.js"

export default function changePageFavicon() {
    const { FAVICON } = IMAGES
    const favicon = document.getElementById('favicon');

    if (favicon) {
        favicon.href = FAVICON
    }
}