const { v4: uuidv4 } = require('uuid');

class Task {

    id = '';
    title = '';
    done = null;
    created = null;
    finished = null;

    constructor(title) {
        this.id = uuidv4(); //TODO: asignar id
        this.title = title;
        this.done = false;
        this.created = new Date();
    }

}

module.exports = Task;
