const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //Ponto de Entrada para o Aplixativo
    entry: './src/index.js',
    //Ponto de Saída do Aplicativo
    output: {
        // Caminho Absoluta do Diretório de Saída
        path: path.resolve(__dirname, 'dist'),
        // Nome do Arquivo de Saída
        filename: "bundle.js"
    },
    // Configurações do Módulo
    module: {
        rules: [
            {
                // Regra para JavaScript e JSX
                test: /\.(js|jsx)$/,
                // Exclui a arquivos no Direetório node_modules
                exclude: /node_modules/,
                // Usa o Babel Loader para transpilar o código
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    // Lista de plugins do webpack
    plugins: [
        // Plugin para gerar automaticamente o arquivo HTML
        new HTMLWebpackPlugin({
            //Template HTML para ser usado
            template: './public/index.html',
        })
    ],
    // Configuraçãos da resolução de módulos
    resolve: {
        // Extensões de arquivos a swrem resolvidas automaticamente
        extensions: ['.js', '.jsx'],
    },
    // Configurações do servidor de desenvolvimento  
    devServer: {
        // Configuração de arquivos estáticos a serem servidos
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        // Porta do servidor de desenvolvimento
        port: 3000,
    }
};