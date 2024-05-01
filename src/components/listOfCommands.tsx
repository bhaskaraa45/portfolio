import React, { useState, useEffect, useRef } from "react";
import CommandInput from "./commandInput.tsx";
import CommandResult from "./resultCommands.tsx";
import CommandNotFound from "./commandNotExists.tsx";
import HelpCommandResult from "./helpCommand.tsx";
import LsCommandHandle from "./lsCommand.tsx";
import CatFileNotFound, { NoFileMentioned } from "./catFileNotFound.tsx";
import AboutCommandResult from "./aboutCommand.tsx";

function ListOfCommands() {
    const [inputText, setInputText] = useState('');
    const [commands, setCommands] = useState<JSX.Element[]>([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isClear, setClear] = useState(false);
    const endOfCommandsRef = useRef<HTMLDivElement>(null);

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
    const content = [
        "about", "contact", "education", "experience", "projects", "resume"
    ];

    const handleCommand = (command: string) => {
        if (command.trim().length === 0) {
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
        if (avlblCommands.includes(arr[0]) || arr[0].startsWith("./")) {
            switch (arr[0]) {
                case "help":
                    handleHelpCommand();
                    break;
                case "clear":
                    setCommands([])
                    setClear(true);
                    break;
                case "ls":
                    handleLsCommand();
                    break;
                case "cat":
                    handleCatCommand(command);
                    break;
                case "./resume":
                    handleResumeCommand("./resume");
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

    const handleCatCommand = (cmd: string) => {
        const arr = cmd.split(" ");
        if (arr.length === 1) {
            setCommands(prevCommands => [
                ...prevCommands,
                <CommandResult
                    CommandWidget={<CommandInputDisable inputStyle={inputStyle} inputText={"cat"} />}
                    Result={<NoFileMentioned />}
                />
            ]);
        } else if (arr[1].length === 0) {
            setCommands(prevCommands => [
                ...prevCommands,
                <CommandResult
                    CommandWidget={<CommandInputDisable inputStyle={inputStyle} inputText={"cat"} />}
                    Result={<NoFileMentioned />}
                />
            ]);
        } else {
            if (!content.includes(arr[1])) {
                setCommands(prevCommands => [
                    ...prevCommands,
                    <CommandResult
                        CommandWidget={<CommandInputDisable inputStyle={inputStyle} inputText={cmd} />}
                        Result={<CatFileNotFound fileName={arr[1]} />}
                    />
                ]);
            } else {

                switch (arr[1]) {
                    case "resume":
                        handleResumeCommand("cat resume")
                        break;
                    default:
                        break;
                }

                // setCommands(prevCommands => [
                //     ...prevCommands,
                //     <CommandResult
                //         CommandWidget={<CommandInputDisable inputStyle={inputStyle} inputText={cmd} />}
                //         Result={<AboutCommandResult />}
                //     />
                // ]);
            }
        }
    }

    const handleResumeCommand = (cmd: string) => {
        setCommands(prevCommands => [
            ...prevCommands,
            <CommandResult
                CommandWidget={<CommandInputDisable inputStyle={inputStyle} inputText={cmd} />}
                Result={<div></div>}
            />
        ]);
        openInNewTab("https://raw.githubusercontent.com/bhaskaraa45/bhaskaraa45/main/resume.pdf")
    };

    const handleHelpCommand = () => {
        setCommands(prevCommands => [
            ...prevCommands,
            <CommandResult
                CommandWidget={<CommandInputDisable inputStyle={inputStyle} inputText={"help"} />}
                Result={<HelpCommandResult />}
            />
        ]);
    };

    const handleLsCommand = () => {
        setCommands(prevCommands => [
            ...prevCommands,
            <CommandResult
                CommandWidget={<CommandInputDisable inputStyle={inputStyle} inputText={"ls"} />}
                Result={<LsCommandHandle />}
            />
        ]);
    }

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);
    useEffect(() => {
        if (endOfCommandsRef.current) {
            endOfCommandsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [commands]);

    function openInNewTab(url: string) {
        var win = window.open(url, '_blank');
        // win!.focus();
    }

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
                <div ref={endOfCommandsRef} />
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
