(window.webpackJsonp=window.webpackJsonp||[]).push([[46,34],{1275:function(t,e,n){"use strict";n(923)},1276:function(t,e,n){var o=n(8)(!1);o.push([t.i,"#chooseImg[data-v-292a8751]{display:none}.vxe-button+.vxe-button[data-v-292a8751]{margin-left:0!important}",""]),t.exports=o},1314:function(t,e,n){"use strict";n.r(e);n(17);var o=n(651),r=n(85),c=n(97),l=n.n(c),d={layout:"admin",mixins:[o.default],data:function(){var t=this;return{tableProxy:{ajax:{query:function(){return Object(r.b)()},delete:function(e){return t.updateComment(t.selects,null,!0)}},props:{result:"data"}},tableToolbar:{buttons:[{code:"add",name:"安装插件",icon:"fa  fa-cloud-upload",status:"success"},{code:"reload",name:"重载插件",icon:"fa  fa-refresh",status:"warning"}],zoom:!0,custom:!0},tableColumn:[{field:"name",title:"插件名字"},{field:"description",title:"插件描述"},{field:"author",title:"开发作者",slots:{default:"author"}},{field:"version",title:"插件版本"},{title:"操作",slots:{default:"option"}}]}},methods:{toolbarClick:function(t){var code=t.code;t.button;switch(code){case"add":this.uploadImage();break;case"reload":this.reloadPlugins()}},selectImg:function(t){var e=this,n=t.target.files||t.dataTransfer.files;if(n.length&&(this.picValue=n[0],this.url=this.getObjectURL(this.picValue),null!==this.picValue&&void 0!==this.picValue)){var o=new FormData;o.append("file",this.picValue),this.$store.dispatch("admin-plugins/uploadPlugins",o).then((function(data){e.$message.success("安装成功"),e.$refs.grid.commitProxy("query")})).catch((function(t){return e.$message.error(t)}))}},uploadImage:function(){l()("#chooseImg").click()},getObjectURL:function(t){var e=null;return void 0!==window.createObjectURL?e=window.createObjectURL(t):void 0!==window.URL?e=window.URL.createObjectURL(t):void 0!==window.webkitURL&&(e=window.webkitURL.createObjectURL(t)),e},deletePlugin:function(t){var e=this;this.$store.dispatch("admin-plugins/deletePlugins",t).then((function(){e.$message.success("删除成功"),e.$refs.grid.commitProxy("query")})).catch((function(t){return e.$message.error(t)}))},reloadPlugins:function(){var t=this;this.$store.dispatch("admin-plugins/reloadPlugins").then((function(){t.$message.success("重载成功"),t.$refs.grid.commitProxy("query")})).catch((function(e){return t.$message.error(e)}))},pluginsSetting:function(path,t){this.$router.push(path),this.$store.dispatch("admin/addTag",{name:"".concat(t,"-设置"),path:path})},update:function(t){var e=this,n=this.$loading({lock:!0,text:"正在更新",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.$store.dispatch("admin-plugins/downloadPlugins",{url:t}).then((function(){e.$message.success("更新成功！"),e.$refs.grid.commitProxy("query")})).catch((function(t){e.$message.error(t)})).finally((function(t){return n.close()}))}}},f=(n(1275),n(5)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{staticClass:"hidden",attrs:{id:"chooseImg",type:"file",accept:"application/zip",name:"file"},on:{change:t.selectImg}}),t._v(" "),n("el-card",{staticClass:"box-card"},[n("vxe-grid",{ref:"grid",attrs:{border:"",resizable:"",height:"780","row-id":"id","pager-config":{pageSize:10},"proxy-config":t.tableProxy,"toolbar-config":t.tableToolbar,columns:t.tableColumn},on:{"toolbar-button-click":t.toolbarClick},scopedSlots:t._u([{key:"author",fn:function(e){var o=e.row;return[n("a",{attrs:{href:o.site,target:"_blank"}},[t._v(t._s(o.author))])]}},{key:"option",fn:function(e){var o=e.row;return[o.version!==o.new_version?n("vxe-button",{attrs:{icon:"fa fa-refresh",title:"更新",circle:""},on:{click:function(e){return t.update(o.download_url)}}}):t._e(),t._v(" "),n("vxe-button",{attrs:{icon:"fa fa-cog",title:"设置",circle:""},on:{click:function(e){return t.pluginsSetting("/admin/setting/plugins/"+o.id,o.name)}}}),t._v(" "),n("el-popconfirm",{attrs:{title:"确定要删除这个插件？"},on:{onConfirm:function(e){return t.deletePlugin(o.id)}}},[n("vxe-button",{attrs:{slot:"reference",icon:"fa fa-trash",title:"删除",circle:""},slot:"reference"})],1)]}}])})],1)],1)}),[],!1,null,"292a8751",null);e.default=component.exports},651:function(t,e,n){"use strict";n.r(e),e.default={head:function(){return{title:"XBlog后台管理系统"}}}},923:function(t,e,n){var content=n(1276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("5efc5fed",content,!0,{sourceMap:!1})}}]);