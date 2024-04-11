import { MazeSelectProps } from "./interfaces";
import './style.scss'

export function MazeSelect({ selectLabel, options, placeholder, disabled, onChange, value }: MazeSelectProps) {
    return <label className="maze-select-container">
        {selectLabel}
        <select className="maze-select-input" onChange={({ target }) => onChange(target.value)} disabled={disabled} value={value}>
            <option value={""} disabled selected>{placeholder}</option>
            {options.map(option => {
                return <option value={option.value}>{option.label}</option>
            })}
        </select>
    </label>
}