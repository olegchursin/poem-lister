import React from 'react'
import data from './data.js'
import PoemList from './PoemList.js'

class PoemContainer extends React.Component{
  state = {
    poems: []
  }

  componentDidMount(){
    this.setState({
      poems: data
    })
  }

  handleSubmit = (id, user, text) => {
    // let id = parseInt(e.target.children[2].id, 10)
    let updatedPoems = this.state.poems.slice()
    let comment = {user: user, text: text}
    
    updatedPoems.forEach((p) => {
      if (p.id === id) {
        p.comments.push(comment)
      }
    })

    this.setState({
      poems: updatedPoems
    })

  }


  render(){
    return (
      <div>
        <PoemList poems={this.state.poems} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default PoemContainer
