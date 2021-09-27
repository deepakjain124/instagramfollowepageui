import React, { useState } from 'react'
import { Allfollower } from './Allfollower'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { data } from './data'
const Instagram = () => {
    const [state, setstate] = useState(data)
    const clear = (id) => {
        const filter = state.filter((item) => item.id !== id)
        setstate(filter)
    }

    const [search, setsearch] = useState()
    const handleChange = (value) => {
        setsearch(value)
        filterData(value)
    }

    const excludeColumns = ['img']

    // filter records by search text
    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim()
        if (lowercasedValue === '') setstate(data)
        else {
            const filteredData = data.filter((item) => {
                return Object.keys(item).some((key) =>
                    excludeColumns.includes(key) ?
                    false :
                    item[key].toString().toLowerCase().includes(lowercasedValue),
                )
            })
            setstate(filteredData)
        }
    }

    return ( <
        >
        <
        div className = "container" >
        <
        div className = "box" >
        <
        Scrollbars >
        <
        div className = "id" >
        <
        h2 >
        <
        i class = "fas fa-arrow-left" > < /i>deepak_jain2952{' '} <
        /h2>{' '} <
        /div>{' '} <
        div className = "follower" >
        <
        p > 7 follower < /p> <p> 181 following </p > { ' ' } <
        /div>{' '} <
        hr / >
        <
        div className = "searchfield" >
        <
        input type = "text"
        placeholder = "Search"
        onChange = {
            (e) => handleChange(e.target.value) }
        value = { search }
        />{' '} <
        /div>{' '} {
            state.map((curelem) => {
                const { id } = curelem
                return <Allfollower key = { id } {...curelem }
                d = { clear }
                />
            })
        } { ' ' } {
            state.length === 0 && ( <
                span className = "result" > No records found to display! < /span>
            )
        } { ' ' } <
        /Scrollbars>{' '} <
        /div>{' '} <
        /div>{' '} <
        />
    )
}
export default Instagram