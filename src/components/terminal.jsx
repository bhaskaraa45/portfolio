import { useState, useEffect } from 'react';
import '../styles/terminal.css';
import CommandInput from './commandInput.tsx';
import ListOfCommands from './listOfCommands.tsx'

function Terminal() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const inputStyle = {
    //     backgroundColor: 'transparent',
    //     border: 'none',
    //     color: '#fff',
    //     outline: 'none',
    //     fontFamily: 'Kode Mono, monospace',
    //     fontSize: '18px',
    //     fontWeight: '500',
    // };

    // const handleInputChange = (event) => {
    //     setInputText(event.target.value);
    // };

    // const handleInputSubmit = (event) => {
    //     if (event.key === 'Enter') {
    //         // console.log(inputText);
    //         handleCommand(inputText);
    //         setInputText('');
    //     }
    // };

    // const avlblCommands = ["help", "cd", "ls", "cat", "sudo"];

    // const handleCommand = (command) => {
    //     const arr = command.split(" ");
    //     if (avlblCommands.includes(arr[0])) {
    //         // console.log(arr[0]);
    //         if (arr[0] === "help") {
    //             handleHelpCommand();
    //         }
    //     } else {
    //         console.log("Command not found");
    //     }

    //     var text = new String(command);

    //     AddToTheList({ text, inputStyle })
        

    // };

    // const handleHelpCommand = () => {

    // };

    return (
        <div>
            <div className="terminal">
                <div className="topbar"></div>

                <div className='welcomeText'>
                    {windowWidth > 900 ? (
                        <p>
                            ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓<br />
                            <br />
                            Welcome to <i>CLI Version</i> of my Portfolio<br />
                            Run: <i>"help"</i> to see all commands<br />
                            <br />
                            ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛<br />
                        </p>
                    ) : (
                        <p>
                            ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓<br />
                            <br />
                            Welcome to <i>CLI Version</i> of my Portfolio<br />
                            Run: <i>"help"</i> to see all commands<br />
                            <br />
                            ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛<br />
                        </p>
                    )}
                </div>

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
