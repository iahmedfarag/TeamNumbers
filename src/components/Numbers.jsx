import { useSelector } from "react-redux"
import styled from "styled-components"


export default function Numbers() {
    const sheet = useSelector((state) => state.sheet)

    if (!sheet.sheet) {
        return
    }
    return (
        <Wrapper>
            <table>
                <tbody>
                    <tr style={{ backgroundColor: '#17A589' }}>
                        {
                            sheet?.keys?.map((key, index) => {
                                return <th key={index}>{key}</th>
                            })
                        }
                    </tr>
                    {sheet?.sheet?.map((agent, index) => {
                        return <>
                            <tr key={index}>
                                <td>{agent.Agent}</td>
                                <td>{agent.Surveys}</td>
                                <td style={{ color: `${agent.KCSAT >= .80 ? 'green' : 'red'}` }}>{(agent.KCSAT * 100).toFixed(2)}</td>
                                <td style={{ color: `${agent.CSAT >= .80 ? 'green' : 'red'}` }}>{(agent.CSAT * 100).toFixed(2)}</td>
                            </tr>
                        </>
                    })}
                </tbody>
            </table>
        </Wrapper>
    )
}


const Wrapper = styled.section`
padding: 10px 20px;
margin-top: 20px;
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
    padding: 3px;
}
`