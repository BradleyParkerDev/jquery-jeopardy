let container = document.querySelector("#container");
let gridItem = document.querySelectorAll("#container .grid-item");
let question = document.querySelector('#question');
let formAnswer = document.querySelector('form');
let inputText = document.querySelector('#inputText');
let scoreHeader = document.querySelector('h2');
let score = 0;
let points = 0;

// Arrays for each row of questions
let oneHundredQuestion = [];
let twoHundredQuestion = [];
let fourHundredQuestion = [];
let sixHundredQuestion = [];
let eightHundredQuestion = [];


//JSON data fetch
let readJeopardyData = async () => {
    let newJGItem;

    //fetching data
    let rawJeopardyData = await fetch ('jeopardy.json');
    let data = await rawJeopardyData.json()
    
    //Grouping data by value
    let groupedData = _.groupBy(data,"value");
    console.log(groupedData);


    //Event listeners for hovering over grid items - color change
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





    //Event listerners for clicking grid items
    for(let i = 0; i < gridItem.length; i++){
        let random = 0;
        //let newJGItem;

        if(gridItem[i].className === "grid-item one-hundred"){
            gridItem[i].addEventListener('click', function(){
                // question.innerText = "100"
                random = getRandomNumber(groupedData.$100.length);
                newJGItem = groupedData.$100[random];
                gridItem[i].removeEventListener('mouseout',function(){
                    gridItem[i].style.backgroundColor = "blue";
                });
                console.log(newJGItem)
                question.innerText = newJGItem.question;
            })
        }
        else if(gridItem[i].className === "grid-item two-hundred"){
            gridItem[i].addEventListener('click', function(){
                // question.innerText= "200"
                random = getRandomNumber(groupedData.$200.length);
                newJGItem = groupedData.$200[random];
                gridItem[i].removeEventListener('mouseout',function(){
                    gridItem[i].style.backgroundColor = "blue";
                });
                console.log(newJGItem)
                question.innerText = newJGItem.question;
            })
        }
        else if(gridItem[i].className === "grid-item four-hundred"){
            gridItem[i].addEventListener('click', function(){
                // question.innerText= "400"
                random = getRandomNumber(groupedData.$400.length);
                newJGItem = groupedData.$400[random];
                gridItem[i].removeEventListener('mouseout',function(){
                    gridItem[i].style.backgroundColor = "blue";
                });
                console.log(newJGItem)
                question.innerText = newJGItem.question;
            })
        }
        else if(gridItem[i].className === "grid-item six-hundred"){
            gridItem[i].addEventListener('click', function(){
                // question.innerText= "600"
                random = getRandomNumber(groupedData.$600.length);
                newJGItem = groupedData.$600[random];
                gridItem[i].removeEventListener('mouseout',function(){
                    gridItem[i].style.backgroundColor = "blue";
                });
                console.log(newJGItem)
                question.innerText = newJGItem.question;
            })
        }
        else if(gridItem[i].className === "grid-item eight-hundred"){
            gridItem[i].addEventListener('click', function(){
                // question.innerText= "800"
                random = getRandomNumber(groupedData.$800.length);
                newJGItem = groupedData.$800[random];
                gridItem[i].removeEventListener('mouseout',function(){
                    gridItem[i].style.backgroundColor = "blue";
                });
                console.log(newJGItem)
                question.innerText = newJGItem.question;
            })
        }
    } 

    formAnswer.addEventListener('submit',function(event){
        event.preventDefault();
        if(newJGItem.value === "$100"){
            points = 100;
        }
        else if(newJGItem.value === "$200"){
            points = 200;
        }
        else if(newJGItem.value === "$400"){
            points = 400;
        }
        else if(newJGItem.value === "$600"){
            points = 600;
        }
        else if(newJGItem.value === "$800"){
            points = 800;
        }

        if(inputText.value === newJGItem.answer){
            score = score + points;
        }
        console.log(newJGItem.value)
        console.log(points);
        console.log(`Score: ${score}`);
        scoreHeader.innerText = `Your Score: ${score}`;
        inputText.value = '';

    });
}    

readJeopardyData();






// function createJeopardyGridItem(data, i){
//     jeopardyGridItem = {
//         question: data.question,
//         answer: data.answer,
//         value: data.value,
//         gridLocation: i
//     };
// }




const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}