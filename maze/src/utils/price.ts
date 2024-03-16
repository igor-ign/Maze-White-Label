export function getVehiclePriceFormatted(price: number): string {
    if (!price) {
        return '--'
    }

    const usDollarFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return usDollarFormat.format(price)
}