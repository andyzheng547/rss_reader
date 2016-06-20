## RSS Reader - Angular

_Basic models:_ User, Rss Feed

**_Angular states:_**
1. **home** - introduction/about page of the app
2. **login** - login to the app
3. **logout** - log out of the app
4. **feeds** - shows all the feeds for user
  - get feeds object based when initializing the service
  - store inside this.feeds based on feed id
  - when clicked, get id and search this.feeds for feed object,
    then get and populate div with rss feed articles using google api
5. **feeds.create** - add a new rss feed to account
6. **feeds.manage** - see all rss feeds and can update/delete from page
7. **feeds.read** - saves rss feeds from google load user can navigate through rss feed without going to new page
  - when user clicks next post, the iframe changes where it loads to be the next link

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
