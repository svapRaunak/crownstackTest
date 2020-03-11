require("./global_constant");
const mongodb = require(DB_CONNECTION_PATH + 'connection_mongo');

module.exports = {
    configure: function (app) {
        mongodb.connectToServer((err) => {
            db = mongodb.getDb();
            /**
             * 	Before Filter.
             * 	All http request will be filtered through this before filter.
             */
            app.use('/api/*', function (req, res, next) {
                res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, authkey");
                /** Function to get unhandled errors and prevent to stop nodejs server */
                process.on('uncaughtException', function (err) {
                    console.log('error name ---------' + err.name);    // Print the error name
                    console.log('error message ---------' + err.message); // Print the error message
                    console.log('error stack ---------' + err.stack);   // Print the stack trace
                });

                next();// Passing the request to the route.
            });// End before filter.

          
            var manager = require(WEBSITE_ROOT_PATH + "api/handler/todo");
            app.post("/api/addTodos", (req, res) => {
                manager.addTodos(req, res);
            });
            
            app.get("/api/getTodos", (req, res) => {
                manager.getTodos(req, res);
            });
            
            //To handle 404 error if url not exist  allPostList addComment
            app.use((req, res, next) => {
                res.status(404).json({
                    status: false,
                    error: text_settings['system.page_not_found']
                });
            });
        });
    }
}
