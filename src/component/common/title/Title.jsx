import React from 'react'

const Title = ({subtitle, title}) => {
  return (
    <div>
        <div id='heading'>
            <h1>{subtitle}</h1>
            <h2>{title}</h2>
        </div>
    </div>
  )
}

export default Title