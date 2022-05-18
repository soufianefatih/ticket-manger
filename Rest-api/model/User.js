module.exports = (db, type) => {
    return db.define("users", {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: type.STRING,
            allowNull: false,
        },
        email: {
            type: type.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: type.STRING,
            allowNull: false,
        },
    });
};