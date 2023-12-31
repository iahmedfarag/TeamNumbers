import { useSelector } from "react-redux"
import styled from "styled-components"
import UploadBtn from "./UploadBtn"



export default function Navbar() {
    const sheet = useSelector((state) => state.sheet)

    return (
        <Wrapper>
            <h3>𝐓𝐚𝐛𝐛𝐲 𝐓𝐞𝐚𝐦 𝐒𝐭𝐚𝐭𝐢𝐜𝐬</h3>
            {sheet.sheet ? <UploadBtn /> : ''}
        </Wrapper>
    )
}


const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px 30px;
    margin-bottom: 20px;
    h3 {
        background-color: var(--mainColor);
        padding: 5px 10px;
        user-select: none;
    }

`