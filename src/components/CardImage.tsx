import { useEffect, useState } from "react"

const CardImage = () => {

    enum DEVICE {
        MOBILE = "mobile",
        DESKTOP = "desktop"
    }

    const [device, setDevice] = useState('');

    console.log("me renderice");
    
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
                device === DEVICE.MOBILE ? <img src="images/image-product-mobile.jpg" /> : <img src="images/image-product-desktop.jpg" />
            }
        </>
    )
}
export default CardImage