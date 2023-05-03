import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import"./Dictionary.css";



export default function Dictionary (props) {
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState (null);
let [loaded, setLoaded] = useState (false);
let [photos, setPhotos] = useState(null);

function handleDictionaryResponse(response){
    setResults(response.data[0]);
}

function handleImageResponse(response){
    setPhotos(response.data.photos);
}



function search (){
     //dcumentation: https://dictionaryapi.dev/
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  let imageApiKey =  "4o1t7ff747ea61bab069931b4b3f7944";
  let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
}


function handleSubmit(event){
        event.preventDefault();
        search();   
    }

function handleKeywordChange(event){ 
        setKeyword(event.target.value);
    }

function load(){
setLoaded(true);
search();
}

if (loaded){
    return (
    <div className="Dictionary">
        <section>
            <h1>What word are you looking for?</h1>
        <form onSubmit ={handleSubmit} className="Search-bar"> 
            <input type="search" autoFocus={true} 
            onChange= {handleKeywordChange} defaultValue={props.defaultKeyword}/>
        </form>
        <div className="hint">Suggested words: sunset, yoga, woods</div>
        </section>
        <Results results={results}/>
        <Photos photos={photos} />
    </div>
    );
} else {
    load();
    return "Loading..";
}
}