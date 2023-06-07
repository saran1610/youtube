import React from 'react'


function Recommendvideo({thumbnail,title,channel,views,uploadtime}) {
  return (
    <div>
        <div className='d-flex mb-4 gap-3'>

       
      <img src={thumbnail} alt="" width={"200px"} height={"auto"} />
      <div>
        <h6>
            {
                title.length<=70? title :`${title.substr(0,60)}...`
            }
        </h6>
        <span className='recommendsize' >{channel}</span>
        <div className='d-flex' style={{fontSize:"14px"}}>
            <span >{views} views &nbsp;</span> . 
            <span>&nbsp;{uploadtime}</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Recommendvideo
