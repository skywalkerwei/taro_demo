import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../../actions/counter'
import { AtTimeline } from 'taro-ui'
//import '../../../node_modules/taro-ui/dist/style/index.scss'
import "taro-ui/dist/style/components/timeline.scss";
import "taro-ui/dist/style/components/icon.scss";


import './index.styl'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

class Me extends Component {

    config = {
    navigationBarTitleText: '我的页面'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>me</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
<AtTimeline
  items={[
    { title: '刷牙洗脸' },
    { title: '吃早餐' },
    { title: '上班' },
    { title: '睡觉' }
  ]}
>
</AtTimeline>
      </View>
    )
  }
}

export default Me
