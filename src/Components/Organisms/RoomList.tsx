import React from 'react'
import axios from "axios";

export const getRoomList = async () => {
  const result = await axios.get('/room/index.json')
    return result
}

export const getRoomDetail = async (id:number)=>{
    const result = await axios.get(`/room/index.json/${id}`)
    return result
}

export const deleteRoom =  (id:number)=>{
    return  axios.post(`/room/index.json/${id}`)
}