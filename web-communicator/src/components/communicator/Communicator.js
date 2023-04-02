import logo from './logo.svg';
import "./Communicator.css";

function Communicator(){
    return (
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //         Edit <code>src/App.js</code> and save to reload.
        //         </p>
        //         <a
        //         className="App-link"
        //         href="https://reactjs.org"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         >
        //         Learn React - from communicator
        //         </a>
        //     </header>
        // </div>

        // communicator alias c
        <div className="c_container">
            <div className="c_messages">
                <div className="c_message">
                    <p className="c_guest-message">Hej, co słychać?</p>
                </div>
                <div className="c_message">
                    <p className="c_own-message">Hej, u mnie super a u cb?</p>
                </div>
                <div className="c_message">
                    <p className="c_guest-message">Hej, co słychać?</p>
                </div>
                <div className="c_message">
                    <p className="c_own-message">Hej, u mnie super a u cb?</p>
                </div>
                <div className="c_message">
                    <p className="c_guest-message">Hej, co słychać?</p>
                </div>
                <div className="c_message">
                    <p className="c_own-message">Hej, u mnie super a u cb?</p>
                </div>
                <div className="c_message">
                    <p className="c_own-message">Hej, u mnie super a u cb?</p>
                </div>
                <div className="c_message">
                    <p className="c_own-message">Hej, u mnie super a u cb?</p>
                </div>
            </div>
            <div className="c_create-message-area">
                <div className="c_text-area">
                    <input type="text"></input>
                    {/* more in feature */}
                </div>
                <div className="c_send-btn">Send</div>
            </div>
        </div>
    );
}

export default Communicator;