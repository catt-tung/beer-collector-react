import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ToyDetails.css'

// Services
import { getOne } from '../../services/shops'


// Components
import ShopActions from './components/ShopActions'
import ShopCard from '../../components/ShopCard/ShopCard'

const ShopDetails = ({ user }) => {
  const { id } = useParams()
  const [shop, setShop] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const shopData = await getOne(id)
      setShop(shopData)
    }
    fetchOne()
  }, [id])

  return (
    shop &&
    <>
      <section className="shop-details-container">
        <div className="toy-img">
          <ShopCard shop={shop} />
        </div>
        <div className="shop-details">
          <h1>{shop.name}</h1>
          <p>{shop.description}</p>
          <ShopActions shop={shop} user={user} />
        </div>
      </section>
    </>
  )
}

export default ShopDetails