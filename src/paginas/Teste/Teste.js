import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox';

/*class ControlledInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };

      this.handleChange = this.handleChange.bind(this)
    }


  handleChange(event){
    this.setState({input: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
  }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange}/>
          <Checkbox color={}/>
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}*/

class Teste extends Component {

  render(){

    return(
<div>

        <Checkbox value="checkedC" />
        <Checkbox value="checkedC" />
        <Checkbox value="checkedC" />
        <Checkbox value="checkedC" />
        <Checkbox value="checkedC" />
      </div>
    )
  }
}

export default Teste