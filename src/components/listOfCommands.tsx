import React, { useState, useEffect } from "react";
import CommandInput from "./commandInput.tsx";
import CommandResult from "./resultCommands.tsx";
import CommandNotFound from "./commandNotExists.tsx";

function ListOfCommands() {
    const [inputText, setInputText] = useState('');
    const [commands, setCommands] = useState<JSX.Element[]>([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isClear, setClear] = useState(false);

    const inputStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#fff',
        outline: 'none',
        fontFamily: 'Kode Mono, monospace',
        fontSize: '18px',
        fontWeight: '500',
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleInputSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleCommand(inputText);
            setInputText('');
        }
    };

    const avlblCommands = ["help", "cd", "ls", "cat", "sudo", "clear"];

    const handleCommand = (command: string) => {
        if (command.trim().length == 0) {
            setCommands(prevCommands => [
                ...prevCommands,
                <CommandResult
                    CommandWidget={<CommandInputDisable inputStyle={inputStyle} inputText={command} />}
                    Result={<div></div>}
                />
            ]);
            return;
        }
        const arr = command.split(" ");
        if (avlblCommands.includes(arr[0])) {
            switch (arr[0]) {
                case "help":

                    break;
                case "clear":
                    setCommands([])
                    setClear(true);
                    break;

                default:
                    break;
            }

        } else {
            console.log("Command not found");
            setCommands(prevCommands => [
                ...prevCommands,
                <CommandResult
                    CommandWidget={<CommandInputDisable inputStyle={inputStyle} inputText={command} />}
                    Result={<CommandNotFound command={command} />}
                />
            ]);
        }
    };

    const handleHelpCommand = () => {
        // Implement help command logic if needed
    };

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
        <>
            <div className="command-list">
                <div className={isClear ? 'welcomeText hide' : 'welcomeText'} >
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
                {commands}
                <CommandInput
                    inputText={inputText}
                    handleInputChange={handleInputChange}
                    handleInputSubmit={handleInputSubmit}
                    inputStyle={inputStyle}
                    isDisable={false}
                />
            </div>
        </>

    );
}

function CommandInputDisable({ inputText, inputStyle }: { inputText: string, inputStyle: React.CSSProperties }) {
    return (
        <div className='main'>
            ┌──(bhaskar-aa45㉿portfolio)-[~] <br />
            └─$ <input
                disabled={true}
                autoComplete='off'
                type='text'
                style={inputStyle}
                value={inputText}
            />
        </div>
    );
}

export default ListOfCommands;
