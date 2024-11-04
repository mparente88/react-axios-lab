export const StarshipList = (props) => {
  if (!props.starships || props.starships.length === 0) {
    return <h1> Loading Please Wait </h1>
  } else
    return (
      <>
        <div className="grid">
          {props.starships.map((starship) => (
            <div key={starship.url} className="card">
              <h3>{starship.name}</h3>
            </div>
          ))}
        </div>
      </>
    )
}
