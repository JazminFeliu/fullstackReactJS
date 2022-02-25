// let fname = "Jaz";
// let lname = "F ";
// let age = prompt("Guess Jaz's age...");

//old way
// let result = fname + " " + lname + " " + age + " years old";
// alert (result);

//using template string
// let result = `${fname} ${lname} is ${age} years old`;
// alert(result);

// function welcome(user = "Mistery person", message = "Good day"){
//     alert(`Hello ${user}, ${message}`);
// }

// welcome()

// function gretting(message){
//     return alert(`${message} everyone!`);    
// }

// let gretting = (message) => alert(`${message} everyone!`);

// gretting('Good morning!');

let createBlog = (title, body) => {
    if(!title){
        throw new Error( " A title is required");
    }
        
    if (!body){
        throw new Error(" Body cant be empty");
    }

    return alert(`${title} - ${body}`);
};

createBlog('Titulo del Blog', 'Blog body');
