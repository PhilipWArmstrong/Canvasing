const React = require('react');

class Edit extends React.Component{
    render() {
        return (
            <div>
                <h1>Edit Voter's Profile</h1>
                <form action={`/canvasing/${this.props.voter._id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.voter.name}/><br/>
                    Address: <input type="text" name="address"  defaultValue={this.props.voter.address}/><br/>
                    Party Affiliation: <input type="text" name="party"  defaultValue={this.props.voter.party}/><br/>
                    Are you registered to vote?: { this.props.voter.registered? <input type="checkbox" name="registered" defaultChecked />: <input type="checkbox" name="registered"/> }<br/>
                    Will you pledge a donation to the campaign:{ this.props.voter.commitToDonate? <input type="checkbox" name="commitToDonate" defaultChecked />: <input type="checkbox" name="commitToDonate"/> }<br/>
                    <input type="submit" value="Submit Changes"/>
                </form>
            </div>
        )
    }
}
module.exports= Edit;