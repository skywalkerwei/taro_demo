// src/store/user.js
import { observable } from 'mobx'

const tabbarStore = observable({
  list: [
    { title: '首页', iconType: 'home'},
    { title: '评论', iconType: 'message' },
    { title: '引导', iconType: 'folder'},
  ],
  changeA() {
    this.list = [
      { title: '首页A', iconType: 'home'},
      { title: '评论A', iconType: 'message' },
      { title: '引导A', iconType: 'folder'},
    ]
  },
  changeB() {
    this.list = [
      { title: '首页B', iconType: 'home'},
      { title: '评论B', iconType: 'message' },
      { title: '引导B', iconType: 'folder'},
    ]
  },
})

export default tabbarStore