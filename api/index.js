// api封装的目标：
// 1. 接口api化
// 2. 请求自动绑定
// 3. 防止重复提交

import service from "../utils/service"
import getGoodRegisterCheckDetail from "../views/model1/business1/services/meat"

service.parseApi("meat", getGoodRegisterCheckDetail)

export default service
