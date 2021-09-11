import React, { useEffect } from 'react'
import {jsx, css} from '@emotion/react';
import axios from 'axios';

export default function Main() {

    const fetch = () => {
        axios({
            method:'get',
            url:'/posts',
        }).then((test) => console.log(test))
        .catch( err => console.log(err))
    }

    useEffect(() => {
        fetch();
    }, [])


    return (
        <div css={mainStyle}>
            testdsd
        </div>
    )
}

const mainStyle = css`
color:red;
`;