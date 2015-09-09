# Music History

This is the final iteration of the Music History web app. Music History is a basic music library that allows a user to add, view, and remove music. The project can be viewed at http://sarah-story.github.io/angular-music-history. 

It is connected to the Spotify API so that the user can search for and listen to music. The app was built using AngularJS and it utilizes RequireJS. I used features from [ES6](http://es6-features.org/) so I used [Babel](https://babeljs.io/) to compile the project to ES5. 

###Getting Started

#####Clone the repo

```
git clone https://github.com/sarah-story/angular-music-history.git
```

#####Install dependencies

``` 
cd ~/angular-music-history/lib
bower install
npm instal
```

#####Run a server

```
cd ..
python -m SimpleHTTPServer 8000
```

The website should be running on http://localhost:800. If you make any changes, you can run grunt by:

```
cd /lib
grunt
```

and it will check your JavaScript and compile your SASS
