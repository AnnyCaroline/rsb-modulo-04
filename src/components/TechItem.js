import React from 'react';
import PropTypes from 'prop-types';

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

// propTypes também podem ser definidas como statics em componentes do estilo classe
TechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}

TechItem.defaultProps = {
    tech: 'Oculto'
}