import { useState, useEffect } from 'react';
import '../styles/terminal.css';
import CommandInput from './commandInput.tsx';
import ListOfCommands from './listOfCommands.tsx'

function Terminal() {
    return (
        <div>
            <div className="terminal">
                <div className="topbar">
                    <div className='topbardots'>
                        <span class="topbardot1"></span>
                        <span class="topbardot2"></span>
                        <span class="topbardot3"></span>
                    </div>
                </div>
                <ListOfCommands />
            </div>
        </div>
    );
}

export default Terminal;
