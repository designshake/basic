import React from 'react'

const Main = ({ children }) => {
  return (
    <div>
      <main id="main" role="main">
        { children }
      </main>
    </div>
  )
}

export default Main