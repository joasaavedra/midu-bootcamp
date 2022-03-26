export const Total = ({exs}) => {

    let totalExs = exs.reduce((acc, value) => (typeof value.exercises == "number" ? acc + value.exercises : acc), 0)

    return (
        <p>Number of exercises {totalExs}</p>
    )
}