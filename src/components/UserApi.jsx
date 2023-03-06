import styled from 'styled-components';
import { useState, useEffect } from 'react'
import UserContainer from './UserContainer';

const UserApi = (props) => {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch('http://172.30.1.26:3000/users', {
            method: 'GET'
        }).then(res=>res.json()).then(res=>{
            console.log(res);
            setUsers(res);
        })
    },[])

    return (
        <div>
            사용자 목록
            {users ? <UserContainer users={users}/> : false}
        </div>
    )
}



export default UserApi