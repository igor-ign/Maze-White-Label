export function getNumbersFromString(value: string): string {
    return value.replace(/\D/g, '');
}