## 组件说明

> taro框架wxParse纯净封装组件，来源于项目实战，随下随用

### 使用方式如下：

- 组件名称

```js
DescRichText
```

-  下载到`src/components`

- 父组件引用示例：

```js
import DescRichText from '../../components/DescRichText'

```
- 在父组件View中引用  目录为(page/PARENT_COMPONENT.js)

```js
<View>
  <DescRichText desc={detail}></DescRichText>
</View>

```
-  desc（详情描述） 数据获取

```js
constructor(props) {
  super(props)
  this.state = {
    name: this.props.name,
    detail: '<div>我是div内容</div>'
  }
}

```
- 修改子组件数据

  - 文件

  ```js
  DescRichText.js
  ```
  - 修改内容

  ```js
  componentDidUpdate(){}
  
  ```
