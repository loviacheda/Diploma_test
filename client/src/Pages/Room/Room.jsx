import React, { useEffect, useReducer, useState } from "react";
import "./Room.css";
import { Table } from "./components/RoomTable";
import axios from "axios";



function Room() {
  const [err, setError] = useState(null);
  const [roomData, setRoomData] = useState(null);
  const [rows] = useState([
    {
      name: "Table 1",
      reference: "http://link1",
      type: "Personal",
    },
    {
      name: "Table 2",
      reference: "http://link2",
      type: "Personal",
    },
    {
      name: "Table 3",
      reference: "http://link3",
      type: "Shared",
    },
    {
      name: "Table 4",
      reference: "http://link4",
      type: "Personal",
    },
  ]);

  useEffect(() => {
    axios.get("/rooms").then((res) => {
      setRoomData(res.data);
    }).catch((problem) => {
      setError(problem);
    })
  }, []);

  if(!err && !roomData){
    return(<div></div>);
  }

  if(err){
    return(
      <div>
        Unathorized access!
      </div>
    );
  } 

  const SidebarData = [
    {
      title: "Home1"
    },
    {
      title: "Home2"
    },
    {
      title: "Home4"
    },
  ]

  const NavbarData = [
    {
      title: "Create Workspace"
    },
    {
      title: "Create Table"
    },
  ]

  return(
    <div className="Room">
      <div className="Navbar">
        <div className="navBrend">
          Traing <b>Diary</b>
        </div>
        <div className="navList">
          {NavbarData.map((val, key) => {
            return (
              <li className="nav_elem" key={key}>
                <div>{val.title}</div>
              </li>
            );
          })}
        </div>
        <div className="action-button">
          Logout
        </div>
      </div>
      <div className="Body">
        <div className="Sidebar">
          <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li className="side_elem" key={key}>
                {" "}
                <div>{val.title}</div>
              </li>
            );
          })}
          </ul>
        </div>
        
        <div className="Main">
          <Table rows={rows} />
        </div>
      </div>
    </div>
    
  );

}

export default Room;
