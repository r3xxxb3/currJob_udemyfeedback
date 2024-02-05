import { createContext, useState, useEffect } from "react"
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fecthFeedback()
    }, [])

    // fetch feedback
    const fecthFeedback = async () => {
        const response = await fetch("http://localhost:5000/feedback?_sort=id")
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    // delete item
    const deleteFeedback = (id) => {
        if(window.confirm('are you sure ?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //  create item
    const createFeedback = (newFeedbackData) => {
        newFeedbackData.id = uuidv4()
        setFeedback([newFeedbackData, ...feedback])
        // console.log([newFeedbackData, ...feedback])
    }

    // set item for editting
    const editFeedback = (item) => {setFeedbackEdit({
        item, 
        edit: true
    })}


    // update item
    const updateFeedback = (id, updeItem) => {
        setFeedback(feedback.map((item) => (
            item.id === id ? {...item, ...updeItem} : item
        )))
    }

    return <FeedbackContext.Provider 
        value={{
            items: feedback,
            feedbackEdit,
            isLoading,
            setFeedbackEdit,
            deleteFeedback,
            createFeedback,
            editFeedback,
            updateFeedback,
        }}
    >
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext