export default function Friend({ friend }) {

    const {name, email, website} = friend;
    
    return( 
        <div className="card">
            <h4>Name: {name} </h4>
            <p>Email: {email}</p>
            <p>Webiste: {website}</p>
        </div>
    )
}