const httpStatus = require('http-status');
const globals = require('../../global_constant');
const ObjectId = require('mongodb').ObjectID;
var async = require("async");
function Todo() {


    this.addTodos = function (req, res) {
        try {
            let todo = req.body.todo;
            let todoTable = db.collection("todoTable");
            todoTable.insertOne(todo).then(result => {
                res.status(httpStatus.OK).json({
                    status: true,
                    result: {
                        todoId: result.ops[0]._id,
                        message: "todo added successfully"
                    }
                })
            }).catch(err => {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    status: false,
                    error: 'something_went_wrong'
                });
            });
        } catch (ex) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: false,
                error: 'something_went_wrong'
            });
        }
    }

    this.getTodos = function (req, res) {
        try {
            let todoTable = db.collection("todoTable");
            todoTable.find().toArray((err,result) => {
                res.status(httpStatus.OK).json({
                    status: true,
                    result:result
                })
            })
        } catch (ex) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: false,
                error: 'something_went_wrong'
            });
        }
    }



}

module.exports = new Todo();