
import React from 'react'

export default ({ name, message }) =>
  <p>
    <strong>{name}</strong> <em>{message}</em>
  </p>





// import React from 'react'
// import { WebSocket as ws } from "ws";
// const client = new ws('ws://localhost:8082')
// export default function Chatroom() {

//     function componentWillMount() {
//         client.onopen = () => {
//             console.log('Client connected!')
//         }
//     }

//     return(
//         <div>
//             <h1>Welcome</h1>
//             <input type='text' id='text'></input>
//             <button id='textbutton'>SEND</button>
//             <div id='log'>

//             </div>
//         </div>
//     )
// }