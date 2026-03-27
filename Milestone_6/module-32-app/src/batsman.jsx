import { useState } from "react"

export default function Batsman () {
    const [runs, setRuns] = useState(0);
    const handleSingle = () => {
        const updateRun = runs + 1;
        setRuns(updateRun);
    }
    const handleSix = () => {
        const updateRun = runs + 6;
        setRuns(updateRun);
    }
    const handleFour = () => {
        const updateRun = runs + 4;
        setRuns(updateRun);
    }
    return (
        <div>
            <h3>Player: Bangladeshi batsman</h3>
            {
                runs > 50 && <p>Your Score: 50</p>
            }
            <h1>Score: {runs} </h1>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}