import { AppLayout, Card } from './components'
import { CardInterface } from './models'

const cardInfo: CardInterface = {
  images: {
    mobileImage: "images/image-product-mobile.jpg",
    desktopImage: "images/image-product-desktop.jpg"
  },
  info: {
    type: "perfume",
    name: "Gabrielle Essence Eau De Parfum",
    description: "A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.",
    price: "149.99",
    previousPrice: "169.99"
  }
}

function App() {

  return (
    <AppLayout>
      <Card {...cardInfo} />
    </AppLayout>
  )
}

export default App
