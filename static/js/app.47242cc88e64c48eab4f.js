webpackJsonp([1],{"19tL":function(t,a){},"1FBi":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{},[n("table",{staticClass:"table table-sm"},[t._m(0),t._v(" "),n("tbody",t._l(t.songs,function(a,e){return n("tr",{key:a.id},[n("td",{staticClass:"align-middle text-muted"},[t._v(t._s(e+1))]),t._v(" "),n("td",{staticClass:"col-sm-12 col-lg-8 align-middle"},[t._v(t._s(a.name))]),t._v(" "),n("td",{staticClass:"align-middle"},[n("song",{attrs:{song_id:a.id}})],1)])}))])])},i=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("thead",[n("tr",[n("td"),t._v(" "),n("td",{staticClass:"col-sm-12 col-lg-8 align-middle text-muted"},[t._v("Title")]),t._v(" "),n("td",{staticClass:"col-lg align-middle text-muted"},[t._v("Play")])])])}],s={render:e,staticRenderFns:i};a.a=s},"1VJv":function(t,a,n){"use strict";a.a={name:"Keywords",data:function(){return{source:""}},methods:{keywordChanged:function(t){this.$emit("keywordChanged",t.target.value)}}}},"32vV":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"Keywords jumbotron jumbotron-fluid"},[n("div",{staticClass:"container text-center"},[t._m(0),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{staticClass:"form-control",attrs:{placeholder:"Search...",type:"text",id:"artist"},on:{change:t.keywordChanged}})])])])},i=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h1",[t._v("\n             林檎音楽(仮)\n            "),n("p",{staticClass:"lead text-muted py-3"},[t._v("最近好きなアルバムあるかい? ")])])}],s={render:e,staticRenderFns:i};a.a=s},"76kl":function(t,a,n){"use strict";function e(t){n("hXnm")}var i=n("zg27"),s=n("wBL8"),o=n("VU/8"),r=e,l=o(i.a,s.a,r,"data-v-76b16878",null);a.a=l.exports},"9mGq":function(t,a,n){"use strict";function e(t){n("kEOg")}var i=n("1VJv"),s=n("32vV"),o=n("VU/8"),r=e,l=o(i.a,s.a,r,"data-v-ec16b57a",null);a.a=l.exports},HPoU:function(t,a,n){"use strict";var e=n("RvFq"),i=n.n(e);a.a={props:{narrow:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!1},showlrc:{type:Number,default:0},mutex:{type:Boolean,default:!1},theme:{type:String,default:"#b7daff"},mode:{type:String,default:"circulation"},preload:{type:String,default:"auto"},listmaxheight:String,music:{type:[Object,Array],required:!0,validator:function(t){var a=void 0;a=t instanceof Array?t:[t];for(var n=0;n<a.length;n++){var e=a[n];if(!e.url||!e.title||!e.author)return e.title=e.title||"Untitled",e.author=e.author||"Unknown",!1}return!0}}},data:function(){return{control:null}},watch:{music:function(t){this.control.option.music=t,this.control.setMusic(0),this.autoplay&&this.control.play(),this.$emit("change",t)}},mounted:function(){var t=this,a=this.control=new i.a({element:this.$el,narrow:this.narrow,autoplay:this.autoplay,showlrc:this.showlrc,mutex:this.mutex,theme:this.theme,preload:this.preload,mode:this.mode,listmaxheight:this.listmaxheight,music:this.music});a.on("play",function(){t.$emit("play")}),a.on("pause",function(){t.$emit("pause")}),a.on("canplay",function(){t.$emit("canplay")}),a.on("playing",function(){t.$emit("playing")}),a.on("ended",function(){t.$emit("ended")}),a.on("error",function(){t.$emit("error")})}}},KAIp:function(t,a,n){"use strict";function e(t){n("19tL")}var i=n("wPZH"),s=n("1FBi"),o=n("VU/8"),r=e,l=o(i.a,s.a,r,"data-v-4a25a768",null);a.a=l.exports},LiLJ:function(t,a,n){"use strict";var e=n("mtWM"),i=n.n(e),s=n("afmS");a.a={name:"Song",props:["song_id"],components:{"a-player":s.a},data:function(){return{song_url:"",show:!1,music:{}}},methods:{getSongUrl:function(t){var a=this;i.a.get("https://doubananimalclock.leanapp.cn/api/get/song/xiami?id="+t).then(function(t){a.song_url=t.data.url,a.music.title=t.data.name,a.music.pic=t.data.album.cover,a.music.url=t.data.url,a.music.author=t.data.artist.id,a.show=!0})},reloadPlaylist:function(t){this.$store.dispatch("reloadPlaylist",t)}},created:function(){this.getSongUrl(this.song_id)},watch:{album_id:function(t){this.getSongUrl(t)}}}},M93x:function(t,a,n){"use strict";function e(t){n("USaF")}var i=n("xJD8"),s=n("zsmy"),o=n("VU/8"),r=e,l=o(i.a,s.a,r,"data-v-d15a44be",null);a.a=l.exports},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("7+uW"),i=n("M93x"),s=n("wtEF");e.a.config.productionTip=!1,new e.a({store:s.a,el:"#app",template:"<App/>",components:{App:i.a}})},NuqH:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement;return(t._self._c||a)("div",{staticClass:"aplayer"})},i=[],s={render:e,staticRenderFns:i};a.a=s},USaF:function(t,a){},afmS:function(t,a,n){"use strict";var e=n("HPoU"),i=n("NuqH"),s=n("VU/8"),o=s(e.a,i.a,null,null,null);a.a=o.exports},hXnm:function(t,a){},kEOg:function(t,a){},lL9u:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return t.show?n("div",[n("span",{on:{click:function(a){t.reloadPlaylist(t.music)}}},[t._v("▶️")])]):t._e()},i=[],s={render:e,staticRenderFns:i};a.a=s},oNLN:function(t,a){},wBL8:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"Albumlist"},[n("div",{staticClass:"container-fluid"},[n("ul",{staticClass:"media-list row"},t._l(t.albums,function(a,e){return n("li",{key:a.id,staticClass:"media row col-sm-12 col-lg-6"},[n("div",{staticClass:"col-sm-12 col-md-4"},[n("img",{staticClass:"media-left media-object mw-100",attrs:{src:a.cover}})]),t._v(" "),n("div",{staticClass:"media-body col-md-12"},[n("h2",{staticClass:"h3"},[t._v(t._s(a.name))]),t._v(" "),n("h3",{staticClass:"h4"},[t._v(t._s(a.artist.name))]),t._v(" "),n("songlist",{attrs:{album_id:t.album_ids[e]}})],1)])}))])])},i=[],s={render:e,staticRenderFns:i};a.a=s},wPZH:function(t,a,n){"use strict";var e=n("mtWM"),i=n.n(e),s=n("wUnb");a.a={name:"Songlist",props:["album_id"],components:{song:s.a},data:function(){return{songs:[]}},methods:{getSongList:function(t){var a=this;i.a.get("https://doubananimalclock.leanapp.cn/api/get/album/xiami?id="+t).then(function(t){a.songs=t.data.songList})}},created:function(){this.getSongList(this.album_id)},watch:{album_id:function(t){this.getSongList(t)}}}},wUnb:function(t,a,n){"use strict";function e(t){n("oNLN")}var i=n("LiLJ"),s=n("lL9u"),o=n("VU/8"),r=e,l=o(i.a,s.a,r,"data-v-f87914a4",null);a.a=l.exports},wtEF:function(t,a,n){"use strict";n.d(a,"a",function(){return s});var e=n("7+uW"),i=n("NYxO");e.a.use(i.a);var s=new i.a.Store({strict:!0,state:{playlist:[],load:!0},mutations:{addToPlaylist:function(t,a){-1===t.playlist.indexOf(a)&&t.playlist.push(a)},reload:function(t){t.load=!t.load},clearPlaylist:function(t){t.playlist.splice(0)}},actions:{reloadPlaylist:function(t,a){setTimeout(function(){t.commit("reload"),t.commit("addToPlaylist",a)},100),t.commit("reload")},clearPlaylist:function(t){setTimeout(function(){t.commit("reload"),t.commit("clearPlaylist")},100),t.commit("reload")}}})},xJD8:function(t,a,n){"use strict";var e=n("9mGq"),i=n("76kl"),s=n("afmS");a.a={name:"app",components:{Keywords:e.a,Albumlist:i.a,"a-player":s.a},computed:{playlist:function(){return this.$store.state.playlist},load:function(){return this.$store.state.load}},data:function(){return{source:""}},methods:{keywordChanged:function(t){this.source=t},clearPlaylist:function(){this.$store.dispatch("clearPlaylist")}}}},zg27:function(t,a,n){"use strict";var e=n("mtWM"),i=n.n(e),s=n("KAIp");a.a={name:"Albumlist",props:["source"],components:{songlist:s.a},data:function(){return{albums:[],songs:[],album_ids:[]}},methods:{getAlbumList:function(t){var a=this;i.a.get("https://doubananimalclock.leanapp.cn/api/search/album/xiami?key="+t).then(function(t){a.albums=t.data.albumList;var n=a.albums.map(function(t){return t.id});a.album_ids=n})}},created:function(){this.getAlbumList(this.source)},watch:{source:function(t){this.getAlbumList(t)}}}},zsmy:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("Keywords",{on:{keywordChanged:t.keywordChanged}}),t._v(" "),n("Albumlist",{attrs:{source:t.source}}),t._v(" "),t.load?n("div",[n("a-player",{staticClass:"fixed-bottom",attrs:{listmaxheight:"120px",mutex:"",music:t.playlist}})],1):t._e(),t._v(" "),n("button",{staticClass:"btn btn-danger fixed-top",attrs:{type:"button"},on:{click:t.clearPlaylist}},[t._v("Clear Playlist")])],1)},i=[],s={render:e,staticRenderFns:i};a.a=s}},["NHnr"]);
//# sourceMappingURL=app.47242cc88e64c48eab4f.js.map