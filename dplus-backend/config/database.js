const mongoose = require('mongoose');

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_CLUSTER_NAME} = process.env;
const connectionString = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER_NAME}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    autoIndex: true,
}).then(() => {
    console.log('Connected with MongoDB');
}).catch((error) => {
    console.log(`Failed to connect with MongoDB ${error}`);
});

mongoose.Promise = global.Promise;
module.exports = mongoose;
