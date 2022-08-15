import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const createNewRoom = (event) => {
    event.preventDefault();
    const roomId = uuid();
    setRoomId(roomId);
    toast.success("Created New Room");
  };
  const joinRoom = () => {
    if (!roomId || !userName) {
      toast.error("Room Id & Username is required");
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  };
  const handleInputEnter = (event) => {
    if (event.code === "Enter") {
      joinRoom();
    }
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/logo.png" alt="code-sync-logo" />
        <h4 className="mainLabel">Paste Invitation Room Id</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            value={userName}
            onKeyUp={handleInputEnter}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="btnGroup">
            <button className="btn homeBtn" onClick={joinRoom}>
              Join
            </button>
            <button className="btn homeBtn" onClick={createNewRoom}>
              Create
            </button>
          </div>
        </div>
      </div>
      <footer>
        Built By&nbsp;
        <a href="https://github.com/PrashantAghara">Prashant Aghara</a>
      </footer>
    </div>
  );
};

export default Home;
