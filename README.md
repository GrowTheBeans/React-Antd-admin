### React 知识点

> `Context`

- [x] 表示上下文

- [x] 全局变量的概念

- 

**API知识**

- `createContext(defaultValue?)`

- 

` 提供一种方式，能够让数据在组件树中传递而不必一级一级手动传递`


> `ContextType`

- [x] 表示`Context`的语法糖


> `lazy` 

- [x] 表示懒加载

- [x] 减少组件加载

> `Suspense`

- `lazy`与`Suspence`一起使用

- **延迟加载：** 暂时没有使用的资源（页面滚动指定的区域）才进行加载

- `webpack`中提供`Code Splitting` 进行代码拆分，人为把一个页面拆分成不同的模块

- `import`引入和动态引用

```js
import('./detail.js').then(...)
```

> `memo`

- 优化性能

#### React Hooks

- `16.8+` 以上只**类组件**和**函数组件**

> 优化组件三个问题

- 函数组件无`this`问题

- 自定义`Hook`方便复用状态逻辑

- 副作用的关注点分离

> `useState`

- 替代原始的`state`成员，和`setState`方法

> `useState`副作用

- 绑定事件

- 网络请求

- 访问DOM

- [x] `Mount`之后 `componentDidMount`

- [x] `Update`之后 `componentDidUpdate`

- [x] `Unmount`之前 `componentWillUnmount`

