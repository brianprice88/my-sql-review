const db = require('./index.js');
const data = [
    {
        name: 'Brian',
        amount: 5
    },
    {
        name: 'Justin',
        amount: 12
    },
    {
        name: 'Jonathan',
        amount: 0
    },
    {
        name: 'Forest',
        amount: 1
    },
    {
        name: 'Ryan',
        amount: 6
    }
];

data.forEach(({name, amount}) => {
  db.query('INSERT INTO tennis (item_name, amount) VALUES ("' + name + '", ' + amount + ' )')
});