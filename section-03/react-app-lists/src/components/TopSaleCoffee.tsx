

export interface Props {
    name: string
    description: string
}

export function TopSaleCoffee({name, description}: Props) {

    return (
        <div className="top-sale-item">
            <p>{name} - {description}</p>
        </div>
    )
}