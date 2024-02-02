import { createContext, useState } from "react"
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is job 1 feedback",
            rating: 4,
        },
        {
            id: 2,
            text: "This is job 2 feedback",
            rating: 5,
        },
        {
            id: 3,
            text: "This is job 3 feedback",
            rating: 6,
        },
        {
            id: 4,
            text: "This is job 4 feedback",
            rating: 7,
        },
        {
            id: 5,
            text: "This is job 5 feedback",
            rating: 8,
        },
        {
            id: 6,
            text: "This is job 6 feedback",
            rating: 9,
        },
        {
            id: 7,
            text: "This is job 7 feedback",
            rating: 10,
        },
    ])

    const [feedbackEdit, SetFeedbackEdit] = useState({
        item: {},
        edit: false
    })

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
    const editFeedback = (item) => {SetFeedbackEdit({
        item, 
        edit: true
    })}

    // update item
    const updateFeedback = (id, updeItem) => {
        console.log(id, updeItem)
    }

    return <FeedbackContext.Provider 
        value={{
            items: feedback,
            feedbackEdit,
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