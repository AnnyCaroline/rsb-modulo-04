import React from 'react';

// estou desestruturando a propriedade props
// se esse componente fosse uma classe, eu iria acessar tech assim:
// this.props.tech
export default function TechItem({ tech, onDelete }) {
    return (
        <li>
            {tech}
            <button onClick={onDelete} type="button">Remover</button>
        </li>
    );
}