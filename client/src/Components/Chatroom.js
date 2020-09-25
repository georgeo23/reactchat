import React from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:8082')
export default function Chatroom() {

    function componentDidMount() {
        client.onopen = () => {
            console.log('Client connected!')
        }
    }

    return(
        <div>
            <h1>Welcome</h1>
            <input type='text' id='text'></input>
            <button id='textbutton'>SEND</button>
            <div id='log'>

            </div>
        </div>
    )
}