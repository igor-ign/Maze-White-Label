import { SelectData } from "../../../interfaces"

export function getOptionsFormatted(options: string[]): SelectData[] {
    return options.map(option => {
        return {
            value: option,
            label: option
        }
    })
}