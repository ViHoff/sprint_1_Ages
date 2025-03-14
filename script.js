const screen = document.getElementById("screen");
screen.value = "0";

screen.addEventListener('input', checkNumberLength);

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
    if(screen.value.includes("+","-","/","*"))
    {
        screen.value = "Error";
    }
    else
    {
        screen.value = (screen.value*-1);
    }    
}

function percentage()
{
    screen.value = eval(screen.value / 100);
}

/**function checkNumberLength() 
{
    let length = screen.value.length;
    const maxDigits = 12;
    const baseFontSize = 3; 
    const minFontSize = 2;  

    if (length > maxDigits) 
    {
        let fontSize = baseFontSize - (length - maxDigits) * 0.1;
        fontSize = Math.max(fontSize, minFontSize);
        screen.style.fontSize = `${fontSize}rem`;
    } 
    else 
    {
        screen.style.fontSize = `${baseFontSize}rem`;
    }
}
*/
