
interface Props {
    name: string
}

const ProductName = ({ name }: Props) => {
    return (
        <h2 className="font-fraunces text-3xl desk:text-4xl">{name}</h2>
    )
}
export default ProductName