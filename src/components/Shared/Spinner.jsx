const Spinner = () => {
    return (
        <div style={{height: '100vh'}} className="text-center">
            <div style={{height: '100px', width: '100px'}} className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner
