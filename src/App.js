import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
// import Card from './components/shared/Card'

function App(){
    const [feedback, setFeedback] = useState(FeedbackData) 
    
    const deleteFeedback = (id) => {
        if(window.confirm('are you sure ?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const createFeedback = (newFeedbackData) => {
        newFeedbackData.id = uuidv4()
        setFeedback([newFeedbackData, ...feedback])
        // console.log([newFeedbackData, ...feedback])
    }

    return (
        <Router>
            <Link to="/" style={{textDecoration: 'none'}}>
                <Header text='Your Current Job'/>
            </Link>
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleCreate={createFeedback}/>
                            <FeedbackStats items={feedback}/>
                            <FeedBackList items={feedback} handleDelete={deleteFeedback}/>
                        </>
                    }>
                    </Route>

                    <Route path='/about' element={<AboutPage />}/>
                    <Route path='/post/:id' element={<Post items={feedback} handleDelete={deleteFeedback}/>}></Route>
                </Routes>
                {/* <Card >Hello</Card> */}
            </div>
            <Routes>
                    <Route exact path="/" element={<AboutIconLink />}></Route>
            </Routes>
        </Router>
    )
}

export default App