import React from "react";

function CatFileNotFound({fileName} : {fileName: string}) {
    return (
        <div className="notFound">
            <b>{fileName}</b>: No such file or directory
        </div>
    );
}

function NoFileMentioned() {
    return (
        <div className="notFound">
            Please specify file or directory
        </div>
    );
}

export default CatFileNotFound
export {NoFileMentioned}