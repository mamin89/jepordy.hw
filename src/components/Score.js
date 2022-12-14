import { useState } from 'react';
import react from 'react'

const Score = () => {
    const [score, setScore] = useState(100)

        const decNum = () => {
            setScore(score-100);
        };
        const incNum = () => {
            setScore(score+100) };

            const Reset = () => {
                setScore(score-score) };


    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <h1>{score}</h1>
                
                <div className="btn_div">
                    <button onClick={decNum}>Decrement</button>
                    <button onClick={incNum}>increment</button>
                    <button onClick={Reset}>Reset</button>
                    



                </div>
            </div>
        </div>
        
        
        
        
        </>



    )
}
export default Score