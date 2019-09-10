import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
    // O babel não entende, por padrão, essas definições.
    // Ele esperaria que o código estivesse dentro de um constructor:
    /* 
    constructor() {
        this.state = {
            techs: [
                'Node.js',
                'ReactJS',
                'React Native'
            ]
        }
    }
    Preciso do @babel/plugin-proposal-class-properties
    */

    // Posso definir default props da mesma forma do componente feito como função
    // Mas também posso fazer assim:
    static defaultProps = {
        tech: 'Oculto'
    };

    state = {
        newTech: '',
        techs: [
        ]
    }

    // Executado assim que o componente aparece em tela
    componentDidMount() {
        const techs = localStorage.getItem('techs');

        if (techs) {
            this.setState({ techs: JSON.parse(techs) });
        }
    }

    // Executado sempre que houver alterações nas props ou estado
    //componentDidUpdate(prevProps, prevState) {
    componentDidUpdate(_, prevState) { //pq não vou usar o prevProps
        // podemos acessar as propriedades antes de receber as alterações
        // this.props, this.state

        // Não estou interessada em mudanças no newTech, só no array techs
        if (prevState.techs !== this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs));
        }

    }

    // Executado quando o componente deixa de existir
    componentWillMount() {
        // É bom limpar qualquer sujeira que meu componente possa ter deixado
    }

    //precisa ser arrow function para acessar a this
    handleInputChange = e => {
        console.log(e.target.value);

        //isso não funciona por causa da imutabilidade
        //this.state.newTech = e.target.value;

        this.setState({ newTech: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.newTech);

        // spread operator ...
        this.setState({ techs: [...this.state.techs, this.state.newTech] });

        this.state.newTech = "";
    }

    handleDelete = (tech) => {
        this.setState({ techs: this.state.techs.filter(t => t !== tech) });
        console.log(tech);
    }

    render() {
        return (
            // fragment
            <form onSubmit={this.handleSubmit}>
                <h1>{this.state.newTech}</h1>
                <ul>
                    {this.state.techs.map(tech => (
                        <TechItem
                            key={tech}
                            tech={tech}
                            onDelete={() => this.handleDelete(tech)}
                        />
                    ))}
                </ul>

                <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.newTech}
                />

                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default TechList;