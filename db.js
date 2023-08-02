import { Sequelize } from '@sequelize/core';

const conexao = new Sequelize("Vegetariansimo","","",{

host: 'localhost',
dialect:'mssql',

});
module.export = conexao;