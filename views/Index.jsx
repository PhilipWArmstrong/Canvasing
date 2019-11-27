const React = require('react');

class Index extends React.Component{
    render () {
        return (
            <div>
                <nav>
                    <a href="/new">Add New Voter to Canvasing List</a>
                </nav>
                <h1>Voters in the Distict</h1>
                <ul>
                    {
                        this.props.voter.map((voter, i) => {
                            return (
                                <li>
                                    Name: <a href={`/${voter._id}`}>{voter.name}</a> <br/>
                                    Address: {voter.address} <br/>
                                    Party Affiliation: {voter.party} <br/>
                                    Are you registered to vote?: {voter.registered? `Registered to vote`:`Not registered to vote`} <br/>
                                    Will you pledge a donation to the campaign: {voter.commitToDonate? `Voter will commit to donate`:`Voter will not commit to donate`} <br/>
                                    <a href={`/${voter._id}/edit`}>Edit This Log</a>
                                    <form action={`/${voter._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="DELETE"/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
};

module.exports = Index;