const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');
const colors = require('colors');

let command = argv._[0];
switch (command) {
    case 'create':
        let task = todo.create(argv.description);
        console.log(task);
        break;
    case 'list':
        let list = todo.getList();
        for (let task of list) {
            console.log('=================TO DO================'.blue);
            console.log(`Description: ${task.description}`);
            console.log(`Status: ${task.complete}`);
            console.log('======================================'.blue);
        }
        break;
    case 'update':
        let update = todo.update(argv.description, argv.complete);
        console.log(update);
        break;
    case 'delete':
        let deleted = todo.deleted(argv.description);
        console.log(deleted);
        break;
    default:
        console.log(`That command doesn't exists`);
        break;
}