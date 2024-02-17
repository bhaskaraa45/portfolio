import React from "react";
import '../styles/terminal.css'

function CommandNotFound({command}: {command: string}) {
    return (
        <div className="notFound">
            <b>{command}</b>: command not found
        </div>
    );
}

export default CommandNotFound;