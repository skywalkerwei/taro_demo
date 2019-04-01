import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/tabbar/index'

import configStore from './store'

import './app.scss'

const store = configStore

class App extends Component {

  config = {
    pages: [
      'pages/tabbar/index/index',
      'pages/tabbar/release/index',
      'pages/tabbar/me/index',
      'pages/test/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      custom: true,
      borderStyle: "black",
      selectedColor: "#000000",
      backgroundColor: "#ffffff",
      color: "#c7c7c7",
      list: [
        {
          pagePath: "pages/tabbar/index/index",
          selectedIconPath: "./common/image/tab/icon_home_HL.png",
          iconPath: "./common/image/tab/icon_home.png",
          text: "发现"
        },
        {
          pagePath: "pages/tabbar/release/index",
          iconPath: "./common/image/tab/icon_release.png",
          isSpecial: true,
          text: "发布"
        },
        {
          pagePath: "pages/tabbar/me/index",
          selectedIconPath: "./common/image/tab/icon_mine_HL.png",
          iconPath: "./common/image/tab/icon_mine.png",
          text: "我"
        }
      ]
    }
  }

  componentWillMount () {
    //隐藏系统tabBar
    // Taro.hideTabBar()
    //获取设备信息[判断是否iPhoneX]
    Taro.getSystemInfo({
      success: function (res) {
        let modelmes = res.model;
        if (modelmes.search('iPhone X') != -1) {
          store.isIphoneX = true
        } else {
          store.isIphoneX = false
        }
      }
    });
    //
    console.log("store",store,this.c)
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
