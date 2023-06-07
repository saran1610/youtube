import React, { useState } from 'react'
import { SidebarItems } from '../Static/data'
import "./sidebar.scss"

const Sidebar = () => {
    const [active,setactive]= useState("Home")
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
            <div className=" sidenav">
                <div>
                {SidebarItems.Top.map((item,index)=>{
                    return(
                        <div key={index} onClick={()=> setactive(item.name)} className={`d-flex align-items-center ${item.name==active ? "bgcolor" : "bgfalse"} `}>
                            <a href="">
                                <span className='me-3 d-inline-block icon'>{item.icon}</span>
                                <span>{item.name}</span>
                            </a>
                        </div>
                    );
                })}
                </div>
              
           <hr />
            <div >
                {SidebarItems.Middle.map((item,index)=>{
                    return(
                        <div key={index} onClick={()=> setactive(item.name)} className={`d-flex align-items-center ${item.name==active ? "bgcolor" : "bgfalse"} `}>
                            <a href="" >
                                <span className='me-3 d-inline-block icon'>{item.icon}</span>
                                <span>{item.name}</span>
                                </a>
                           
                           
                        </div>
                    );
                })}
            </div><hr />
            <div >
                {SidebarItems.Explore.map((item,index)=>{
                    return(
                        <div key={index} onClick={()=> setactive(item.name)} className={`d-flex align-items-center ${item.name==active ? "bgcolor" : "bgfalse"} `}>
                            <a href=""  >
                            <span className='me-3 d-inline-block icon'>{item.icon}</span>
                            <span>{item.name}</span>
                             </a>
                           
                           
                        </div>
                    );
                })}
            </div>
            </div>
            <div className="col-10"></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
