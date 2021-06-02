import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './pagination.css'

const ProfilePagination = ({ data, dataLimit }) => {

    // const [pages, setPage] = useState(Math.round(data.length / dataLimit))
    let pages = Math.ceil(data.length / dataLimit)
    const [currentPage, setCurrentPage] = useState(1)
    const [countedData, setCountedData] = useState([])

    let localCurrentPage = localStorage.getItem('currentPage')
    let _currentPage = localCurrentPage ? localCurrentPage : currentPage
    let __currentPage = Number(_currentPage)

    const goToNextPage = () => {
        setCurrentPage(page => page + 1)
        localStorage.setItem('currentPage', __currentPage + 1)
    }
    const goToPreviousPage = () => {
        setCurrentPage(page => page - 1)
        localStorage.setItem('currentPage', __currentPage - 1)
    }

    useEffect(() => {
        const startIndex = __currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit;
        let newData = data.slice(startIndex, endIndex)
        setCountedData(newData)
    }, [data, dataLimit, __currentPage])

    return (<>
        <tbody>
            {countedData.map((item, index) => {
                return <tr>
                    <td><Link to={`/profile/user/${item.id}`}><span>{item.id}. </span>{item.name}</Link></td>
                    <td>{item.email}</td>
                    <td>{item.website}</td>
                </tr>
            })}
        </tbody>
        <nav className="navbar myNav justify-content-center pt-5">
            <ul className="pagination">
                <li className="page-item">
                    <button
                        onClick={goToPreviousPage}
                        className={`page-link ${__currentPage === 1 ? 'disabled' : ''}`}
                    >
                        prev
                    </button>
                </li>
                <p className="my-auto px-2">P. <strong>{__currentPage}</strong> of <strong>{pages}</strong></p>
                <li className="page-item">
                    <button
                        onClick={goToNextPage}
                        className={`page-link ${__currentPage === pages ? 'disabled' : ''}`}
                    >
                        next
                </button>
                </li>
            </ul>
        </nav>
    </>)

}

export default ProfilePagination