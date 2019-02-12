const argv = require('yargs')
                            .command('create', 'Add a task', {
                                description: {
                                    demand: true,
                                    alias: 'd'
                                }
                            })
                            .command('update', 'Update a task', {
                                description: {
                                    demand: true,
                                    alias: 'd'
                                },
                                complete: {
                                    default: true,
                                    alias: 'c'
                                }
                            })
                            .command('list', 'Show all the tasks')
                            .command('delete', 'Delete a task', {
                                description: {
                                    demand: true,
                                    alias: 'd'
                                }
                            })
                            .help()
                            .argv;
module.exports = {
    argv
}