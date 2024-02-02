import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import FeedBackItem from "./FeedBackItem"
import FeedbackContext from '../context/FeedbackContext'

function FeedBackList() {
    const {items} = useContext(FeedbackContext)
    
    // console.log(items)
    if (!items || items.length === 0){
        return (
            <div className="card">
                <div className="text-display">No Feedback</div>
            </div>
        )
    }
    
    return (
        <div className="feedback-list">
            <AnimatePresence>
            {items.map((item) => (
                <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <FeedBackItem key={item.id} item={item}/>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
    
    // return (
    //     <div className="feedback-list">
    //         {items.map((item) => (
    //             <FeedBackItem key={item.id} item={item} handleDelete={(id) => handleDelete(id)}/>
    //         ))}
    //     </div>
    // )
}

FeedBackList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
}

export default FeedBackList