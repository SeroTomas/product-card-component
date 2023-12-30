import { CardInfo } from "@/models"
import { ProductType, ProductName, ProductDescription } from "@/components"

const CardInfo = ({ type, name, description }: CardInfo) => {
    return (
        <div className="flex flex-col gap-3 flex-grow desk:gap-6">
            <ProductType type={type} />
            <ProductName name={name} />
            <ProductDescription description={description}/>
        </div>
    )
}
export default CardInfo;