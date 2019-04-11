// src/pages/index/index.js
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

// import './index.styl'

@inject('counterStore','userStore','tabbarStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillRect')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore,userStore,tabbarStore } = this.props
    counterStore.increment()
    userStore.login();
    console.log(tabbarStore.list);
    tabbarStore.changeA()
    Taro.eventCenter.trigger('login','xmsb')
  }

  decrement = () => {
    const { counterStore,userStore,tabbarStore } = this.props
    counterStore.decrement()
    tabbarStore.changeB()
    userStore.logout();
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
      </View>
    )
  }
}

export default Index
