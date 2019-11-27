const React = require('react');

class Show extends React.Component {
    render(){
        return (
            <div>
                <h1>Voter's Profile</h1>
                <p>
                    {/* The voter, {this.props.voter.name}, lives at {this.props.voter.address}. */}
                    Name: {this.props.voter.name}<br/>
                    Address: {this.props.voter.address}<br/>
                    Party Affiliation: {this.props.voter.party}<br/>
                    Are you registered to vote?: { this.props.voter.registered? <input type="checkbox" name="registered" defaultChecked />: <input type="checkbox" name="registered"/> }<br/>
                    Will you pledge a donation to the campaign:{ this.props.voter.commitToDonate? <input type="checkbox" name="commitToDonate" defaultChecked />: <input type="checkbox" name="commitToDonate"/> }<br/>
                </p>
                {/* <a href={`/canvasing/${voter._id}/edit`}>Edit</a> */}
                <form action="/canvasing">
                    <button type="submit">Return to District Voters List</button>
                </form>
            </div>
        )
    }
}
module.exports = Show;