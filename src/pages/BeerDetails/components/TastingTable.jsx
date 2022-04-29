const TastingTable = ({ beer }) => {
  return (
    <table>
      <thead>
        <tr><th>Date</th><th>Shop</th><th>Impression</th></tr>
      </thead>
      <tbody>
        {beer.tastings.map((tasting) =>
          <tr key={tasting.id}>
            <td>{tasting.date}</td>
            <td>
              {tasting.shop}
            </td>
            <td>
              {tasting.impressions}
            </td>
          </tr>
        ).reverse().slice(0, 3)}
      </tbody>
    </table>
  )
}

export default TastingTable