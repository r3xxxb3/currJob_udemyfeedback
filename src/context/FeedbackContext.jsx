import { createContext, useState, useEffect } from "react"
// import {v4 as uuidv4} from 'uuid'

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

    // get next id
    const nextId = () => {
        return (Math.max.apply(Math, feedback.map((f) => {
            return f.id
        })) + 1)
    }

    // fetch feedback
    const fecthFeedback = async () => {
        const response = await fetch("/feedbacks?_sort=-id") //add - before sorted element for desc view
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    // delete item
    const deleteFeedback = async (id) => {
        if(window.confirm('are you sure ?')){
            console.log(await fetch(`/feedbacks/${id}`, { method: 'DELETE',}))

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //  create item
    const createFeedback = async (newFeedbackData) => {
        newFeedbackData.id = "'"+nextId()+"'"
        const response = await fetch('/feedbacks', {
            method:  'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newFeedbackData),
        })

        const data = await response.json()
        setFeedback([data, ...feedback])
        // console.log([newFeedbackData, ...feedback])
    }

    // set item for editting
    const editFeedback = (item) => {setFeedbackEdit({
        item, 
        edit: true
    })}


    // update item
    const updateFeedback = async (id, updeItem) => {
        const response = await fetch(`/feedbacks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updeItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item) => (
            item.id === id ? {...item, ...data} : item
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