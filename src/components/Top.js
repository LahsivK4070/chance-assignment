import React from 'react'
import { connData } from './data/newConn';
import "./Top.css";

const Top = () => {
  return (
    <div className='top-container'>
        <div className='top-cont-div-1'>
              <p>New Connections <span className='conn-cnt'>2</span></p>
          </div>
          <div className="top-cont-div-2">
            {connData.map((data) => {
                return (
                    <div className='new-conn-div' key={data.id}>
                    <img src={data.image} alt="conn-img" />
                    {data.active && <span className='act'></span>}
                    <p>{ data.name }</p>
                    </div>
                )
            })}
          </div>
    </div>
  )
}

export default Top
