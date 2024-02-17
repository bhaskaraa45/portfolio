import { useState, useEffect } from 'react';
import '../styles/terminal.css';
import CommandInput from './commandInput.tsx';
import ListOfCommands from './listOfCommands.tsx'

function Terminal() {
    return (
        <div>
            <div className="terminal">
                <div className="topbar"></div>
                <ListOfCommands />
            </div>
        </div>
    );
}

export default Terminal;
