import { CardInfo } from "@/models"
import { CardProductType } from "@/components"

const CardInfo = ({ type }: CardInfo) => {
    return (
        <div className="flex flex-col p-5">
            <CardProductType type={type} />
        </div>
    )
}
export default CardInfo