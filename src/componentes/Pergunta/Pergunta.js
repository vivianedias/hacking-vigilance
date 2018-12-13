import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Pergunta.css'

const theme = createMuiTheme({
    palette: {
        secondary: { main: '#fff' }
    }
});

class Pergunta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = event => {
        localStorage.setItem(event.target.name, event.target.value) //para salvar nome da pergunta + resposta 
        this.setState({ value: event.target.value });
      };


    render() {

        return (
            <section className="spacing">
                <p>{this.props.title}</p>
                <MuiThemeProvider theme={theme}>
                    <RadioGroup
                    aria-label="Opções"
                    name={this.props.name}
                    value={this.state.value}
                    onChange={this.handleChange}>
                    >
                        <FormControlLabel 
                        value="sim" 
                        control={<Radio />} 
                        label={<span style={{ color: 'white', fontFamily: 'Open sans', fontSize: '1.2em' }}>Sim</span>}
                        color="secondary" 
                        />
                        <FormControlLabel 
                        value="nao" 
                        control={<Radio />} 
                        label={<span style={{ color: 'white', fontFamily: 'Open sans', fontSize: '1.2em' }}>Não</span>}
                        color="secondary" 
                        />
                    </RadioGroup>
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