import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import { useNavigate } from 'react-router-dom'

function FeedBackItem({item, handleDelete}) {
    const navigate = useNavigate()

    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={() => {handleDelete(item.id); navigate("/")} } className="close">
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