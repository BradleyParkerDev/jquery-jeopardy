let container = document.querySelector("#container");
let gridItem = document.querySelectorAll("#container .grid-item");


let readJeopardyData = async () => {
    let rawJeopardyData = await fetch ('jeopardy.json');
    console.log(rawJeopardyData);
    let data = await rawJeopardyData.json()
    // console.log(data);
    
    let groupedData = _.groupBy(data,"value");
    console.log(groupedData);
    
    console.log(groupedData.$200); // access $200 questions
    for(let i = 0; i < gridItem.length; i++){
        if(gridItem[i].className === "one-hundred"){
        }
    }
}    

readJeopardyData();