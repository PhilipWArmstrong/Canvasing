const React = require('react');

class Index extends React.Component{
    render () {
        console.log(this.props)
        return (
            <div>
                <h1>Registered Voters in the District</h1>
                {/* <nav>
                    <a href="/canvasing/new">Add New Voter to Canvasing List</a>
                </nav> */}
                <form action="/canvasing/new">
                    <button type="submit">Add New Voter to Canvasing List</button>
                </form>
                <table>
                <tr>
                        <th>Voter's Name</th>
                        <th>Address</th>
                        <th>Edit Voter Profile</th>
                        <th>Delete Voter Profile</th>
                    </tr>
                    {
                        this.props.voters.map((voter, i) => {
                            return (
                                <tr>
                                    <td>
                                        <a href={`/canvasing/${voter._id}`}>{voter.name}</a> <br/>
                                    </td>
                                    <td>
                                        {voter.address} <br/>
                                    </td>
                                    <td>
                                        {/* Party Affiliation: {voter.party} <br/>
                                        Are you registered to vote?: {voter.registered? `Registered to vote`:`Not registered to vote`} <br/>
                                        Will you pledge a donation to the campaign: {voter.commitToDonate? `Voter will commit to donate`:`Voter will not commit to donate`} <br/> */}
                                        <form action={`/canvasing/${voter._id}/edit`}>
                                            <button>EDIT</button>
                                        </form>
                                        {/* <a href={`/canvasing/${voter._id}/edit`}>Edit</a> */}
                                    </td>
                                    <td>
                                        <form action={`/canvasing/${voter._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value="DELETE"/>
                                        </form>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
};

module.exports = Index;