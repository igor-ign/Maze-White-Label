export function getTransmissionTranslated(transmission: "AUTOMATIC" | "MANUAL") {
    return {
        AUTOMATIC: "Automatic",
        MANUAL: "Manual",
    }[transmission]
}