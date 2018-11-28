import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Legenda from '../Legenda/Legenda'
import './Pergunta.css'

const theme = createMuiTheme({
    palette: {
        secondary: { main: '#fff' }, // This is just green.A700 as hex.
    },
});

class Pergunta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (changeEvent) => {
        this.setState({ selectedOption: changeEvent.target.value })
    }


    render() {

        return (
            <section className="spacing">
                <p>{this.props.title}</p>
                <MuiThemeProvider theme={theme}>
                    <Legenda htmlFor="sim">Sim</Legenda>
                    <Radio
                        value="sim"
                        name={this.props.name}
                        checked={this.state.selectedOption === 'sim'}
                        onChange={this.handleChange}
                        color="secondary"
                    />
                    <Legenda htmlFor="nao">Não</Legenda>
                    <Radio
                        value="nao"
                        name={this.props.name}
                        checked={this.state.selectedOption === 'nao'}
                        onChange={this.handleChange}
                        color="secondary"
                        />
                        { /* preciso de uma terceira opção variável
                    if this.props.name === "android"
                    > tal resposta
                */}
                </MuiThemeProvider>
            </section>

                )
            }
        }
        
        
        
        export default Pergunta;
