import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm({handleCreate}) {
    const [feedbackData, setFeedbackData] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    
    const{ createFeedback, updateFeedback, setFeedbackEdit ,feedbackEdit, } = useContext(FeedbackContext)

    useEffect(() => {
        // u can use http request here to fetch data right when the page load
        if(feedbackEdit.edit === true){
            // console.log('edit mode') 
            setBtnDisabled(false)
            setFeedbackData(feedbackEdit.item.text)
        }
    }, [feedbackEdit]) // the [] is leaved on empty so that it only run once (the http request or whatever inside the useEffect), 
    // i use feedbackEdit inside the useEffect so that every time that state(feedbackEdit) changes value, whatever inside useEffect will run

    const handleFeedbackData = (e) => {
        if(feedbackData === ""){
            setBtnDisabled(true)
            setMessage(null)
        }else if(feedbackData !== "" && feedbackData.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setFeedbackData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(feedbackData.trim().length > 10){
            const newFeedbackData = {
                text: feedbackData,
                rating,
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedbackData)
                setFeedbackData('')
                setBtnDisabled(true)
                setFeedbackEdit({item: {},edit: false})
            }else{
                // console.log(newFeedbackData)
                createFeedback(newFeedbackData)
                setFeedbackData('')
                setBtnDisabled(true)
            }

        }
    }

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <h2>How Would You Rate Your Current Job ?</h2>
                    <RatingSelect select={(rating) => setRating(rating)}/>
                    <div className="input-group">
                        <input onChange={handleFeedbackData} type="text" placeholder="Write a review" value={feedbackData}/>
                        <Button type='submit' version='secondary' isDisabled={btnDisabled}>Send</Button>
                    </div>
                    {message && <div className="message">{message}</div>}
                </form>
            </Card>
        </div>
    )
}

export default FeedbackForm