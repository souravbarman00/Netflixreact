import React from 'react'
import "./Style/Card.scss"
const Card = ({img,name}) =><div className='container'><img className="card" src={img} alt="cover" />
<div class="bottom-right">{name}</div>
</div> ;


export default Card