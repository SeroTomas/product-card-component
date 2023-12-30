import { ProductType } from "./types"

export interface CardInterface {
    images: CardImages
    info: CardInfo
}

export interface CardImages {
    mobileImage: string
    desktopImage: string
}

export interface CardInfo {
    type: ProductType
    name: string
    description: string
    price: string
    previousPrice?: string
}