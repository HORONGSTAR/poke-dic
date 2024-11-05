import ListItem from './ListItem'
import React, { useState } from 'react'
import { RiEditFill } from 'react-icons/ri'

function List({ pokes, onRemove, onToggle }) {
   const [disPlay, setdisPlay] = useState(false)
   return (
      <div>
         <div className="edit-btn">
            <button onClick={() => setdisPlay(!disPlay)}>
               <RiEditFill />
               도감편집
            </button>
         </div>
         <div className="List">
            {pokes.map((poke) => (
               <ListItem poke={poke} key={poke.id} onRemove={onRemove} onToggle={onToggle} disPlay={disPlay}></ListItem>
            ))}
         </div>
      </div>
   )
}

export default List
