(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bacd4"],{3980:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"demo-tag"},[e("im-demo-row",{attrs:{title:"基本用法"}},[e("im-tag",{attrs:{label:"针织"}}),e("im-tag",{attrs:{label:"棉纺"}})],1),e("im-demo-row",{attrs:{title:"颜色"}},t._l(t.colors,function(t){return e("im-tag",{key:t,attrs:{label:t,color:t}})}),1),e("im-demo-row",{attrs:{title:"可删除"}},t._l(t.colors,function(a){return e("im-tag",{key:a,attrs:{label:a,color:a,close:""},on:{click:function(e){return t.$message.show("click:"+a)},close:function(e){return t.$message.show("close:"+a)}}})}),1),e("im-demo-row",{attrs:{title:"大小尺寸"}},t._l(["large","default","small"],function(t){return e("im-tag",{key:t,attrs:{label:t,size:t}})}),1),e("im-demo-row",{attrs:{title:"自定义渲染内容"}},[e("im-tag",[e("im-icon",{attrs:{icon:"pad-plus"}}),e("span",[t._v("搜索")]),e("im-icon",{attrs:{icon:"pad-search"}})],1)],1),e("im-demo-row",{attrs:{title:"标签输入框"}},[e("im-tag-input",{attrs:{value:["北京","上海","广州"]}})],1),e("im-demo-row",{attrs:{title:"标签输入框"}},[e("im-tag-input",{attrs:{value:["北京","上海","广州"],icon:"pad-search"}})],1),e("im-demo-row",{attrs:{title:"标签输入框颜色"}},t._l(t.colors,function(t){return e("im-tag-input",{key:t,attrs:{value:["北京","上海","广州"],color:t}})}),1),e("im-demo-row",{attrs:{title:"标签输入框，可输入"}},[e("im-tag-input",{attrs:{input:""},model:{value:t.val,callback:function(a){t.val=a},expression:"val"}}),e("im-tag-input",{attrs:{input:""},model:{value:t.val,callback:function(a){t.val=a},expression:"val"}})],1),e("im-demo-row",{attrs:{title:"标签输入框，设置宽度"}},[e("im-demo-row-item",{attrs:{title:"width=null"}},[e("im-tag-input",{attrs:{value:["北京","上海","广州"],input:"",width:""}})],1),e("im-demo-row-item",{attrs:{title:"width=100%"}},[e("im-tag-input",{attrs:{value:["北京","上海","广州"],input:"",width:"100%"}})],1)],1),e("im-demo-row",{attrs:{title:"标签输入框，自定义处理添加删除动作"}},[e("im-tag-input",{attrs:{value:t.val2,onCreate:function(a){return t.val2.push("hello:"+a)},onRemove:function(a,e){return t.val2.splice(e,1)},input:""}})],1)],1)},r=[],l={name:"demo-tag",data:function(){return{val:["北京","上海","广州"],val2:["北京","上海","广州"],colors:["primary","success","warn","error","info","disabled"]}}},o=l,n=e("17cc"),s=Object(n["a"])(o,i,r,!1,null,null,null);a["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0bacd4.3c71077c.js.map