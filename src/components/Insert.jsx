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
      <div className="Insert">
         <form onSubmit={onSubmit}>
            <input type="text" id="insert" placeholder="포켓몬의 이름을 입력하세요" value={keyword} onChange={onChange} />
            <button type="sudmit">등록</button>
         </form>
      </div>
   )
}

export default Insert
