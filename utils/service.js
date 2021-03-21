import { request } from '@/utils/request'

class Service {
  constructor() {
    this.apiList = []
  }

  // 接口api化
  parseApi(domain, moduleName, module) {
    if(!module) {
      throw '缺少接口模块的参数'
    }

    let obj = (this[moduleName] = module)
    Object.keys(module).forEach(item => {
      if (module[item]['url']) {
        this.apiList[moduleName + module[item]['url']] = {
          state: 'pending',
          data: []
        }
        obj[item] = this.sendRequest.bind(
          this,
          moduleName,
          domain,
          module[item]['url']
        )
      }
    })
  }

  // 调用请求方法
  sendRequest(moduleName, domain, url, options) {
    const params = {
      url: url,
      data: options
    }
    if(this.apiList[moduleName + url]['state'] === 'pending'){
      this.apiList[moduleName + url]['state'] = 'loading'
      request(domain, params).then(data => {
        const [error, res] = data
        if (!error && res && res.data.code === 1) {
          this.apiList[moduleName + url]['data'] = res.data.data
        }
        this.apiList[moduleName + url]['state'] = 'pending'
      })

      // request(domain, params).then(res => {
      //   if (res && res.data.code === 1) {
      //     this.apiList[moduleName + url]['data'] = res.data.data
      //   }
      //   this.apiList[moduleName + url]['state'] = 'pending'
      // })
    }else{
      console.log(`<${url}> 接口请求的状态为：loading`)
    }
  }
}

export default new Service()
