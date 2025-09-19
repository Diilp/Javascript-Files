let todo=[];
let req=prompt("Enter your request:");
while(true){
    if(req=='quit'){
        console.log("You quit");
        break;
    }
    if(req=='list'){
        console.log("------------------------");
        for(task of todo){
            console.log(task);
        }
        console.log("-------------------------");
    }
    else if(req=='add'){
        let task=prompt("Enter your task to add:");
        todo.push(task);
        console.log("Task added");
    }
    else if(req=='delete'){
        let task=prompt("Enter your task to delete:");
        todo.splice(task, 1);
        console.log("Task deleted");
    }
    req=prompt("Enter your request:");
    
}
