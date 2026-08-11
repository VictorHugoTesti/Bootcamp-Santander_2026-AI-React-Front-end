
interface Props {
    year: number
}

export default function Copyright({year}: Props) {

    return (
        <p>&copy; {year}</p>
    )
}