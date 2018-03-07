import React from 'react'
import Poem from './Poem'

const PoemList = (props) => {
  let poemItems = props.poems.map(poem => {
    return <Poem key={poem.id} poem={poem} handleSubmit={props.handleSubmit}/>
  })
  return (
    <div>
      {poemItems}
    </div>
  )
}


export default PoemList