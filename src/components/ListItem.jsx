function ListItem({ poke, onRemove, onToggle }) {
   const { id, num, name, types, checked } = poke

   const imgsrc = 'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/' + num + '01.png'
   return (
      <div key={id}>
         <img src={imgsrc} alt={name} />
         <div>{num}</div>
         <div>{name}</div>
         <div>
            <span>{types[0]}</span> {types[1] && <span>{types[1]}</span>}
         </div>
         <button
            className="remove"
            onClick={() => {
               onRemove(id)
            }}
         >
            삭제
         </button>
      </div>
   )
}

export default ListItem
