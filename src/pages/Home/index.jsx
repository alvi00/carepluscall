import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"; // Importing the CSS file

const HomePage = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        if (value.trim()) {
            navigate(`/room/${value}`);
        } else {
            alert("Please enter a valid room code!");
        }
    }, [navigate, value]);

    return (
        <div className="home-page">
            {/* Left Section */}
            <div className="left-section">
                <div className="form-container">
                    <h1 className="form-title">Join a Room</h1>
                    <form className="form">
                        <input
                            className="form-input"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            type="text"
                            placeholder="Enter the Room Code"
                        />
                        <button
                            className="form-button"
                            type="button"
                            onClick={handleJoinRoom}
                        >
                            Join Room
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Section */}
            <div className="right-section">
                <iframe
                    src="https://lottie.host/embed/9d32af42-fd42-47be-a642-2f2810f5858c/GRwTw5yB0l.json"
                    title="Lottie Animation"
                    style={{
                        border: "none",
                        height:"500px",
                        width:"500px",
                        background:"transparent"
                    }}
                ></iframe>
            </div>
        </div>

    );
};

export default HomePage;
