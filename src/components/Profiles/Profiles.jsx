import axios from "axios"
import { useEffect, useState } from "react"
import './profiles.css'
import useSorting from './useSorting'
import ProfilePagination from '../Shared/Pagination/ProfilePagination'
import Spinner from "../Shared/Spinner"

const Profiles = () => {

    const [users, setUsers] = useState([])
    const [searchIndex, setSearchIndex] = useState('')
    const [selectValue, setSelectValue] = useState(0)
    const [rowNumber, setRowNumber] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(error => console.log(error.message))
    }, [])

    const { items, requestSort, sortConfig } = useSorting(users)
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return
        }
        return sortConfig.key === name ? sortConfig.direction : undefined
    }
    const handleRowChange = e => {
        setRowNumber(e.target.value)
        localStorage.setItem('rowNumber', e.target.value)
    }
    const handleSearchChange = e => {
        setSearchIndex(e.target.value)
        localStorage.setItem('searchIndex', e.target.value)
    }

    const localRowNumber = localStorage.getItem('rowNumber')
    const localSearchIndex = localStorage.getItem('searchIndex')
    let _index = searchIndex ? searchIndex : localSearchIndex || ''

    let searchedItems = items.filter(item => {
        switch (selectValue) {
            case "1":
                return item.name.toLowerCase().includes(_index.toLowerCase())
            case "2":
                return item.email.toLowerCase().includes(_index.toLowerCase())
            case "3":
                return item.website.toLowerCase().includes(_index.toLowerCase())
            default:
                return item.name.toLowerCase().includes(_index.toLowerCase())
        }
    })

    return (
        <div className="container">
            <section className="profiles">
                <div className="mb-5 search">
                    <div className="input-group mb-3">
                        <select onChange={e => setSelectValue(e.target.value)} className="form-select">
                            <option selected>Search by</option>
                            <option value="1">Name</option>
                            <option value="2">Email</option>
                            <option value="3">Website</option>
                        </select>
                        <input type="text" onChange={handleSearchChange} defaultValue={_index} className="form-control w-75" placeholder="Search profiles by selected action" />
                    </div>
                    <label htmlFor="rowNumber">Profiles per page :</label>
                    <input className="form-control" onChange={handleRowChange} type="number" name="profiles" defaultValue={localRowNumber} id="rowNumber" />
                </div>
                {
                    !users.length ? <Spinner /> :
                        <table>
                            <thead>
                                <tr>
                                    <th id="sortBtn">
                                        <button
                                            onClick={() => requestSort('name')}
                                            className={getClassNamesFor('name')}
                                        >
                                            <span>Name</span>
                                            {getClassNamesFor('name') ? getClassNamesFor('name') : 'sort'}
                                        </button>
                                    </th>
                                    <th id="sortBtn">
                                        <button
                                            onClick={() => requestSort('email')}
                                            className={getClassNamesFor('email')}
                                        >
                                            <span>Email</span>
                                            {getClassNamesFor('email') ? getClassNamesFor('email') : 'sort'}
                                        </button>
                                    </th>
                                    <th id="sortBtn">
                                        <button
                                            onClick={() => requestSort('website')}
                                            className={getClassNamesFor('website')}
                                        >
                                            <span>Website</span>
                                            {getClassNamesFor('website') ? getClassNamesFor('website') : 'sort'}
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <ProfilePagination
                                data={searchedItems}
                                dataLimit={Number(rowNumber) || Number(localRowNumber) || 5}
                            />
                        </table>
                }
            </section>
        </div>
    )
}

export default Profiles
