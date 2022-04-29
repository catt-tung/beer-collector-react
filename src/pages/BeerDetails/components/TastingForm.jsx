import { useState } from 'react'
import moment from 'moment'

// Services
import { addTasting } from '../../../services/beers'

const initialState = {
  date: moment(new Date()).format('YYYY-MM-DDTHH:mm')
}

const TastingForm = ({ beer, setBeer }) => {
  const [form, setForm] = useState(initialState)

  const addToTastings = async (e) => {
    e.preventDefault()
    const tastedBeer = await addTasting(beer.id, form)
    setBeer(tastedBeer)
    setForm(initialState)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h3>Add a Tasting</h3>
        <form onSubmit={addToTastings}>
          <div>
            <label htmlFor="date">Tasting Date:</label>
            <input required onChange={handleChange} type="datetime-local" name="date" value={form.date ? form.date : ''} />
          </div>
          <div>
            <label htmlFor="impressions">Impressions:</label>
            <input required onChange={handleChange} type="text" name="impressions" value={form.impressions ? form.impressions : ''} />
          </div>
          <div>
            <label htmlFor="shop">Shop:</label>
            <select name="shop" onChange={handleChange} required>
              <option value="shop1">Shop 1</option>
              <option value="shop2">Shop 2</option>
            </select>
          </div>
        
          <button type="submit" className="btn submit">Add Tasting</button>
        </form>
    </>
  )
}

export default TastingForm