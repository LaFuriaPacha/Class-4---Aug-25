function changeBackgroundColor(){
    document.body.style.backgroundColor = 'rgb('+ Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' +  Math.round(Math.random() * 255) + ')';

}


function changeTextColor() {
    document.getElementById('btn').style.color = randomColors();
  }
  
  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

// //who 
// const colorChangeBtn = document.querySelector("button");
// const text = document.querySelector("h1");
// const bodyEl = document.body
// //what
// function changeClolors
// text.style.color = generateRandomColor();
// bodyEl.style.backgroundColor = generateRandomColor();
// function generateRandomColor() {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     return "#" + randomColor;

// }
// //when
// colorChangeBtn.addEventListener("click", colorChangeBtn() )


