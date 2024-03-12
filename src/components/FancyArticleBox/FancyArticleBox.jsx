import './FancyArticleBox.css'

function FancyArticleBox (props) {
    return (
        <div className='fancy'>
            {props.children}
        </div>
    )
}

export default FancyArticleBox