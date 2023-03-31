import { Link } from 'react-router-dom'
import './NotFound.css'

export const NotFound = () => {
    return (
        <section className='not-found-section-wrapper'>
            <h2>Sorry something went wrong!!!</h2>
            <div className="not-found-page-wrapper">
                <p className="error-page_number">4</p>
                <div className='not-found-img'></div>
                <p className="error-page_number">4</p>
            </div>
            <button className='back-to-home'><Link to="/">Back to Home</Link> </button>
        </section>
    )
}