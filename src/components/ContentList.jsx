import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Item from './Item';


const ContentList = (props) => {
        
    const list = props.profiles
    
    const arrFnc = () => {
        let arr = []
        for (let i = 0; i<list.length; i++){
            arr.push(<Item key={i} value={list[i]}></Item>)
        }
        return arr
    }

    return(
        <Box>
            <ul>
                {arrFnc()}
            </ul>
        </Box>
    )
}

export const Box = styled.div`
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: start;
        li{
            display: flex;
            flex-wrap: wrap;
            flex: 0 0 calc(50% - 20px);
            margin: 10px;
            top-wrap{
            }
            .category-id{
                background-color: lightgray;
                border-radius: 10px;
                flex: 0 0 calc(20% - 2px);
                border: 1px solid black;
                margin: 5px 5px 5px 35px;
                padding: 10px;
                min-width: 170px;
            }
            .content-type{
                background-color: lightgray;
                border-radius: 10px;
                flex: 0 0 calc(20% - 2px);
                border: 1px solid black;
                margin: 5px;
                padding: 10px;
                min-width: 170px;
            }
            .post-content{
                flex: 1 1 100%;
                border: 1px solid lightgray;
                padding: 10px;
                text-align: start;
                position: relative;
                a{
                    text-decoration: none;
                    color: black;
                    border: 1px solid gray;
                    padding: 10px;
                    position: absolute;
                    right: 20px;
                    top: 20px;
                }
            }
            .bottom-wrap{
                flex: 1 1 100%;
                justify-content: start;
                border:1px solid lightgray;
                margin-top: 10px;
                padding: 10px;
                text-align: start;
            }
        }
    }
`

export default ContentList