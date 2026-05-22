import React from 'react'

    
export default function Meme(){
    
     const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    
    
    const [allMemes, setAllMemes] = React.useState({})
    
    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res=> res.json())
            .then(data =>setAllMemes(data.data.memes))
    }, [])
    
    
    
    
    function getMemeImage() {
        
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))    
    }
    
    function handleChange(event){
        const{name, value, type} = event.target
        setMeme(prevMeme =>{
            return {
               ...prevMeme, 
               [name]: value
            }           
        })
    }
    
    return(
        <main>
            <div className='form'>
                <div className='input-section'>
                    <input 
                    type='text' 
                    className='form-title' 
                    placeholder='shut up'
                    onChange={handleChange}
                    name='topText'
                    value={meme.topText}
                    />
                    <input 
                    type='text' 
                    className='form-text' 
                    placeholder='and take my money'
                    onChange={handleChange}
                    name='bottomText'
                    value={meme.bottomText}
                    />
                </div>
                <button onClick={getMemeImage} className='form-btn'>Get a new meme image  🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-img" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}