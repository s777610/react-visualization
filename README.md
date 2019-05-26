## React Cryptocurrency Visualization

[Click here to see demo](https://s777610.github.io/react-visualization/#/).

### Clone
```
git clone https://github.com/s777610/react-visualization.git
```

### Install
```
npm i
```

### Start
```
npm start
```


<br>
<br>


### Setting Page
![Screen Shot 2019-05-26 at 12 55 12 AM](https://user-images.githubusercontent.com/35472776/58378929-274dcf00-7f51-11e9-96d3-448aa686fbe3.png)


<br>
<br>


### Dashboard Page
![Screen Shot 2019-05-26 at 12 55 23 AM](https://user-images.githubusercontent.com/35472776/58378930-29b02900-7f51-11e9-8253-5bc5c686229d.png)


### Architecture

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── index.html
│   ├── manifest.json
│   └── w.png
└── src
    ├── actions
    │   ├── index.js
    │   └── types.js
    ├── assets
    │   ├── economica-bold.ttf
    │   ├── email_icon.png
    │   ├── github_icon.png
    │   ├── instagram_icon.png
    │   ├── linkedin_icon.png
    │   ├── roboto-condensed.light.ttf
    │   └── w.png
    ├── components
    │   ├── App.js
    │   ├── dashboard
    │   │   ├── Dashboard.js
    │   │   ├── chart
    │   │   │   ├── ChartSelect.js
    │   │   │   ├── HighChartTheme.js
    │   │   │   ├── HighchartsConfig.js
    │   │   │   └── PriceChart.js
    │   │   └── coin
    │   │       ├── CoinSpotligh.js
    │   │       ├── PriceGrid.js
    │   │       └── PriceTile.js
    │   ├── layout
    │   │   ├── HeadBar.js
    │   │   └── socials
    │   │       ├── Social.js
    │   │       ├── Socials.js
    │   │       └── SocialsBox.js
    │   ├── setting
    │   │   ├── Search.js
    │   │   ├── Setting.js
    │   │   ├── Welcome.js
    │   │   └── coin
    │   │       ├── CoinGrid.js
    │   │       └── CoinTile.js
    │   └── ui
    │       ├── ConfirmButton.js
    │       └── Spinner.js
    ├── data
    │   └── socialProfiles.js
    ├── history.js
    ├── index.css
    ├── index.css.map
    ├── index.js
    ├── index.scss
    ├── reducers
    │   ├── coinReducer.js
    │   ├── index.js
    │   └── pageReducer.js
    └── serviceWorker.js
```