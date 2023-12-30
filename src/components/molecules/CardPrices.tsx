import { ProductPrevPrice, ProductPrice } from ".."

interface Props {
    price: string
    previousPrice?: string
}

const CardPrices = ({ previousPrice, price }: Props) => {
    return (
        <div className="flex items-center gap-5">
            <ProductPrice price={price}/>
            <ProductPrevPrice previousPrice={previousPrice}/>
        </div>
    )
}
export default CardPrices