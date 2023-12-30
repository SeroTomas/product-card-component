interface Props {
    description: string
}

const ProductDescription = ({ description }: Props) => {
    return (
        <p className="font-montserrat text-n-grayishBlue text-sm desk:leading-6 desk:text-[16px]">{description}</p>
    )
}
export default ProductDescription