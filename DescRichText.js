import Taro, {Component} from '@tarojs/taro'
import {
  View
}
  from '@tarojs/components'
import './DescRichText.scss'

var WxParse = require('./wxParse/wxParse');

export default class DescRichText extends Component {
  static defaultProps = {
    isEnable: true
  }
  state = {

  }

  constructor(props) {
    super(props)
    this.state = {
      desc: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps::',nextProps)
    var self = this

    self.setState({
      desc:nextProps.desc
    })
  }

  componentWillUpdate() {
    console.log('componentWillUpdate::',this.state.desc)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate::',this.state.desc)
    var self = this
    var that =  this.$scope
    if (self.state.desc) {
      console.log('有内容')
      var  article = self.state.desc
      WxParse.wxParse('article', 'html', article, that, 0)
    }
    else {
      console.log('没有获取到资源')
    }
  }
  componentWillMount() {
    console.log('componentWillMount::',this.state.desc)
  }

  componentDidMount() {
    console.log('componentDidMount::',this.state.desc)

  }

  componentWillUnmout() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {

    return (
      <View>
        {/*<RichText nodes={detail.item.extra}></RichText>*/}
        <import src='./wxParse/wxParse.wxml'/>
        <template is="wxParse" data="{{wxParseData:article.nodes}}"/>
      </View>
    )
  }
}
