import styled from 'styled-components';
import { useState, useEffect } from 'react';

const UserContainer = (props) => {
    
    const userList = () => {
        for(let i = 0; i < props.length; i++){
            return <tr>props[0].customerSeq</tr>
        }
        
    }
    return(
        <table>
            {userList()}
        </table>
    )
}

export default UserContainer