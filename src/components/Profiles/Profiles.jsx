import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './profiles.css'
import useSorting from './useSorting'

const Profiles = () => {

    const [users, setUsers] = useState([])

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
    console.log(items)

    return (
        <div className="container">
            <section className="profiles">
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
                                    Price
                            </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <tr>

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
