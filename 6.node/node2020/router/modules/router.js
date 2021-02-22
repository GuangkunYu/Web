const { readImg } = require('./file')
const file = require('./file')

module.exports = {
    home: function (req, res) {
        file.readFile('./views/home.html', res, req)
    },
    login: function (req, res) {
        res.write('登录页面')
    },
    register: function (req, res) {
        res.write('注册页面')
    },
    img: function (req, res) {
        file.readImg('./images/1.jpg', res)
    }
}