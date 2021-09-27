import { css } from '@emotion/react';
import React from 'react'

export default function Signup() {
    return (
        <article css={Layout}>
            <input type="text" placeholder="이메일" css={inputStyle} />
            <input type="password" placeholder="비밀번호" css={inputStyle} />
            <input type="password" placeholder="비밀번호 확인" css={inputStyle} />
            <button>회원가입!</button>
        </article>
    )
}

const Layout = css `
    display: flex;
    height:100vh;
    flex:1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const inputStyle = css `
margin:0.5em 0;
`;