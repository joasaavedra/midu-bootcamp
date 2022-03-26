import { Part } from "./Part"

export const Content = ({parts = []}) => {

    return (
        <div>
            {parts.map(part => {
                return (
                    <Part key={part.name} part={part} />
                )
            })}
        </div>
    )
}