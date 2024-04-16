export function getAppRoutePaths(id?: number) {
    return {
        HOME: '/',
        SEARCH_VEHICLES: "/search",
        VEHICLE_DETAILS: `/vehicle/${id || ':id'}`
    }
}