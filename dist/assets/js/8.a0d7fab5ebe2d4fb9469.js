webpackJsonp([8],{FVUY:function(t,e){},epW7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ZYmg");window.blog=n.a;var s={data:function(){return{blogs:[],total:0,page:1}},created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,n.a.getIndexBlogs({page:this.page}).then(function(e){console.log(e),t.blogs=e.data,t.total=e.total,t.page=e.page})},methods:{onPageChange:function(t){var e=this;console.log(t),n.a.getIndexBlogs({page:t}).then(function(a){console.log(a),e.blogs=a.data,e.total=a.total,e.page=a.page,e.$router.push({path:"/",query:{page:t}})})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("section",{staticClass:"blog-posts"},t._l(t.blogs,function(e){return a("router-link",{key:e.id,staticClass:"item",attrs:{to:"/detail/"+e.id}},[a("figure",{staticClass:"avatar"},[a("img",{attrs:{src:e.user.avatar,alt:e.user.username}}),t._v(" "),a("figcaption",[t._v(t._s(e.user.username))])]),t._v(" "),a("h3",[t._v(t._s(e.title)+" "),a("span",[t._v(" "+t._s(t.friendlyDate(e.createdAt)))])]),t._v(" "),a("p",[t._v(t._s(e.description))])])}),1),t._v(" "),a("section",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page},on:{"current-change":t.onPageChange}})],1)])},staticRenderFns:[]};var r=a("VU/8")(s,o,!1,function(t){a("FVUY")},"data-v-15f1df5d",null);e.default=r.exports}});
//# sourceMappingURL=8.a0d7fab5ebe2d4fb9469.js.map