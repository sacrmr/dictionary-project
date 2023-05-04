import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import "./Results.css";

export default function Result(props){
    if (props.results){
    return ( 
        <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            if (index === 0) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            }else {
              return null;
            }

          })}
        </section>
        {props.results.meanings.map(function(meaning, index){
            return ( 
            <section key={index}><Meaning meaning ={meaning} />
              </section>
            );
        })}
        </div>
        );

        }else{
            return null;
        }  
}