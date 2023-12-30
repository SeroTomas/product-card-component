

export interface CardInterface {
    images: CardImages
    info: CardInfo
}

export interface CardImages {
    mobileImage: string
    desktopImage: string
}

export interface CardInfo {
    type: string
    name: string
    description: string
    price: string
    previousPrice?: string
}