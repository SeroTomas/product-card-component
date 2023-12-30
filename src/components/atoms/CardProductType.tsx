import { ProductType } from "@/models"

interface Props {
    type: ProductType
}

const CardProductType = ({ type }: Props) => {
    return (
        <span className="uppercase font-montserrat tracking-[6px] text-xs text-n-grayishBlue">{type}</span>
    )
}
export default CardProductType