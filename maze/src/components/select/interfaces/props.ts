interface MazeSelectOptions {
    value: string;
    label: string;
}

export interface MazeSelectProps {
    selectLabel: string;
    options: MazeSelectOptions[];
    placeholder: string;
    disabled: boolean;
    onChange: (value: string) => void;
    value: string;
}