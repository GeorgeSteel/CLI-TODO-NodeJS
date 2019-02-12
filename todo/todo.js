const fs = require('fs');

let TODOList = [];

const saveDB = () => {
    let data = JSON.stringify(TODOList);
    fs.writeFile('db/data.json', data, err => {
        if(err) throw new Error(`Can't write data`, err);
    });
}

const loadDB = () => {
    try {
        TODOList = require('../db/data.json');
    } catch (error) {
        TODOList = [];
    }    
}

const getList = () => {
    loadDB();    
    return TODOList;
}

const update = (description, complete) => {
    loadDB();
    let index = TODOList.findIndex(task => {
        return task.description === description;
    });
    if (index >= 0) {
        TODOList[index].complete = complete;
        saveDB();
        return true;
    }else {
        return false;
    }
}

const deleted = (description) => {
    loadDB();
    let index = TODOList.findIndex(task => {
        return task.description === description;
    });
    if (index >= 0) {
        TODOList.splice(index, 1);
        saveDB();
        return true;
    }else {
        return false;
    }
}

const create = (description) =>{
    loadDB();

    let todo = {
        description,
        complete: false
    };

    TODOList.push(todo);
    saveDB();
    return todo;
}

module.exports = {
    create,
    getList,
    update,
    deleted
}