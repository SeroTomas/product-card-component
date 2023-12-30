interface Props {
    price: string
}

const ProductPrice = ({ price }: Props) => {
    return (
        <span className="font-fraunces text-p-darkCyan text-4xl">${price}</span>
    )
}
export default ProductPrice