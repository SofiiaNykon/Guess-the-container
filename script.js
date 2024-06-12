function CardsContainer(index, isWinning){
this.index = index;
this.isWinning = isWinning;
this.handleTry(square ,attemt, squareContainer){
    if(this.isWinning){
        alert("You guess correct");
        square.classList.add("square-correct")
    }else if(attemt === 3){
squareContainer.innerHTMl = null;
return;
    }
    alert("It is wrong");
    square.classList.add("square-wrong")
}
}
const card = [
    new CardsContainer(3, false),
    new CardsContainer(2, false),
    new CardsContainer(5, false),
    new CardsContainer(1, false),
    new CardsContainer(9, false),
    new CardsContainer(4, false),
    new CardsContainer(7, false),
    new CardsContainer(12, false),
    new CardsContainer(11, false),
    new CardsContainer(6, false),
    new CardsContainer(8, false),
    new CardsContainer(13, false),
]
function renderSquares(squares){
    let attemt = 0;
    const squareContainer = document.querySelector(".squares-container");
    squares.forEach((item)=>{
        const 
    })
}