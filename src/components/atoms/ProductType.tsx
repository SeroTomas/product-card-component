
interface Props {
    type: string
}

const ProductType = ({ type }: Props) => {
    return (
        <span className="uppercase font-montserrat tracking-[6px] text-xs text-n-grayishBlue">{type}</span>
    )
}
export default ProductType