module.exports = (sequelize, DataType) => {
    const Admin = sequelize.define('Admin', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataType.STRING,
            allowNull: true,
        },
        senha: {
            type: DataType.INTEGER,
            allowNull: true,
<<<<<<< HEAD
        },
    },
=======
        }
>>>>>>> master
        {   
    
            tableName : 'categorias',
            timestamps : false
        
<<<<<<< HEAD
});

    return Admin;

};
=======
    }});
    
    return Categoria;
    
    };
>>>>>>> master

