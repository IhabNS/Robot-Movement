var robot = document.querySelector(".robotS");
var counter = document.querySelector(".turn");
var xyCoord = document.querySelector(".coord");

document.addEventListener("keydown", moveRobot);
function moveRobot(direction)
{
    switch (direction.key) {
        case "w":
        moveUp();
            break;
        
        case "s":
        moveDown();
            break;
    
        case "d":
        moveRight();
            break;

        case "a":
        moveLeft();
            break;

        default:
            break;
    }
}

var xPos = 7;
var yPos = 7;
var turn = 0;

function updateInfo()
{
    turn++;
    counter.innerHTML = `${turn}`;
    xyCoord.innerHTML = `(${xPos}, ${yPos})`;
}

function moveRight()
{
    if(xPos < 13)
    {
        xPos++;
        robot.style.gridColumn = `${xPos}`;
        console.log(xPos, yPos);
        updateInfo();        
    }
    
    else
    {
        console.log("Wall Ahead!")
    }
}

function moveLeft()
{
    if(xPos > 1)
    {
        xPos--;
        robot.style.gridColumn = `${xPos}`;
        console.log(xPos, yPos);
        updateInfo();
    }

    else
    {
        console.log("Wall Ahead!")
    }    
}

function moveUp()
{
    if(yPos > 1)
    {
        yPos--;
        robot.style.gridRow = `${yPos}`;
        console.log(xPos, yPos);
        updateInfo();
    }

    else
    {
        console.log("Wall Ahead!")
    }
}

function moveDown()
{
    if(yPos < 13)
    {
        yPos++;
        robot.style.gridRow = `${yPos}`;
        console.log(xPos, yPos);
        updateInfo();
    }

    else
    {
        console.log("Wall Ahead!")
    }
    
}