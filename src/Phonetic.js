import React from "react";
import './Phonetic.css';

export default function Phonetic(props) {
 console.log(props.phonetic);
 return (
<div className="phonetics">
    <a  className="audio" href={props.phonetic.audio} target="_blank" rel="noreferrer">
    Listen
    </a>
    <br />
    {props.phonetic.text}
</div>
 )
}