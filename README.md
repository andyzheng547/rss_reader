## RSS Reader - Angular

_Basic models:_ User, Rss Feed

**_Angular states:_**
1. **home** - introduction/about page of the app
2. **user** - user state. has a navbar and a div with ui-view
3. **user.login** - login to the app
4. **user.logoff** - log out of the app
5. **user.register** - register new account
6. **feed** - feeds state. has a navbar and a div with ui-view
7. **feed.create** - add a new rss feed to account
8. **feed.manage** - see all rss feeds and can update/delete from page
9. **feed.read** - saves rss feeds from google load user can navigate through rss feed without going to new page
  - when user clicks next post, the iframe changes where it loads to be the next link
10. **feed.all** - shows all the feeds for the user
  - get feeds object based when initializing the service
  - store inside this.feeds based on feed id
  - when clicked, get id and search this.feeds for feed object,
    then get and populate div with rss feed articles using google api

### Controllers
1. __UserController__ - controls the sessions and update account
2. __FeedController__ - gets the users rss feeds and displays posts from feed

### Services
1. __SharedDataService__ - stores data to be shared between the controllers (user id, logged in status)

<!-- Inside FeedsService -->
this.feeds = {
  id1 = {info},
  id2 = {info}
}

  <div data-id={{feed.id}} ng-click="findFeed(feed.id)">

  </div>
