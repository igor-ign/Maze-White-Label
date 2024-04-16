export function getAppRoutePaths(id?: number) {
    if (id) return {
        HOME: '/',
        SEARCH_VEHICLES: "/search",
        VEHICLE_DETAILS: `/vehicle/${id}`
    }

    return {
        HOME: '/',
        SEARCH_VEHICLES: "/search"
    }
}