const React = require('react');
const AppLayout = require('./layout/AppLayout.jsx')

class Edit extends React.Component{
    render() {
        return (
        <AppLayout title="Edit Voter's Profile">
            <form action={`/canvasing/${this.props.voter._id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" defaultValue={this.props.voter.name}/><br/>
                Address: <input type="text" name="address"  defaultValue={this.props.voter.address}/><br/>
                Party Affiliation: <input type="text" name="party"  defaultValue={this.props.voter.party}/><br/>
                Are you registered to vote?: { this.props.voter.registered? <input type="checkbox" name="registered" defaultChecked />: <input type="checkbox" name="registered"/> }<br/>
                Will you pledge a donation to the campaign:{ this.props.voter.commitToDonate? <input type="checkbox" name="commitToDonate" defaultChecked />: <input type="checkbox" name="commitToDonate"/> }<br/>
                <input type="submit" value="Submit Changes"/>
            </form>
        </AppLayout>
        )
    }
}
module.exports= Edit;