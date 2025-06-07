import { useState } from "react";

function Counter()
{
    const [count, setCount] = useState(0)

    function getRandomColor(){ //a function for a random color using hexcodes
        const letters = "123456789ABCDEF";
        let color = "#";
        for(let i = 0; i<6; i++)
        {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function handleCountChange(change){ //a function that handles the current count change
        setCount(prev =>{
            const newCount = prev + change;
            if(newCount === 0)
            {
                return newCount;
            }

            if(newCount % 2 === 0)
            {
                document.body.style.backgroundColor = getRandomColor();
            }

            return newCount;
        });
    }

    return(
        <div className="Counter">
            <h1>CLICK</h1>
            <p>Just click me</p>
            <button className="button1" onClick={ () => handleCountChange(-1)}>-</button>
            <span className="num">{count}</span>
            <button className="button2" onClick={() => handleCountChange(1)}>+</button>
        </div>
    );
}

export default Counter