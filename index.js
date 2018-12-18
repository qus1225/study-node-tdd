const exprses = require("express");
const app = exprses();
const morgan = require("morgan");
const bodyParser = require('body-parser');
const user = require('./api/user');

// TODO: cmd에서 NODE_ENV적용하는 법 알아내서 하기
if (process.env.NODE_ENV !== 'test') {
    app.use(morgan("dev"));
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true})); // for parsing application/x-www-fomr-urlencoded

// Router클래스로 route 모듈화
app.use('/users', user);

module.exports = app;
