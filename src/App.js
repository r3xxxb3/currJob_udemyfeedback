import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
import Card from './components/shared/Card'

function App(){
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
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedBackList />
                            </>
                        }>
                        </Route>

                        <Route path='/about' element={<AboutPage />}/>
                        <Route path='/post/:id' element={<Post />}></Route>
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