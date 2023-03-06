import styled from 'styled-components'
import { useState, useEffect } from 'react'
import ContentList from './ContentList'


const Contents = (props) => {
    const [profiles, setProfile] = useState();

    useEffect(() => {
        fetch('http://172.30.1.26:3000/post', {
            method: 'GET'
        }).then(res=>res.json()).then(res=>{
            setProfile(res);
        })
    },[])

    return (
        <div>
            콘텐츠 목록
            {profiles ? <ContentList profiles={profiles}/> : false}
        </div>
    )
}



export default Contents