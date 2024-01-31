import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
        <div>
            <h1>
                This is my personal project for the Udemy Course of React Front to Back by Brad Traversy
            </h1>
            <Link to="/">
                Return back
            </Link>
        </div>
    </Card>
  )
}

export default AboutPage