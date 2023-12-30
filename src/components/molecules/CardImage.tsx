import { CardImages } from "@/models";
import { useEffect, useState } from "react"
import { ProductImage } from "@/components";

const CardImage = ({ mobileImage, desktopImage }: CardImages) => {

    enum DEVICE {
        MOBILE = "mobile",
        DESKTOP = "desktop"
    }

    const [device, setDevice] = useState('');

    const hanldeDevice = () => {
        const isMobile = window.innerWidth < 1440;
        isMobile ? setDevice(DEVICE.MOBILE) : setDevice(DEVICE.DESKTOP)
    }

    useEffect(() => {
        hanldeDevice()
        window.addEventListener('resize', hanldeDevice);
        return () => window.removeEventListener('resize', hanldeDevice);
    }, [])


    return (
        <>
            {
                device === DEVICE.MOBILE ? <ProductImage image={mobileImage} /> : <ProductImage image={desktopImage} />
            }
        </>
    )
}
export default CardImage