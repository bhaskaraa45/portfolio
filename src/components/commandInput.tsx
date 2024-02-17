import '../styles/terminal.css';
import React from 'react';

function CommandInput({ inputText, handleInputChange, handleInputSubmit, inputStyle , isDisable}) {
    return (
        <div className='main'>
            ┌──(bhaskar-aa45㉿portfolio)-[~] <br />
            └─$ <input
                disabled={isDisable}
                autoComplete='off'
                type='text'
                style={inputStyle}
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleInputSubmit}
            />
        </div>
    );
}

export default CommandInput;