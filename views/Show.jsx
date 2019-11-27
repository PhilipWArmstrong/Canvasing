const React = require('react');

class Show extends React.Component {
    render(){
        return (
            <div>
                <h1>Voter's Profile</h1>
                <p>
                    The voter, {this.props.voter.name}/>, lives at {this.props.voter.address} 
                    and is a member of the {this.props.voter.party} Party.
                </p>
            </div>
        )
    }
}
module.exports = Show;