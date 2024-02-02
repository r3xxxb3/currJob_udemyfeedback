import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import FeedbackContext from '../context/FeedbackContext'

function FeedBackItem({item}) {
    const navigate = useNavigate()
    const {deleteFeedback} = useContext(FeedbackContext)

    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={() => {deleteFeedback(item.id); navigate("/")} } className="close">
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card> 
    )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedBackItem