import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    // keeps typed todo inside input while on change mode
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    // make input focus 
    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    })

    // type text into input
    const handleChange = e => {
        setInput(e.target.value)
    }

    // prevent page from refreshing after clicking btn
    const handleSubmit = e => {
      e.preventDefault();

    // generates random number within 10000 or less rage - id 
     props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
     });

    // makes input invisible after clicking btn  
      setInput('')
    };

    return (
        <div>
           <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-btn edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-btn'>
            Add todo
          </button>
        </>
      )}
    </form>
        </div>
    )
}

export default TodoForm;
