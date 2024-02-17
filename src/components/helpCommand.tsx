import React from "react";

function HelpCommandResult() {
    const commands = [
        "ls", "cat", "sudo", "./<path>", "clear", "help"
    ];

    return (
        <div className="helpResult">
            Available commands: <br />
            <dl className="helpCommands">
                {commands.map((command, index) => (
                    <dd key={index}>
                        <i>{command}</i>
                    </dd>
                ))}
            </dl>
        </div>
    );
}

export default HelpCommandResult;
