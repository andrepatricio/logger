const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const restful = require('node-restful');
const mongoose = restful.mongoose;
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://db/coletor`);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const Logs = restful.model('logs', 
    { 
        sistema: {type: String, require: true},
        status: {type: String, require: true},
        mensagem: {type: String, require: true}, 
        dados: {type: Object, require: true}
    });
Logs.methods(['get', 'post', 'put', 'delete']);
Logs.register(app, '/logs');

app.listen(3000);