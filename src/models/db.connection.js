const mongoose = require('mongoose');
const { DBConfig } = require('../../config/app.config');

/**
 * @description Creating a singleton for the entire project, 
 *              so that new connections are not created on 
 *              each new request;
 *          
 */

class DBConnection {
    static async open() {
        try {


            if (this.db) return this.db;
            this.db = await mongoose.connect(this.url, this.options);

            mongoose.connection.on('connected', () => {
                console.log(`Database connected!`)
            })
            mongoose.connection.on('error', function (err) {
                console.log('Mongoose default connection error: ' + err);
            });

            // When the connection is disconnected
            mongoose.connection.on('disconnected', function () {
                console.log('Mongoose default connection disconnected');
            });

            // If the Node process ends, close the Mongoose connection 
            process.on('SIGINT', function () {
                mongoose.connection.close(function () {
                    console.log('Mongoose default connection disconnected through app termination');
                    process.exit(0);
                });
            });

            return this.db;
        } catch (e) {
            throw { status: e.code || 500, message: e };
        }
    }

    static close() {
        try {
            mongoose.connection.close()
            return true;
        } catch {
            console.error(`There's a problem closing connection`);
            return false;
        }
    }
}

DBConnection.db = null;
DBConnection.url = DBConfig.DB_CONN_URI;
DBConnection.options = DBConfig.DB_Option;
module.exports = { DBConnection }
