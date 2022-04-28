const BeerInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        value={form.name ? form.name : ''} onChange={handleChange} id="name"
        required name="name" type="text" placeholder="Name" autoComplete="off"
      />
      <label htmlFor="style">Style</label>
      <input
        value={form.style ? form.style : ''} onChange={handleChange} id="style"
        required name="style" type="text" placeholder="IPA, Pilsner, etc." autoComplete="off"
      />
      <label htmlFor="brewery">Brewery</label>
      <input
        value={form.brewery ? form.brewery : ''} onChange={handleChange} id="brewery"
        required name="brewery" type="text" placeholder="Brewery" autoComplete="off"
      />
      <label htmlFor="location">Location</label>
      <input
        value={form.location ? form.location : ''} onChange={handleChange} id="location"
        required name="location" type="text" placeholder="Location" autoComplete="off"
      />
      <label htmlFor="description">Description</label>
      <input
        value={form.description ? form.description : ''} onChange={handleChange} id="description"
        required name="description" type="text" placeholder="Description" autoComplete="off"
      />
      <label htmlFor="abv">ABV</label>
      <input
        value={form.abv ? form.abv : ''} onChange={handleChange} id="abv"
        required name="abv" type="text" placeholder="ABV%" autoComplete="off"
      />
    </>
  )
}

export default BeerInput