const screen = document.getElementById("screen");
screen.value = "0";

function showScreen(input)
{
    if(screen.value==0)
    {
        screen.value="";
        screen.value += input;
    }
    else
    {
        screen.value += input;
    }
}

function clearScreen()
{
    screen.value = "0";
}

function calculate()
{
    screen.value = eval(screen.value);

}

function invertNumber()
{
    screen.value = (screen.value*-1);
}