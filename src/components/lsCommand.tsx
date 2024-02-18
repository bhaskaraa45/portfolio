import React from "react";

function LsCommandHandle() {
    const content = [
        "about", "contact", "education", "experience", "projects", "resume"
    ];
    var temp = "\"./<path>\""
    return (
        <div className="lsResult">
            <dl className="lsCommands">
                {content.map((con, index) => (
                    <dd key={index}>
                        {con}
                    </dd>
                ))}
            </dl>
            <div className="lsInstruction">
                Use <i>"cat"</i> to see the contents<br/>
                Or run <i>{temp}</i> to open specific page
            </div>
        </div>
    );
}

export default LsCommandHandle;