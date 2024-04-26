import React from 'react'
import './MyWork.css'
import theme from '../assests/theme_pattern.svg'
import my_data from '../assests/mywork_data'
import arrow from '../assests/arrow_icon.svg'
export default function MyWork() {
  return (
    <div className='mywork' id='work'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme} alt="" />
        </div>
                <div className="mywork-container">
                   {my_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt="" />
                   })}
                </div>
<div className="show-more">
    Show More
<img src={arrow} alt="" />
</div>
    </div>
  )
}
