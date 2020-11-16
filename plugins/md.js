import Vue from 'vue'
import MobileDetect from 'mobile-detect'

const getWindow = () => process.client ? window : {}

const createMd = (ctx, inject) => {
  const types = {
    true: () => {
      const detect = new MobileDetect(ctx.req.headers['user-agent'])
      return {
        ...detect,
        isMobile () {
          return !!detect.phone()
        },
        isTablet () {
          return !!detect.tablet()
        },
        isDesktop () {
          return !(this.isMobile() || this.isTablet())
        },
        isDesktopXl () {
          return this.isDesktop()
        }
      }
    },
    false: () => {
      return {
        isMobile () {
          return getWindow().innerWidth < 768
        },
        isTablet () {
          return (getWindow().innerWidth >= 768 && getWindow().innerWidth < 1024)
        },
        isDesktop () {
          return !(this.isMobile() || this.isTablet()) || (getWindow().innerWidth >= 1024 && getWindow().innerWidth < 1480)
        },
        isDesktopXl () {
          return getWindow().innerWidth > 1480
        }
      }
    }
  }

  const isServerSide = Boolean(ctx.req)
  const mobileDetect = types[isServerSide]()

  if (!process || process.env.NODE_ENV !== 'test') {
    if (!Vue.prototype.$md) {
      Object.defineProperty(Vue.prototype, '$md', {
        get: () => mobileDetect,
        set: () => {
          throw new Error('You can\'t set $md')
        }
      })
    }
  }

  ctx.$md = mobileDetect
  inject('$md', mobileDetect)
  return mobileDetect
}

export const mockedMd = (process && process.env.NODE_ENV === 'test')
  ? createMd({}, () => ({}))
  : {}

export default createMd
