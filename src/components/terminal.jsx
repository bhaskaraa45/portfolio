import { useState, useEffect } from 'react';
import '../styles/terminal.css';

function Terminal(params) {
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

    const inputStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#fff',
        outline: 'none', 
        fontFamily: 'Kode Mono, monospace',
        fontSize: '18px',
        fontWeight: '500',
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleInputSubmit = (event) => {
        if (event.key === 'Enter') {
            console.log(inputText);
            setInputText('');
        }
    };

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

                <div className='main'>
                    ┌──(bhaskar-aa45㉿portfolio)-[~] <br />
                    └─$ <input 
                            autoComplete='off' 
                            type='text' 
                            style={inputStyle} 
                            value={inputText}
                            onChange={handleInputChange}
                            onKeyDown={handleInputSubmit} 
                        />
                </div>
            </div>
        </div>
    );
}

export default Terminal;
