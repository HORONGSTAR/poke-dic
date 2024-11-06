import ListItem from './ListItem'
import React, { useState } from 'react'
import { RiEditFill } from 'react-icons/ri'

function List({ pokes, onRemove, onToggle, onEvolution }) {
   const [edit, setEdit] = useState(false)
   return (
      <div>
         <div className="edit-btn">
            <button onClick={() => setEdit(!edit)}>
               <RiEditFill />
               도감편집
            </button>
         </div>
         <div className="List">
            {pokes.map((poke) => (
               <ListItem poke={poke} key={poke.id} onRemove={onRemove} onToggle={onToggle} onEvolution={onEvolution} edit={edit}></ListItem>
            ))}
         </div>
      </div>
   )
}

export default List
