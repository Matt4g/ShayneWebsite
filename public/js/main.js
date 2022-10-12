let input  = document.getElementById('ans');
let expected ;
let riddle;

db.collection('riddles').get().then((snapshot) => {
    console.log(snapshot.docs);
})

//#region Riddle Functions  
function start(){
    // Set the first riddle
    riddle = "";
}

function nextRiddle(){

}

function addTime(){

}
//#endregion

//#region Riddle if statements
if(input == expected){
    nextRiddle();
}
else{
    addTime();
}
//#endregion