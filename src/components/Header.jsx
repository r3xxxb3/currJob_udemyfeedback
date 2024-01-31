import PropTypes from 'prop-types'

function Header(props) {
    // can also use function Header({text}){} so no need to use {props.text}, just {text}
    const headerStyle = {
        backgroundColor: props.bgColor, 
        color: props.txtColor
    }

    return (
        <header style={headerStyle}>
            <div className="container">
                <h2>{props.text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text : 'Feedback UI',
    bgColor : 'white', 
    txtColor : '#202142'
}

Header.propTypes = {
    text : PropTypes.string, // u can add .isRequired if the props or input is required
    bgColor : PropTypes.string,
    txtColor : PropTypes.string,
}

export default Header