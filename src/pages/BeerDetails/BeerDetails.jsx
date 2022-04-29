import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './CatDetails.css'

// Services
import { getOne, assocShop } from '../../services/beers'

// Components
import Tastings from './components/Tastings'
import BeerActions from './components/BeerActions'
import ShopCollection from './components/ShopCollection'

const BeerDetails = ({ catImages, user }) => {
  const { id } = useParams()
  const [beer, setBeer] = useState(null)
  const [availableShops, setAvailableShops] = useState([])
  const idx = Math.floor(Math.random() * (catImages.length))

  const addToCollection = async (e) => {
    e.preventDefault()
    const shopId = parseInt(e.target.id)
    const updatedBeer = await assocShop(beer.id, shopId)
    setAvailableShops(availableShops.filter(shop => shopId !== shop.id))
    setBeer({...updatedBeer, tasted: beer.tasted})
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setBeer(data.beer)
      setAvailableShops(data.available_shops)
    }
    fetchOne()
  }, [id])

  if (!beer) return <h1>Loading</h1>

  return (
    <>
      <section className="cat-container">
        <div className="cat-img">
          <img className="usr-img" src={catImages[idx]} alt={`${beer.name}`} />
        </div>
        <div className="cat-details">
          <h1>{beer.name}</h1>
          {beer.abv > 0
            ? <h2>A {beer.abv}% {beer.style}</h2>
            : <h2>A {beer.style}.</h2>
          }
          <p>{beer.description}</p>
          <BeerActions beer={beer} user={user} />
        </div>
      </section>
      <div className="feedings-toy-container">
        <Tastings
          beer={beer}
          user={user}
          setBeer={setBeer}
        />
        <ShopCollection
          beer={beer}
          user={user}
          shops={availableShops}
          addToCollection={addToCollection}
        />
      </div>
    </>
  )
}

export default BeerDetails