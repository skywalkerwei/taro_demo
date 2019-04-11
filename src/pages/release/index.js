import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'

@inject('counterStore','userStore')
@observer
class Release extends Component {

  config = {
    navigationBarTitleText: '发布',
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow() {

  }

  componentDidHide () { }

  render () {
    const { counterStore: { counter } } = this.props
    const { userStore: { uid } } = this.props
    return (
      <View className='index'>
          <Text>{counter}</Text> 
          <Text>{uid}</Text> 
      </View>
    )
  }
}

export default Release
