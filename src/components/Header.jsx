import React, {useEffect, useState} from 'react'

const Header = ({setLevel, score, divState}) => {
    const [selectedLevel, setSelectedLevel] = useState(6);
    const [bestScore, setBestScore] = useState(0);
    
    const handleSelect = (e) => {
        setSelectedLevel(Number(e.target.value));
    };

    const Apply = () => {
        setLevel(selectedLevel);   
    };

    useEffect(() => {
        const updateBest = async () => {
            if (!score) return;

            try{

                if(score>bestScore){
                    setBestScore(score);
                }else{
                    return;
                }

            }catch(err){
                console.log(err);
            }

        }
        updateBest();
    }, [score]);

  return (
    <div className='Header-main'>
        <div className='Header-texts'>
            <h2>Memory Game</h2>
            
            {divState === 1 && (
                <div className='message'>
                    
                    <p><span className={`divState-${divState}`}>You Lose </span> Clicked a repeated card</p>
                    
                </div>
            )}

            {divState === 2 && (
                <div className='message'>
                    
                    <p><span className={`divState-${divState}`}>You Win </span> All cards selected</p>
                    
                </div>
            )}
        
        </div>


        <div className='Header-level'>

            <div className="controls-container">
                <select onChange={handleSelect} value={selectedLevel} >
                    <option value={6}>Easy</option>
                    <option value={8}>Intermediate</option>
                    <option value={12}>Hard</option>
                </select>
                <button onClick={Apply}>
                    Generate
                </button>
            </div>

            <div className='scores'> 
                <p>Current score: {score}</p>
                <p>Best score: {bestScore}</p>
            </div>




        </div>
        

    </div>
  )
}

export default Header
