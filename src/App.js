import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
import Card from './components/shared/Card'

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
        <FeedbackProvider>
            <Router>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Header text='Your Current Job'/>
                </Link>
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm handleCreate={createFeedback}/>
                                <FeedbackStats />
                                <FeedBackList handleDelete={deleteFeedback}/>
                            </>
                        }>
                        </Route>

                        <Route path='/about' element={<AboutPage />}/>
                        <Route path='/post/:id' element={<Post handleDelete={deleteFeedback}/>}></Route>
                        {/* in case u want to make another route inside of the post component use the path='/post/*', 
                        with that u only need to specify the next route in post component,
                        ex: /show in post component will result in /post/show for the whole url */}
                        <Route path="/notfound" element={<Card>Post Not Found !</Card>}></Route>
                    </Routes>
                </div>
                <Routes>
                        <Route exact path="/" element={<AboutIconLink />}></Route>
                </Routes>
            </Router>
        </FeedbackProvider>
    )
}

export default App