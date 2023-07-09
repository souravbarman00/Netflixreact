import React from 'react'
import Card from './Card'
import "./Style/Row.scss"
const Row = ({title,Movies=[],imgUrl}) => {
  return (
    <div className="row">
        <h2>{title}</h2>
        {/* {Movies.map((item, index) =>(console.log(item.backdrop_path))) } */}
            <div className='scroll'>
            {Movies.map((item, index) => (
                <Card key={index}
                    img={`${imgUrl}/${item.backdrop_path}`} name={item.original_title?item.original_title:(item.name?item.name:"")} />
                    ))} 
            </div>
            

    </div>

  )
}

export default Row