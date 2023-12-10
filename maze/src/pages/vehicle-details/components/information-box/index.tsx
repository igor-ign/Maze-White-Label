import './style.scss'

export function InformationBox({ title, content }: { title: string; content: string | number;}) {
    return <li className="information-box-container">
            <h3 className="box-title">{title}</h3>
            <span className="box-content">{content}</span>
    </li>
}