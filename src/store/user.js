// src/store/user.js
import { observable } from 'mobx'

const userStore = observable({
  uid: 0,
  login() {
    this.uid = 1
  },
  logout() {
    this.uid = 0
  },
})

export default userStore