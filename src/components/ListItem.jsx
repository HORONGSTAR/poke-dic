import React from 'react'
import classNames from 'classnames'
import { TiDeleteOutline } from 'react-icons/ti'

function ListItem({ poke, onRemove, onToggle, disPlay }) {
   const { id, num, name, types, checked } = poke

   const imgsrc = 'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/' + num + '01.png'

   const typeNames = types.map((type) => {
      let classNames
      switch (type) {
         case '노말':
            classNames = 'normal'
            break
         case '불꽃':
            classNames = 'flame'
            break
         case '물':
            classNames = 'water'
            break
         case '풀':
            classNames = 'grass'
            break
         case '전기':
            classNames = 'electricity'
            break
         case '얼음':
            classNames = 'ice'
            break
         case '격투':
            classNames = 'fight'
            break
         case '독':
            classNames = 'poison'
            break
         case '땅':
            classNames = 'earth'
            break
         case '비행':
            classNames = 'flight'
            break
         case '에스퍼':
            classNames = 'esper'
            break
         case '벌레':
            classNames = 'worm'
            break
         case '바위':
            classNames = 'rocks'
            break
         case '고스트':
            classNames = 'ghost'
            break
         case '드래곤':
            classNames = 'dragon'
            break
         case '악':
            classNames = 'evil'
            break
         case '강철':
            classNames = 'steel'
            break
         case '페어리':
            classNames = 'fairy'
            break
      }
      return classNames
   })

   return (
      <div key={id} className="ListItem">
         <div onDoubleClick={() => onToggle(id)} onClick={() => onToggle(!id)} className={classNames({ activate: checked })}>
            <img src={imgsrc} alt={name} />
            <small>No.{num}</small>
            <h3>{name}</h3>
            <div className="info">
               <span className={classNames('type', typeNames[0])}>{types[0]}</span> {types[1] && <span className={classNames('type', typeNames[1])}>{types[1]}</span>}
            </div>
         </div>
         <div
            className={classNames('remove', { edit: disPlay })}
            onClick={() => {
               onRemove(id)
            }}
         >
            <TiDeleteOutline />
            삭제하기
         </div>
      </div>
   )
}

export default ListItem
