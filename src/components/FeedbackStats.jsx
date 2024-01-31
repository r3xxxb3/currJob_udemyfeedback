import PropTypes from 'prop-types'

function FeedbackStats({items}) {
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

FeedbackStats.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
}

export default FeedbackStats