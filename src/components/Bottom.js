import React, { useEffect, useState } from 'react'
import "./Bottom.css"
import {data} from "./data/users";

const Bottom = () => {

  const [usersData, setUserData] = useState([]);
  const [name, setName] = useState("");
  
  const getData = data.map((data) => {
      return (
        <div className='msg-card' key={data.id}>
          <div className='msg-img'>
            <img src={data.image} alt="avt-img" />
          </div>
          <div className="msg-cont">
            <p className='msg-user'>
              {data.name}
            </p>
            <p className='msg-text'>
              {data.lastMsg}
            </p>
          </div>
          <div className="msg-time">
            <p className='last-seen'>
              {data.lastSeen}
            </p>
            <div className="unread">
              {data.unread === '0' ? <p className='turn'><i className="fa-solid fa-paper-plane"></i> your turn</p> : <p>{data.unread}</p>}
            </div>
          </div>
        </div>
      )
    })

  useEffect(() => {
    setUserData(getData);
  }, [])

  const handleChange = (e) => {
    let val = (e.target.value);
    setName(val);
    const res = data.filter((user) => {
      return user.name.toLowerCase().includes(val.toLowerCase())
    })
    
    const searchData = res.map((data) => {
      return (
        <div className='msg-card' key={data.id}>
          <div className='msg-img'>
            <img src={data.image} alt="avt-img" />
          </div>
          <div className="msg-cont">
            <p className='msg-user'>
              {data.name}
            </p>
            <p className='msg-text'>
              {data.lastMsg}
            </p>
          </div>
          <div className="msg-time">
            <p className='last-seen'>
              {data.lastSeen}
            </p>
            <div className="unread">
              {data.unread === '0' ? <p className='turn'><i className="fa-solid fa-paper-plane"></i> your turn</p> : <p>{data.unread}</p>}
            </div>
          </div>
        </div>
      )
    })

    setUserData(searchData);
  }

  return (
    <div className='bottom-container'>
      <div className="bottom-cont-div-1">
        <p className='msg-head'>Messages <span className='msg-cnt'>1</span></p>
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass" />
          <input type="text" value={name} onChange={handleChange} name="search-bar" id="search-bar" placeholder='Search'/>
        </div>
      </div>
      <div className="bottom-cont-div-2">
        {usersData.length > 0 ? usersData : <p className='no-user'>No Conversations</p>}
      </div>
    </div>
  )
}

export default Bottom
