import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Event from './Event';



export const Events = () => {
    
    const [ initialState, setInitialState ] = useState([]);

    useEffect(() => {
        
        axios.get('http://localhost:3001/events')
        .then(res => {
            // console.log(res.data.events)
            setInitialState(res.data.events)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

const dateFormatted = (time)=> {
    let date = new Date(time);
    return date.toString()
}

    return(
        
        <div>
          <ul>
                { initialState.map(data=> 
                <Event key={data.id} title={data.title} start={dateFormatted(data.event_start)} end={dateFormatted(data.event_end)} image={data.image_url} venue={data.venue} />
                 
                )}
            </ul>
                    
        </div>    
            
       
    )
}