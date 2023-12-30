interface Props {
    image: string
}

const ProductImage = ({ image }: Props) => {
    return (
        <img className="rounded-t-lg w-[340px] desk:rounded-l-lg desk:rounded-r-none " src={image} />
    )
}
export default ProductImage