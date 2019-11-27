const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>Add A New Voter Profile</h1>
                <form action="/canvasing/voter" method="POST">
                    Name: <input type="text" name="name" /><br/>
                    Address: <input type="text" name="address" /><br/>
                    Party Affiliation: <input type="text" name="party" /><br/>
                    Are you registered to vote?:<input type="checkbox" name="registered" /><br/>
                    Will you pledge a donation to the campaign: <input type="checkbox" name="commitToDonate" /><br/>
                    <input type="submit" name="" value="Create New Voter Profile"/>
                </form>
            </div>
        )
    }
}

module.exports = New;