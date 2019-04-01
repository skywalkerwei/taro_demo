import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton,AtIcon,AtDivider } from 'taro-ui'

import './index.styl'
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/loading.scss";

class Test extends Component {

  config = {
    navigationBarTitleText: '练手咯'
  }

  state = { date: new Date() }


  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  constructor () {
    super()
    // const numbers = [...Array(10).keys()] // [0, 1, 2, ..., 98, 99]
    // this.state = { listItems: numbers }
  }
  componentWillMount() {}
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  //卸载
  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  componentDidShow () { }

  componentDidHide () { }


  tick () {
    this.setState({
      date: new Date()
    });
  }

  render () {
    const listItems = [...Array(10).keys()]


    return (
      <View className='index'>
        <View><Text>Hello, World</Text></View>
        <view><text>现在时间是：{this.state.date.toLocaleTimeString()}</text></view>
        <View className='numList'>
          {
            listItems.map((number) => {
              return <View key={String(number)} className='numItem'> Num: {number + 1} </View>
            })
          }
        </View>
        <AtButton type='primary'>按钮文案</AtButton>
        <AtIcon value='clock' size='30' color='#F00'></AtIcon>
        <AtDivider content='没有更多了' fontColor='#ccc' lineColor='#ccc' />
      </View>
    )
  }
}

export default Test
