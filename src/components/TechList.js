import React, { Component } from 'react';

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

    state = {
        newTech: '',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native'
        ]
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
    }

    render() {
        return (
            // fragment
            <form onSubmit={this.handleSubmit}>
                <h1>{this.state.newTech}</h1>
                <ul>
                    {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
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