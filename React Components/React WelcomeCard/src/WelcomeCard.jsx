import profilePic from './assets/mizi.jpg'

function WelcomeCard(props){ //I only used name for the props
    return(
        <div className="card">
                <img className="image" src={profilePic} alt="Profile Picture"></img>
                <h1 className="header">Welcome, {props.name}!</h1> 
                <p className="message">Welcome to Alien Stage or ALNST,  a reality audition program, has taken the alien world by storm, and its upcoming season is planned to be just as exciting. Contestants must sing for their survival, as the loser faces on-the-spot termination. As the competition heats up, a mysterious girl emerges, whose involvement may hold the key to humanity's fate...</p>
            </div>
    );
}

export default WelcomeCard