import React, {useState} from 'react';

function TodoForm(props) {

    const [input, setInput] = useState('');

    // type text into input
    const handleChange = e => {
        setInput(e.target.value)
    }

    // prevent page from refreshing after clicking btn
    const handleSubmit = e => {
      e.preventDefault();

    // generates random number within 10000 or less rage - id 
    //  props.onSubmit({
    //      id: Math.floor(Math.random() * 10000),
    //      text: input
    //  });

    // makes input invisible after clicking btn  
      setInput('')
    };

    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Add a todo" 
                  value={input} 
                  name="text" 
                  className="todo-input"
                  onChange={handleChange}
                />
            <button className='todo-btn'>button</button>
            </form>
        </div>
    )
}

export default TodoForm;
