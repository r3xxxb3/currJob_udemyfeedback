import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const {items} = useContext(FeedbackContext)
    let average = items.reduce((ttl, cur) => {
        return ttl + cur.rating
    }, 0) / items.length

    average = average.toFixed(1).replace(/[,.]0$/, '')

    return (
        <div className='feedback-stats'>
            <h4>{items.length} Reviews</h4>
            <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats