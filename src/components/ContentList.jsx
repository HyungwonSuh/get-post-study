import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Item from './Item';


const ContentList = (props) => {
        
    const list = props.profiles

    console.log(list)

    for (let i = 0; i<list.length; i++){
        console.log(list[i])
    }

    return(
        <ul>
            <Item value={list[0]}></Item>
        </ul>
    )

        // const makeList = () => {
        //     let postNumber = ''
        //     let authorName = ''
        //     let createdDate = ''
        //     let postContent = ''
            
        //     let list = []
            
        //     for (let i = 0; i< profiles.length; i ++){
        //         postNumber = profiles[i].postNumber
        //         authorName = profiles[i].authorName
        //         createdDate = profiles[i].createdDate
        //         postContent = profiles[i].postContent
        //         //list 항목 추가하기위해서 for문안에 list넣기
        //     }
        //     return(
        //         //list 1개만 반환
        //         "글번호 : " + postNumber + '작성자 : ' + authorName + '작성일 : ' + createdDate + '글내용 : ' + postContent
        //     )
        // }

        // return (
        //     <ul>
        //         <li>{makeList()}</li>
        //     </ul>
        // )
}

export default ContentList