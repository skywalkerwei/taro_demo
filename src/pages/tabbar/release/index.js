import Taro, { Component } from '@tarojs/taro'
import './index.scss'

class Release extends Component {

  config = {
    navigationBarTitleText: '发布',
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
      </View>
    )
  }
}

export default Release
