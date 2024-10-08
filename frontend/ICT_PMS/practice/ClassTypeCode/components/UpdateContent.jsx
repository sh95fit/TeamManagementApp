import React, { Component } from "react"


class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }

  inputFormHandler(e) {
    this.setState({[e.target.name]:e.target.value})
  }

  render() {
    // console.log(this.props.data);
    return(
      <div>
        <h2>Update</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
          }.bind(this)}
        >

          <input type="hidden" name="id" value={this.state.id} />

          <p><input type="text" name="title" placeholder="title" value={this.state.title} onChange={
            // function(e){
            //   this.setState({title:e.target.value})
            // }.bind(this)
              this.inputFormHandler
            }
          /></p>
          <p><textarea name="desc" placeholder="description" value={this.state.desc} onChange={
            // function(e){
            //   this.setState({desc:e.target.desc})
            // }.bind(this)
              this.inputFormHandler
            }
          ></textarea></p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </div>
    );
  }
}

export default UpdateContent;