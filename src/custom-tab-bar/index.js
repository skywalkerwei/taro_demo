import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Navigator } from '@tarojs/components'
import './index.scss'

export default class TabBarItem extends Component {
  static defaultProps = {
    isIphoneX: null,
    tabbar: {
      "selected": 0,
      "borderStyle": "black",
      "selectedColor": "#000000",
      "backgroundColor": "#ffffff",
      "color": "#c7c7c7",
      "list": [
        {
          "pagePath": "/pages/tabbar/index/index",
          "selectedIconPath": "../../../common/image/tab/icon_home_HL.png",
          "iconPath": "../../../common/image/tab/icon_home.png",
          "text": "发现"
        },
        {
          "pagePath": "/pages/tabbar/release/index",
          "iconPath": "../../../common/image/tab/icon_release.png",
          "isSpecial": true,
          "text": "发布"
        },
        {
          "pagePath": "/pages/tabbar/me/index",
          "selectedIconPath": "../../../common/image/tab/icon_mine_HL.png",
          "iconPath": "../../../common/image/tab/icon_mine.png",
          "text": "我"
        }
      ]
    }
  }

  switchTab = (path,index,e) => {
    const oIndex = index
    this.props.tabbar.selected = oIndex
    const url = path
    Taro.switchTab({url})
    console.log("switchTab",path,index,e)
  }

  render () {
    const {isIphoneX,tabbar} = this.props
    return (
      <View className={`tabbar_box ${isIphoneX?'iphoneX-height':''}`}
            style={{ backgroundColor:`${tabbar.backgroundColor}`}}>
        {
          tabbar.list.map((item,index) =>{
            return item.isSpecial?
              <View className='tabbar_nav' url={item.pagePath} key={index} style={{color:`${tabbar.selectedColor}`}}
                         onClick={this.switchTab.bind(this,item.pagePath,index)}>
                <View className='special-wrapper'>
                  <Image className='tabbar_icon' src={item.iconPath}></Image>
                </View>
                <View className='special-text-wrapper'></View>
                <Text>{item.text}</Text>
              </View>:
              <View className='tabbar_nav'url={item.pagePath} key={index} style={{color:`${tabbar.selected === index ? tabbar.selectedColor : tabbar.color}`}}
                    onClick={this.switchTab.bind(this,item.pagePath,index)}>
                <Image className='tabbar_icon' src={tabbar.selected === index ? item.selectedIconPath : item.iconPath}></Image>
                <Text>{item.text}</Text>
              </View>
          })
        }
      </View>
    )
  }
}

