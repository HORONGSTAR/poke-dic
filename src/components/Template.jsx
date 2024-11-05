import React, { useState } from 'react'

function Template({ children }) {
   return (
      <div className="Template">
         {children[0]}
         {children[1]}
      </div>
   )
}

export default Template
