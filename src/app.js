// src/app.js
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'

// import counterStore from './store/counter'
// const store = {
//   counterStore,
//   userStore
// }
import store from './store/'
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss' 
import './app.scss'

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/release/index',
      'pages/me/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      //custom: true,
      borderStyle: "black",
      selectedColor: "#000000",
      backgroundColor: "#ffffff",
      color: "#c7c7c7",
      list: [
        {
          pagePath: "pages/index/index",
          selectedIconPath: "./common/image/tab/icon_home_HL.png",
          iconPath: "./common/image/tab/icon_home.png",
          text: "发现"
        },
        {
          pagePath: "pages/release/index",
          selectedIconPath: "./common/image/tab/icon_release.png",
          iconPath: "./common/image/tab/icon_release.png",
          text: "发布"
        },
        {
          pagePath: "pages/me/index",
          selectedIconPath: "./common/image/tab/icon_mine_HL.png",
          iconPath: "./common/image/tab/icon_mine.png",
          text: "我"
        }
      ]
    }
  }

  componentWillMount () {
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
