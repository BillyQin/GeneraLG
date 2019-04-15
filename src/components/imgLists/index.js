import React from 'react';
import './index.css';

let List = []
for (let i = 0;i<9;i++) {
  List.push(i)
}

export default function ImageList(props) {

  return (
    <div className="img-lists">
      {
        List.map((img,key) => (
          <img key={key} onClick={()=>props.getImg(key)} alt='' src={require(`../../img/${img}.svg`)}/>
        ))
      }
    </div>
  )
}
