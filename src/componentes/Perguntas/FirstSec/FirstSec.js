import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class FirstSec extends Component{
  state = {
    selectedValue1: 'sim1',
    selectedValue2: 'sim2',
    selectedValue3: 'sim3',
    selectedValue4: 'sim4',
    selectedValue5: 'sim5',
    selectedValue6: 'sim6',

  };

  handleChange = event => {
    this.setState({ selectedValue1: event.target.value });
    this.setState({ selectedValue2: event.target.value });
    this.setState({ selectedValue3: event.target.value });
    this.setState({ selectedValue4: event.target.value });
    this.setState({ selectedValue5: event.target.value });
    this.setState({ selectedValue6: event.target.value });
  };

    render(){
      const classes = this.props;
      
        return(
        <div className={classes.root}>
          <form>
            <h1 id="item1">Conectada na Internet</h1>

                <p>Você utiliza como navegador padrão, Mozilla ou Opera?</p>
                    <Radio checked={this.state.selectedValue1 === 'sim1'} onChange={this.handleChange} value="sim1" name="" color="primary" aria-label="Sim1" />
                    <Radio checked={this.state.selectedValue1 === 'nao1'} onChange={this.handleChange} value="nao1" name="" color="primary" aria-label="Não1" />     

                <p>Você utiliza extensões (add-ons) do navegador que melhoram sua segurança?</p>
                    <Radio checked={this.state.selectedValue2 === 'sim2'} onChange={this.handleChange} value="sim2" name="" color="primary" aria-label="Sim2" />
                    <Radio checked={this.state.selectedValue2 === 'nao2'} onChange={this.handleChange} value="nao2" name="" color="primary" aria-label="Não2" />

                <p>Você utiliza o Google como seu mecanismo de busca padrão</p>
                    <Radio checked={this.state.selectedValue3 === 'sim3'} onChange={this.handleChange} value="sim3" name="" color="primary" aria-label="Sim3" />
                    <Radio checked={this.state.selectedValue3 === 'nao3'} onChange={this.handleChange} value="nao3" name="" color="primary" aria-label="Não3" />

                <p>Você utiliza VPN?</p>
                    <Radio checked={this.state.selectedValue4 === 'sim4'} onChange={this.handleChange} value="sim4" name="" color="primary" aria-label="Sim4" />
                    <Radio checked={this.state.selectedValue4 === 'nao4'} onChange={this.handleChange} value="nao4" name="" color="primary" aria-label="Não4" />

                <p>Você utiliza algum serviço de compartilhamento de dados que se preocupe com a segurança/criptografia dos usuários como Mega, Nextcloud, etc?</p>
                    <Radio checked={this.state.selectedValue5 === 'sim5'} onChange={this.handleChange} value="sim5" name="" color="primary" aria-label="Sim5" />
                    <Radio checked={this.state.selectedValue5 === 'nao5'} onChange={this.handleChange} value="nao5" name="" color="primary" aria-label="Não5" />

                <p>Você se conecta a Wi-Fi's públicos?</p>
                    <Radio checked={this.state.selectedValue6 === 'sim6'} onChange={this.handleChange} value="sim6" name="" color="primary" aria-label="Sim6" />
                    <Radio checked={this.state.selectedValue6 === 'nao6'} onChange={this.handleChange} value="nao6" name="" color="primary" aria-label="Não6" />
          </form>
        </div>
        )
    }
}

export default FirstSec
