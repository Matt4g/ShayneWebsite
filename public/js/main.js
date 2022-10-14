let input  = document.getElementById('ans');
let expected;
let riddleDiv = document.getElementById("riddle");

function start(doc){
    // Set the first riddle
    riddleDiv.innerText = doc.data().riddles;
}

//#region Riddle Functions  


function nextRiddle(){

}

function addTime(){

}
//#endregion
db.collection("riddles").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        start(doc);
        expected = doc.data().answers;
        console.log(doc.data().answers);
    })
})
//#region Riddle if statements
if(input == expected){
    console.log("Correct");
}
else{
    addTime();
}

//#endregion

//#region Call Start function
start();
//#endregion