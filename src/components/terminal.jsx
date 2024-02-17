import { useState, useEffect } from 'react';
import '../styles/terminal.css';
import CommandInput from './commandInput.tsx';
import ListOfCommands from './listOfCommands.tsx'

function Terminal() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className="terminal">
                <div className="topbar"></div>
                <ListOfCommands />

                {/* <CommandInput
                    inputText={inputText}
                    handleInputChange={handleInputChange}
                    handleInputSubmit={handleInputSubmit}
                    inputStyle={inputStyle}
                    isDisable={false}
                /> */}

            </div>
        </div>
    );
}

export default Terminal;
