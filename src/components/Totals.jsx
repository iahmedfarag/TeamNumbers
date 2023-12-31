import { useSelector } from "react-redux"
import styled from "styled-components"
import UploadBtn from "./UploadBtn"

export default function Totals() {
    const sheet = useSelector((state) => state.sheet)

    if (!sheet.sheet) {
        return <>
            <h3 style={{ textAlign: 'center', lineHeight: '1.5' }}>Hello Mate!👋 <br /> I hope you are doing good</h3>
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <UploadBtn />
            </div>
        </>
    }

    return (
        <Wrapper>
            <table>
                <tbody>
                    <tr style={{ backgroundColor: '#17A589' }}>
                        <th>Surverys</th>
                        <th>KCSAT</th>
                        <th>CSAT</th>
                    </tr>
                    <tr>
                        <td>{sheet.totalSURVEYS}</td>
                        <td style={{ backgroundColor: `${sheet.totalKCSAT >= 80 ? 'green' : 'red'}` }}>{(sheet.totalKCSAT)}%</td>
                        <td style={{ backgroundColor: `${sheet.totalCSAT >= 80 ? 'green' : 'red'}` }}>{(sheet.totalCSAT)}%</td>
                    </tr>
                </tbody>
            </table>
        </Wrapper >
    )
}


const Wrapper = styled.section`
padding: 10px 20px;
h2 {
    margin-bottom: 10px;
}
table {
    width: 100%;
}
table, th, td {
    border:1px solid black;
}
th,td {
    padding: 5px;
}
td {
    text-align: center;
}
`