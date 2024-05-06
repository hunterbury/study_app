import React from 'react';
import { useState} from 'react'

const Note = () => {
    const [text, setText] = useState('hello');

    function handleChange(e) {
        setText(e.target.value);
    }

  return (
    <div className='note'>
        <textarea value={text} onChange={handleChange} />
        <p>You typed: {text}</p>
        <button onClick={() => setText('hello')}>
            Save
        </button>   
     </div>
  )
}

export default Note