// Database configuration module

module.exports = {
    // Database host
    HOST: "localhost",

    // Database user
    USER: "root",

    // Database user password
    PASSWORD: "",

    // Database name
    DB: "e-ovs",

    // SQL dialect being used
    dialect: "mysql",

    // Pool configuration for managing database connections
    pool: {
        // Maximum number of connections in the pool
        max: 5,

        // Minimum number of connections in the pool
        min: 0,

        // Maximum time (in milliseconds) that a connection can be idle before being released
        idle: 10000,

        // Maximum time (in milliseconds) that pool will try to get a connection before throwing an error
        acquire: 30000,
    },
};
