import { createContext, useState } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 5,
            text: "This data is from context",
            rating: 10,
        }
    ])

    return <FeedbackContext.Provider 
        value={{
            items: feedback,
        }}
    >
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext