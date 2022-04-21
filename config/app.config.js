const { NODE_ENV, PORT, DEBUG, DB_CONN_URI } = process.env;

const EnvironmentConfig = {
    NODE_ENV,
    PORT,
}

const DBConfig = {
    DB_CONN_URI,
    DB_Connection_Options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }

}

const AppConfig = {
    DEBUG
}

module.exports = {
    EnvironmentConfig,
    DBConfig,
    AppConfig
}