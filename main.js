let container = document.querySelector("#container");
let gridItem = document.querySelectorAll("#container .grid-item");

for(let i = 0; i < gridItem.length; i++){
    gridItem[i].addEventListener('mouseover', function(){
        gridItem[i].style.backgroundColor = "grey";

    });

}
for(let i = 0; i < gridItem.length; i++){
    gridItem[i].addEventListener('mouseout', function(){
        gridItem[i].style.backgroundColor = "blue";

    });

}

let readJeopardyData = async () => {
    let rawJeopardyData = await fetch ('jeopardy.json');
    console.log(rawJeopardyData);
    let data = await rawJeopardyData.json()
    // console.log(data);
    
    let groupedData = _.groupBy(data,"value");
    console.log(groupedData);
    
    console.log(groupedData.$200); // access $200 questions
 
}    

readJeopardyData();