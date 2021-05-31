import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './profiles.css'
import useSorting from './useSorting'

const Profiles = () => {

    const [users, setUsers] = useState([])
    const [searchIndex, setSearchIndex] = useState('')
    const [selectValue, setSelectValue] = useState(0)

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
    console.log(searchedItems)

    return (
        <div className="container">
            <section className="profiles">
                <div className="search mb-5">
                    <div className="input-group mb-3">
                        <select onChange={e => setSelectValue(e.target.value)} class="form-select">
                            <option selected>Search by</option>
                            <option value="1">Name</option>
                            <option value="2">Email</option>
                            <option value="3">Website</option>
                        </select>
                        <input type="text" onChange={e => setSearchIndex(e.target.value)} className="form-control w-75" />
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <button type="button"
                                    onClick={() => requestSort('name')}
                                    className={getClassNamesFor('name')}
                                >
                                    Name
                            </button>
                            </th>
                            <th>
                                <button type="button"
                                    onClick={() => requestSort('email')}
                                    className={getClassNamesFor('email')}
                                >
                                    Email
                            </button>
                            </th>
                            <th>
                                <button type="button"
                                    onClick={() => requestSort('website')}
                                    className={getClassNamesFor('website')}
                                >
                                    Website
                            </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            searchedItems.map(item => <tr>

                                <Link to={`/profile/user/${item.id}`}><td>{item.name}</td></Link>
                                <td>{item.email}</td>
                                <td>{item.website}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Profiles
