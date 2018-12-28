// 路由配置解析
// | property | type | default | describe |
// | - | - | - | - |
// | path | String | - | 文件路径 |
// | config | Object | {} | 页面配置 |
// | route |String | - | 页面路由 |
// | native | Boolean | false | 原生页面 |
// | subPackage | Boolean | false | [分包加载](#quickstart) |
// | root | String | - | 分包根路径 |
// | name | String | 分包目录名称 | 分包别名 |
// | independent | Boolean | false | 独立分包 |



const home = require('./home')

//路由集合
const routePages = [].concat(home)

const routes = {
  pages: routePages,
   window: {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle": "black"
  }
}
module.exports = routes