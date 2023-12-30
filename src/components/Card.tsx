import { Button, CardImage, CardInfo, CardPrices } from "@/components"
import { CardInterface } from "@/models"

const Card = ({ info, images }: CardInterface) => {
    return (
        <div className="flex flex-col desk:flex-row w-[340px] desk:w-[680px]">
            <CardImage {...images} />
            <div className="p-6 bg-white flex flex-col rounded-lg gap-5 desk:p-9 desk:rounded-l-none desk:gap-8 ">
                <CardInfo {...info} />
                <CardPrices price={info.price} previousPrice={info.previousPrice} />
                <Button icon="images/icon-cart.svg" text="Add to Cart"/>
            </div>
        </div>
    )
}
export default Card