import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import './Teste.css'
import Sidebar from '../../componentes/Sidebar/Sidebar'

class Teste extends Component {
  
  render(){

    return(
      <main className="container">

        <Sidebar className="column bottom"/>
      
        <form className="column bottom">
          <section>
            <h1 id="item1">Item 1</h1>
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
          </section>
          <section>
            <h1 id="item2">Item 2</h1>
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
          </section>
          <section>
            <h1 id="item3">Item 3</h1>
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
          </section>
          <section>
            <h1 id="item4">Item 4</h1>
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
          </section>
          <section>
            <h1 id="item5">Item 5</h1>
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
              <Checkbox value="checkedC" />
          </section>
          <input type="submit" value="Submit" />
        </form>
      </main>
    )
  }
}

export default Teste