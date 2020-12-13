import Vue from 'vue'
import bus from '../utils/bus'

const modal = {
  open: () => bus.$emit('modal:toggle', { status: true }),
  close: () => bus.$emit('modal:toggle', { status: false })
}

export default (ctx, inject) => {
  if (!Vue.prototype.$modal) {
    Object.defineProperty(Vue.prototype, '$modal', {
      get: () => modal,
      set: () => {
        throw new Error('You can\'t set $modal')
      }
    })
  }

  ctx.$modal = modal
  inject('$modal', modal)
}
