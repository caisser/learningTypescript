"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id, title = todo.title, completed = todo.completed;
    console.log("The Todo with id: ".concat(id, ", Has a title of: ").concat(title, ", and is completed? ").concat(completed));
});
