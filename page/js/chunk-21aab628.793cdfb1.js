(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21aab628"],{"5eeb":function(e,t,n){"use strict";var o=n("7420"),c=n.n(o);c.a},7420:function(e,t,n){},fc5c:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-select-service"},[n("im-demo-row",{attrs:{title:"基本用法"}},[n("im-button",{ref:"button0",attrs:{label:"toggle"},on:{click:function(t){return e.select(0)}}})],1),n("im-demo-row",{attrs:{title:"测试select服务以及popper服务性能优化"}},[n("im-button",{ref:"button1",attrs:{label:"Button1"},on:{click:function(t){return e.select(1)}}}),n("im-button",{ref:"button2",attrs:{label:"Button2"},on:{click:function(t){return e.select(2)}}})],1),n("im-demo-row",{attrs:{title:"测试popper参数"}},[n("im-button",{ref:"button3",attrs:{label:"toggle"},on:{click:function(t){return e.select(3)}}})],1),n("im-demo-row",{attrs:{title:"移动选择项"}},[n("im-button",{ref:"button6",attrs:{label:"toggle"},on:{click:function(t){return e.select(6)}}})],1),n("im-demo-row",{attrs:{title:"自定义渲染内容，渲染函数"}},[n("im-button",{ref:"button7",attrs:{label:"toggle"},on:{click:function(t){return e.select(7)}}})],1),n("im-demo-row",{attrs:{title:"指定任意目标"}},[n("i",{ref:"button8",on:{click:function(t){return e.select(8)}}},[e._v("\n            普通文本\n        ")]),n("i",{ref:"button81",on:{click:function(t){return e.select(81)}}},[e._v("\n            普通文本\n        ")])]),n("im-demo-row",{attrs:{title:"使用渲染函数自动以下拉内容"}},[n("im-button",{ref:"button9",attrs:{label:"toggle"},on:{click:function(t){return e.select(9)}}})],1)],1)},c=[],i=n("cebc"),a=n("5176"),r=n.n(a),l=(n("96cf"),n("3b8d")),s=(n("7f7f"),{name:"demo-select-service",data:function(){this.$createElement;return{selectService:{},option2:{data:[{name:"上海",val:"shanghai"},{name:"北京",val:"beijing"},{name:"广州",val:"guangzhou"}]},option3:{popper:{disabledEqual:!0,width:"200px",height:"150px",arrow:!0}},option4:{searchInput:!0},option5:{popper:{disabledEqual:!0,width:"200px"}},option7:{popper:{width:"150px",disabledEqual:!0},render:function(e,t){var n=t.item;t.index;return e("div",{class:"demo-select-item"},[e("div",{class:"demo-select-item-title"},[n.name]),e("div",{class:"demo-select-item-desc"},[n.desc])])}},option9:{content:function(e){return e("div",{style:"width:100%"},[e("im-radio"),e("im-toggle"),e("im-button",{attrs:{label:"hello"}})])}}}},methods:{select:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.selectService[t]){e.next=9;break}return e.next=3,this.$plain.$select.getSelect();case 3:this.selectService[t]=e.sent,!this["option".concat(t)]&&(this["option".concat(t)]={}),!this["option".concat(t)].reference&&(this["option".concat(t)].reference=this.$refs["button".concat(t)]),this.selectService[t].select(r()({},{data:[{name:"湖南",desc:"金三角建材城",val:"1"},{name:"湖北",desc:"中豪装饰城",val:"2"},{name:"江西",desc:"红星美凯龙",val:"3"},{name:"山东",desc:"大红房装饰城",val:"4"},{name:"山西",desc:"红星美凯龙和平商场",val:"5"},{name:"广西",desc:"红星美凯龙方北商场",val:"6"},{name:"安徽",desc:"怀特装饰城",val:"7"},{name:"河北",desc:"红房子家居广场",val:"8"},{name:"河南",desc:"758陶瓷市场",val:"9"},{name:"广东",desc:"好家居装饰城",val:"10"}],labelKey:"name",valueKey:"val",onClose:function(){return n.selectService[t]=null}},this["option".concat(t)])).then(function(e){console.log("done",Object(i["a"])({},e)),n.$message.show(e.name)}),e.next=10;break;case 9:this.selectService[t].hide();case 10:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}}),u=s,m=(n("5eeb"),n("2877")),d=Object(m["a"])(u,o,c,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-21aab628.793cdfb1.js.map