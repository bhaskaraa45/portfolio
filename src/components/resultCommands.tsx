import React from "react";
import '../styles/terminal.css'

interface CommandResultProps {
    CommandWidget: JSX.Element;
    Result: JSX.Element;
}

function CommandResult({ CommandWidget, Result }: CommandResultProps) {
    return (
        <div>
            {CommandWidget}
            {Result}
            <div className="gap"></div>
        </div>
    );
}

export default CommandResult;
