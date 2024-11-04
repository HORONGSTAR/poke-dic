import ListItem from './ListItem'

function List({ pokes, onRemove, onToggle }) {
   return (
      <div>
         {pokes.map((poke) => (
            <ListItem poke={poke} key={poke.id} onRemove={onRemove} onToggle={onToggle}></ListItem>
         ))}
      </div>
   )
}

export default List
