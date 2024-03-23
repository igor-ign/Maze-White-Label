import { MazeSelectProps } from "./interfaces";

export function MazeSelect({ selectLabel, options }: MazeSelectProps) {
    return <label className="maze-select-container">
        {selectLabel}
        <select className="maze-select-input">
            {options.map(option => {
                return <option value={option.value}>{option.label}</option>
            })}
        </select>
    </label>
}