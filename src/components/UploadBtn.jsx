import styled from 'styled-components'
import * as XLSX from "xlsx"
import { updateMemebersNumbers } from "../features/sheetSlice"
import { useDispatch, useSelector } from "react-redux"
export default function UploadBtn() {
    const sheet = useSelector((state) => state.sheet)
    const dispatch = useDispatch()


    const handleChange = (e) => {
        const roader = new FileReader();
        roader.readAsBinaryString(e.target.files[0]);
        roader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const parsedData = XLSX.utils.sheet_to_json(sheet);
            dispatch(updateMemebersNumbers(parsedData))
        }
    }

    return (
        <Wrapper className="upload">
            <label htmlFor="fileUpload">{sheet.sheet ? 'Update' : 'Upload'}</label>
            <input id="fileUpload" type="file" accept=".xls, .xlsx" style={{ display: 'none' }} onChange={handleChange} />
        </Wrapper>
    )
}
const Wrapper = styled.div`

    label {
            cursor: pointer;
            font-weight: bold;
            padding: 10px 20px;
            background-color: var(--mainColor);
            border-radius: 25px;
            &:hover{
                transition: 0.3s;
                background-color: black;
                color: white;
            }
        }

`