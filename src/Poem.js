import React from 'react'

class Poem extends React.Component {

  state = {
    user: "",
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitComment = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.props.poem.id, this.state.user, this.state.text)
  }


  render(){
    console.log(this.state)
    let comments = this.props.poem.comments.map((comment,index) => {
      return <p key={index}>{comment.user} says: {comment.text}</p>
    })


    return (
      <div style={{borderStyle: "solid", borderWidth: "10px", margin: "10px"}}>
        <h3>{this.props.poem.name}</h3>
        <p>{this.props.poem.text}</p>
        <div>
          {comments}
        </div>
        <form onSubmit={this.submitComment}>
          <input type="text" name="user" onChange={this.handleChange} placeholder="Username" />
          <input type="text" name="text" onChange={this.handleChange} placeholder="Comment" />
          <input id={this.props.poem.id} type="submit"/>
        </form>
      </div>
    )
  }
}


export default Poem