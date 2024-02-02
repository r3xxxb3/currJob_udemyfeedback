import { useState, useContext } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm({handleCreate}) {
    const [feedbackData, setFeedbackData] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    
    const{ createFeedback } = useContext(FeedbackContext)

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
            // console.log(newFeedbackData)
            createFeedback(newFeedbackData)
            setFeedbackData('')
            setBtnDisabled(true)
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