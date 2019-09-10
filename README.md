```
yarn init -y
yarn add @babel/core @babel/preset-end @babel/preset-react webpack webpack-cli -D
yarn add react react-dom
yarn add babel-loader -D
yarn add webpack-dev-server -D
yarn add style-loader css-loader -D
yarn add file-loader -D
yarn add @babel/plugin-proposal-class-properties -D
```

o --mode development deixa o arquivo bundle um pouco mais legível. Com o --mode production fica ilegível, mas mais leve.

## Prop types é uma forma de validar as propriedades que um componente recebe
```
yarn add prop-types
```
