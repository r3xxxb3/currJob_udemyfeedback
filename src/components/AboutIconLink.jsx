import { FaQuestion } from "react-icons/fa"
import { Link } from "react-router-dom"

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to={{
        pathname: "/about",
        search: "?github.com/r3xxxb3",
        // hash: '#github.com/r3xxxb3'
      }}>
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink