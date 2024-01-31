import FeedBackItem from "./FeedBackItem"
import {motion, AnimatePresence} from 'framer-motion'
import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"

function Post({items, handleDelete}) {
    const curr = useParams()
    const check = items.map(item => item.id)
    if(!check.includes(curr.id)){
        return <Navigate to="/notfound"/>
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
            {items.map((item) => ( item.id === curr.id &&
                <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <FeedBackItem key={item.id} item={item} handleDelete={(id) => handleDelete(id)}/>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
}

export default Post