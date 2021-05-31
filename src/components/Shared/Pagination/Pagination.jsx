import { useEffect, useState } from "react";
import Post from "../Post/Post";
import './pagination.css'

const Pagination = ({ data, pageLimit, dataLimit }) => {

    const [pages] = useState(Math.round(data.length / dataLimit))
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);
    const goToNextPage = () => {
        setCurrentPage((page) => page + 1)
    }
    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1)
    }
    const changePage = e => {
        const pageNumber = Number(e.target.textContent)
        setCurrentPage(pageNumber)
    }
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex)
    }
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
        return new Array(pageLimit).fill().map((int, index) => start + index + 1)
    }

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-xs-1 g-4">

                {getPaginatedData().map((d, index) => <Post key={index} data={d} />)}
            </div>
            <nav className="navbar myNav">
                <ul className="pagination">
                    <li className="page-item">
                        <button
                            onClick={goToPreviousPage}
                            className={`page-link ${currentPage === 1 ? 'disabled' : ''}`}
                        >
                            prev
                </button>
                    </li>
                    <li>
                        <ul className="pageCount">
                            {getPaginationGroup().map((item, index) => (
                                <button
                                    key={index}
                                    onClick={changePage}
                                    className={`page-link ${currentPage === item ? 'active' : null}`}
                                >
                                    <li className="page-item">{item}</li>
                                </button>
                            ))}
                        </ul>
                    </li>
                    <li className="page-item">
                        <button
                            onClick={goToNextPage}
                            className={`page-link ${currentPage === pages ? 'disabled' : ''}`}
                        >
                            next
                </button>
                    </li>
                </ul>


                {/* <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    prev
                </button>
                {getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}
                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    next
                </button> */}
            </nav>
        </>
    )
}

export default Pagination