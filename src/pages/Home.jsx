
import Totals from './../components/Totals';
import Numbers from './../components/Numbers';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateMemebersNumbers } from '../features/sheetSlice';
export default function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('sheet')) {
            const sheet = JSON.parse(localStorage.getItem('sheet'))
            console.log(sheet)
            dispatch(updateMemebersNumbers(sheet))
        }
    }, [dispatch])
    return (
        <>
            <Totals />
            <Numbers />
        </>
    )
}
