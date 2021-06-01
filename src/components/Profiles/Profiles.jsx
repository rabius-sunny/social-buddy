import axios from "axios"
import { useEffect, useState } from "react"
import './profiles.css'
import useSorting from './useSorting'
import ProfilePagination from '../Shared/Pagination/ProfilePagination'

const Profiles = () => {

    const [users, setUsers] = useState([])
    const [searchIndex, setSearchIndex] = useState('')
    const [selectValue, setSelectValue] = useState(0)
    const [rowNumber, setRowNumber] = useState(3)

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
    let searchedItems = items.filter(item => {
        switch (selectValue) {
            case "1":
                return item.name.toLowerCase().includes(searchIndex.toLowerCase())
            case "2":
                return item.email.toLowerCase().includes(searchIndex.toLowerCase())
            case "3":
                return item.website.toLowerCase().includes(searchIndex.toLowerCase())
            default:
                return item.name.toLowerCase().includes(searchIndex.toLowerCase())
        }
    })
    // let profilesPerPages = searchedItems.slice(0, rowNumber)
    return (
        <div className="container">
            <section className="profiles">
                <div className="mb-5 search">
                    <div className="input-group mb-3">
                        <select onChange={e => setSelectValue(e.target.value)} class="form-select">
                            <option selected>Search by</option>
                            <option value="1">Name</option>
                            <option value="2">Email</option>
                            <option value="3">Website</option>
                        </select>
                        <input type="text" onChange={e => setSearchIndex(e.target.value)} className="form-control w-75" placeholder="Search profiles by selected action" />
                    </div>
                    <label htmlFor="rowNumber">Profiles per page :</label>
                    <input className="form-control" onChange={e => setRowNumber(e.target.value)} type="number" name="profiles" defaultValue={3} id="rowNumber" />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th id="sortBtn">
                                <button
                                    onClick={() => requestSort('name')}
                                    className={getClassNamesFor('name')}
                                >
                                    Name
                            </button>
                            </th>
                            <th id="sortBtn">
                                <button
                                    onClick={() => requestSort('email')}
                                    className={getClassNamesFor('email')}
                                >
                                    Email
                            </button>
                            </th>
                            <th id="sortBtn">
                                <button
                                    onClick={() => requestSort('website')}
                                    className={getClassNamesFor('website')}
                                >
                                    Website
                            </button>
                            </th>
                        </tr>
                    </thead>{console.log(Number(rowNumber))}
                    <ProfilePagination
                        data={searchedItems}
                        dataLimit={Number(rowNumber)}
                    />
                </table>
            </section>
        </div>
    )
}

export default Profiles
