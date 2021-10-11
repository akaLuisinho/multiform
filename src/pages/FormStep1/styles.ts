import styled from 'styled-components'

export const Container = styled.div`
    p { 
        font-size: 13px;
    }
    h1 { 
        margin: 0px;
        padding: 0px;
        font-size: 22px;
    }
    hr {
        height: 1px;
        border: 0px;
        background-color: #16195C;
        margin: 30px 0px;
    }

    label {
        font-size: 13px;

        input {
            background-color: #02044A;
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 6px;
            color: #FFFFFF;
            outline: none;
            font-size: 15px;
        }
    }

    button {
        background-color: #25CD89;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0px;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 30px;
        
        &:hover {
            opacity: 0.9
        }
    }
`