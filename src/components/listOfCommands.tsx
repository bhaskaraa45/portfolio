import React, { useState } from "react";
import CommandInput from "./commandInput.tsx";

function ListOfCommands() {
    const [inputText, setInputText] = useState('');
    const [commands, setCommands] = useState<JSX.Element[]>([]);

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

    const avlblCommands = ["help", "cd", "ls", "cat", "sudo"];

    const handleCommand = (command: string) => {
        const arr = command.split(" ");
        if (avlblCommands.includes(arr[0])) {
            if (arr[0] === "help") {
                handleHelpCommand();
            }
        } else {
            console.log("Command not found");
        }

        setCommands(prevCommands => [
            ...prevCommands,
            <CommandInputDisable key={command} inputText={command} inputStyle={inputStyle} />
        ]);
    };

    const handleHelpCommand = () => {
        // Implement help command logic if needed
    };

    return (
        <div className="command-list">
            {commands}
            <CommandInput
                inputText={inputText}
                handleInputChange={handleInputChange}
                handleInputSubmit={handleInputSubmit}
                inputStyle={inputStyle}
                isDisable={false}
            />
        </div>
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
