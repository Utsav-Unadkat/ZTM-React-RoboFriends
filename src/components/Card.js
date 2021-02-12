
const Card = ({ name , email , id}) => {
    return (
        <div className= 'bg-light-green dib tc grow bw-2 shadow-5 br3 pa3 ma2' >
            <img alt='roboFriendPic' src  = {`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    )
}

export default Card