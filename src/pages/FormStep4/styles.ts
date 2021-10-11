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
        display: block;
        margin-bottom: 20px;
        
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

    .backButton {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
        border-radius: 8px;
        margin-right: 15px;

        &:hover {
            background-color: rgba(0, 0, 0, 0.1)
        }
    }
`

export const ShowArea = styled.div`
    margin-bottom: 33px;
`

export const UserData = styled.div`
    padding: 8px;
    margin: 10px;
    border: 1px solid rgba(34, 205, 137, 0.7);
    border-radius: 4px;
    
    label {
        color: #B8B8D4;
        margin-bottom: 2px;
    }

    p {
        color: #FFFFFF;
    }
`