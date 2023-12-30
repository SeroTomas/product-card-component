import { CardImage, CardInfo } from "@/components"
import { CardInterface } from "@/models"

const Card = ({ info, images }: CardInterface) => {
    return (
        <div className="flex flex-col desk:flex-row">
            <CardImage {...images} />
            <CardInfo {...info}/>
        </div>
    )
}
export default Card