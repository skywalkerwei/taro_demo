// src/pages/index/index.js
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import { AtTabBar } from 'taro-ui'

@inject('tabbarStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  constructor (props) {
    super(props)
    this.state = {
      current: 3
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
    switch (value) {
      case 1:
          Taro.redirectTo({
            url: '../release/index'
          })
          break;          
      default:
          break;
    }    
  }

  componentWillMount () {}

  componentWillReact () {
    // console.log('componentWillRect')
  }

  componentDidMount () {
    Taro.eventCenter.on('login', (tag)=>{
      console.log("Taro.eventCenter.on login",tag);
    })
  }

  componentWillUnmount () { 
    Taro.eventCenter.off();
  }

  componentDidShow () { }

  componentDidHide () { }

  changeA = () => {
    const { tabbarStore } = this.props
    console.log(tabbarStore.list);
    tabbarStore.changeA()
  }

  changeB = () => {
    const { tabbarStore } = this.props
    console.log(tabbarStore.list);
    tabbarStore.changeB()
  }

  render () {
    const { tabbarStore: { list } } = this.props
    return (    
      <View className='Mycenter'>
        <Button onClick={this.changeA}>A</Button>
        <Button onClick={this.changeB}>B</Button>
        <AtTabBar fixed tabList={list.slice()}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}

export default Index
