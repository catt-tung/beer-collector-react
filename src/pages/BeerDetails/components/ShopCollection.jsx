// Image Assets
import StringToy from '../../../assets/string.svg'
import MouseToy from '../../../assets/mouse.svg'
import FishToy from '../../../assets/fish.svg'

// Components
import ShopContainer from './ShopContainer'

const ShopCollection = ({ beer, shops, user, addToCollection }) => {
  return (
    <section className="shops">
      <div className="subsection-title">
        <h2>Shops</h2>
        <img src={StringToy} alt="A ball of string" />
        <img src={MouseToy} alt="A mouse" />
        <img src={FishToy} alt="A fishy toy" />
      </div>
      <h3>{beer.name}'s Shops</h3>
      <div className="subsection-content">
        {beer.shops.length
          ? beer.shops.map((shop) => <ShopContainer key={shop.id} shop={shop} />)
          : <p className="no-toys">{beer.name} isn't available at any shops 😞</p>
        }
      </div>
      {user.id === beer.profile_id &&
        <>
          <h3>Available Shops</h3>
          <div className="subsection-content">
            {shops?.length
              ? shops.map((shop) => <ShopContainer key={shop.id} shop={shop} beer={beer} user={user} addToCollection={addToCollection} />)
              : <p className="all-toys"> {beer.name} is available at all the shops 🥳</p>
            }
          </div>
        </>
      }
    </section>
  )
}

export default ShopCollection


