const fs = require('fs');


function readFile(){
    const data = fs.readFileSync('data.json');
    const db_json = JSON.parse(data);

    if ("users" in db_json == false)
        db_json['users'] = []; 

    return db_json;
}

function save(jsonData){
    jsonString = JSON.stringify(jsonData);
    fs.writeFileSync('data.json',jsonString, 'utf-8');
}

function add(user){
    const db_json =  readFile();

    const existing_user = db_json['users'].filter((u)=>
        u.email === user.email);
    
    if(existing_user.length == 0){
        user = {'id':db_json['users'].length > 0 ? db_json['users'][db_json['users'].length-1].id + 1 : 0 ,
            ...user}
        db_json['users'].push(user);
        console.log('Successfully added user')
        save(db_json);
    } 


}


module.exports = {
    add,
}