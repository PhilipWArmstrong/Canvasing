MVP - Minimum Viable Product

1. technologies used
    1. Mongo
    2. Mongoose
    3. JSX
    4. JS
    5. Express
2. the approach was taken
    1. I built an registered voters canvasing list for a volunteer to use to door-knock and get pledges for contributitons. 
    2. I started off with an MVC file strcuture to organize my routers, web pages, and schema. 
    3. I built in 27 voters information into the database using mongodb. 
    4. Voters profiles consit of names, addresses, party affiliation, current registration status, and if the voter has expressed a willingness to vote in the past.
3. unsolved problems
    1. I was not able to add CSS to jsx. I simply ran out of time. 
    2. I was not able to fix the issue of my new page not routing back to the index page. The information saves to the database, but doesn't automatically take you back like I intended for it. 
4. user stories
    1. I work for the Daryl Morey for Governor Campagin. 
    2. I have been asigned a list of voters in my district to go visit and raise money and Nerd Elvis' (Daryl Morey) profile before the election. 
    3. We have receieved all names, address, and party affiliations from public voter rolls form the state of Texas. 
    4. We have some additional information on voters if they have donated to the campagin before. 
    5. The job is to go down the list and identify which voters will commit to donating, which voter will not vote for Daryl and needs to be removed from the list, and add new voters who were overlooked in the household. 
5. notes
    1. Next steps
        1. Fix new voter page so it returns to the index page
        2. add css. style needs to follow votus.com scheme 
        3. add voter roll API to populate starting database