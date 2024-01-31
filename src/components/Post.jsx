import FeedBackItem from "./FeedBackItem"
import {motion, AnimatePresence} from 'framer-motion'
import { useParams } from "react-router-dom"
import { Navigate, useNavigate } from "react-router-dom"
import Button from "./shared/Button"

function Post({items, handleDelete}) {
    const curr = useParams()
    const check = items.map(item => item.id)
    const navigate = useNavigate()

    const onClick = () => {
        console.log('viewing all posts')
        navigate("/")
    }

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
            <div>
                <Button onClick={() => onClick()}>View all</Button>
            </div>
        </div>
    )
}

export default Post