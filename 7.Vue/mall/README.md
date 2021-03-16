# mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 项目开始
### 1. 创建项目
```shell
$ vue create mall
```
> 删除不需要的自动生成的文件

### 2. 划分目录结构
```
--src
  --assets  # 存放资源 css,img
  --common  # 公共js文件,公共常量，工具类等
  --components  # 公共组件
    --common    # 完全公共的组件，其他项目也可以使用
    --content   # 业务相关组件，该项目中使用的组件
  --network # 网络请求相关
  --router  # 路由
  --store   # vuex，公共状态管理
  --views   # 视图,主要页面视图
  --App.vue
  --main.js
```

### 3.引入基础css文件
> 创建normalize.css和base.css

> 在css中通过 ` @import "./normalize.css"; `引入normalize.css

> 在App.vue中引入base.css ` @import "./assets/css/base.css"; `使默认样式生效


### 4. 基础配置
#### 4.1 配置路径别名,在项目根目录下创建 `vue.config.js` 文件
```javascript
/*
  配置文件路径别名
*/
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
```

#### 4.2 配置编辑器代码风格，在项目根目录下创建 `.editorconfig` 文件
```editorconfig
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

### 5. 安装配置路由
#### 5.1 安装vue-router
```shell
$ npm install vue-router --save
```

