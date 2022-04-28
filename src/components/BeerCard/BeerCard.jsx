import { Link } from 'react-router-dom'

const BeerCard = ({ beer, catImages }) => {
  const abvString = beer.abv > 0
    ? `A ${beer.abv}% ${beer.style}`
    : `A ${beer.style}.`

  const idx = Math.floor(Math.random() * (catImages.length))

  return (
    <Link to={`/beers/${beer.id}`} className="card">
      <div className="card-content">
        <div className="card-img-container">
          <img className="usr-img" src={catImages[idx]} alt={`${beer.name}`} />
        </div>
        <h2 className="card-title">{beer.name}</h2>
        <p>{abvString}</p>
        <p><small>{beer.description}</small></p>
      </div>
    </Link>
  )
}

export default BeerCard

