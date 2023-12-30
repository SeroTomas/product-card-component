interface Props {
    previousPrice?: string
}

const ProductPrevPrice = ({ previousPrice }: Props) => {
    return (
        <span className="font-montserrat text-xs text-n-grayishBlue line-through">${previousPrice}</span>
    )
}
export default ProductPrevPrice