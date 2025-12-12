import React, { useEffect, useState } from 'react'
import Card from './Card';


const CardGrid = ({level, setScore, setDivState}) => {
    const [cards, setCards] =useState([]);
    const [clickedCards, setClickedcards] = useState([]);

    const shuffleArray = (array) => {

        const newArray = [...array];
        let CurrentIndex = newArray.length, randomIndex;

        while (CurrentIndex !== 0){
            randomIndex = Math.floor(Math.random() * CurrentIndex);
            CurrentIndex--;
            [newArray[CurrentIndex], newArray[randomIndex]]=[newArray[randomIndex], newArray[CurrentIndex]];

            

        }

        return newArray;

    };
    
    const handleClick = (id) =>{
        //Lose - miss click
        if(clickedCards.includes(id)){
            setClickedcards([]);
            setScore(0);
            setDivState(1);
                                 setTimeout(() => {
                    setDivState(0);
                }, 3000);
            setCards(shuffleArray(cards));
            return;
        }else{
            setClickedcards(prev => [...prev, id]);
            setScore(prev => prev + 1);
            if (clickedCards.length + 1 === level) {
                setDivState(2); // win
                        setTimeout(() => {
                    setDivState(0);
                }, 3000);
                return;
            }
            setCards(shuffleArray(cards));
        }


    }; 


    useEffect(() => {
        const fetchData = async () => {
        if (!level) return;
            try{
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${level}&offset=0`);
                if(!res.ok){
                    console.log("error");
                    return;
                }
                const result = await res.json();

                let fetchedCards = result.results.map((pokemon, index) => ({
                    id: index,
                    name: pokemon.name,
                    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`,
                }));

                //setCards(fetchedCards);
                setCards(shuffleArray(fetchedCards));
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    }, [level]);


    
    return (
    <div className='cards-main'>
        <div className={`cards-grid-${level}`}>
            {cards.map((card) => (
                <Card 
                    key={card.id} 
                    imgP={card.img} 
                    nameP={card.name} 
                    onClick={() => handleClick(card.id)} 
                /> 
            ))}
        </div>
         
         
    </div>

    )
}

export default CardGrid
