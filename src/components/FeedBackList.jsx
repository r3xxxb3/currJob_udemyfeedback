import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedBackItem from "./FeedBackItem"
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedBackList() {
    const {items, isLoading} = useContext(FeedbackContext)

    // console.log(items)
    if (!isLoading && (!items || items.length === 0)){
        return (
            <div className="card">
                <div className="text-display">No Feedback</div>
            </div>
        )
    }
    
    return isLoading ? <Spinner/> : (
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
        
    // )
    
    // return (
    //     <div className="feedback-list">
    //         {items.map((item) => (
    //             <FeedBackItem key={item.id} item={item} handleDelete={(id) => handleDelete(id)}/>
    //         ))}
    //     </div>
    // )
}

export default FeedBackList