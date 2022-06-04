module.exports = (sequelize, DataType) => {
    const ItemPedido = sequelize.define('ItemPedido', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantidade: DataType.INTEGER,
        valor: DataType.FLOAT,
        produtos_id: DataType.INTEGER,
        pedidos_id: DataType.INTEGER,
    {   
    
        tableName : 'itensPedido',
        timestamps : false
    
}});

return ItemPedido;

};

