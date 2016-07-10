## RSS Reader - Angular

[RSS Reader](https://rss-reader-az.herokuapp.com/) is a free to use web app for browsing through all your basic favorite rss feeds. Add your rss feeds and browse your content all in one place. To use the service, just register with a username and password. _RSS Reader does not collect or keep track of any personal info._ It is a free app available to anyone for public use.

RSS Reader makes use of the [Google Feed API](https://developers.google.com/feed "Google Feed API"). RSS Reader may break depending on changes made to Google's Feed API. __Note:__ Google Feed API's Terms of Service state that the depreciation notice does not apply as of April 20, 2015, however this is of course subject to change.

The app can be found at: [https://rss-reader-az.herokuapp.com/](https://rss-reader-az.herokuapp.com/)

## Getting Started (if you want to contribute or play with the source code)

1. Clone this repository

`$ git clone https://github.com/andyzheng547/rss_reader.git`

2. Change directories

`$ cd rss_reader`

3. Go into the directory. Then create and migrate the database.

`$ rake db:create RAILS_ENV=environment

 $ rake db:migrate RAILS_ENV=environment`

4. Open up the server

`$ rails s or rails server`

5. Go to `http://localhost:3000` in your browser and code away. Play with it to your heart's desire.

## Contributing

This application is built by Andy Zheng. The source code can be found on [Github](https://github.com/andyzheng547/rss_reader). I encourage you to take a look at the code and make changes if you want. If something is wrong or can be improved with the application, you can make a pull request with a detailed description of the feature/bug that you added or changed. You can also contact me [andy.zheng249@gmail.com](mailto:andy.zheng249@gmail.com), if that is too much work and you just wanted to make a suggestion.

## License

This open sources and under the MIT License. If you want to use the code, go wild.
