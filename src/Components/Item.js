import React from 'react'
import './styles.css'


const Item = ({Icon,title,avatar}) => {
    return (
        <div className='item'>
             {Icon &&<Icon className="HeaderOption_icon"/> }
              {avatar && <avatar className="HeaderOption_icon" src={avatar}/>}
              <h4 className="HeaderOption_Title">{title}</h4>
        </div>
    )
}

export default Item
