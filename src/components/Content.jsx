import React, { useState } from 'react';

const Content = () => {
    const [text, setText] = useState('')
    const [displayedText, setDisplayedText] = useState('');
  
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayedText(text);
        setText('');
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                         <textarea
                        rows="4"
                        cols="50"
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                ></textarea>
                <br></br>

                <button>Click</button>
            </form>
            <p>{displayedText}</p>
            
        </div>
    );
};

export default Content;