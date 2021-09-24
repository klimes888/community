import React from 'react';
import {jsx, css} from '@emotion/react';

export default function Login() {
    return (
        <div css={layout}>
            <input type="text" />
        </div>
    )
}

const layout = css `
    flex:1;
    justify-content: center;
    align-items: center;
`;