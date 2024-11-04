import React, { useState, useCallback } from 'react'

function Insert({ onInsert }) {
   const [keyword, setKeyword] = useState('')
   const onChange = useCallback((e) => setKeyword(e.target.value), [])

   const onSubmit = useCallback(
      (e) => {
         onInsert(keyword)
         setKeyword('')
         e.preventDefault()
      },
      [onInsert, keyword]
   )
   return (
      <div>
         <form onSubmit={onSubmit}>
            <label htmlFor="insert">포켓몬 이름</label>
            <input type="text" id="insert" value={keyword} onChange={onChange} />
            <button type="sudmit">등록</button>
         </form>
      </div>
   )
}

export default Insert
