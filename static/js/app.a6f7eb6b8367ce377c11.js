webpackJsonp([1],{"1VJv":function(t,n,s){"use strict";n.a={name:"Keywords",methods:{keywordChanged:function(t){this.$emit("keywordChanged",t.target.value)}}}},"2ICB":function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{},[s("table",{staticClass:"table table-sm"},[t._m(0),t._v(" "),s("tbody",t._l(t.songs,function(n,a){return s("tr",{key:n.id},[s("td",{staticClass:"align-middle text-muted"},[t._v(t._s(a+1))]),t._v(" "),s("td",{staticClass:"col-sm-12 col-lg-8 align-middle"},[t._v(t._s(n.name))]),t._v(" "),s("td",{staticClass:"align-middle"},[s("song",{attrs:{song_info:{id:n.id,mid:n.mid}}})],1)])}))])])},e=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("thead",[s("tr",[s("td"),t._v(" "),s("td",{staticClass:"col-sm-12 col-lg-8 align-middle text-muted"},[t._v("Title")]),t._v(" "),s("td",{staticClass:"col-lg align-middle text-muted"},[t._v("Play")])])])}],i={render:a,staticRenderFns:e};n.a=i},"5mJW":function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"Albumlist"},[s("div",{staticClass:"container-fluid"},[s("ul",{staticClass:"media-list row"},t._l(t.albums,function(n,a){return s("li",{key:n.id,staticClass:"media row col-sm-12 col-lg-6"},[s("div",{staticClass:"col-sm-12 col-md-4"},[s("img",{staticClass:"media-left media-object mw-100",attrs:{src:n.coverBig}})]),t._v(" "),s("div",{staticClass:"media-body col-md-12"},[s("h2",{staticClass:"h3"},[t._v(t._s(n.name))]),t._v(" "),s("h3",{staticClass:"h4"},[t._v(t._s(n.artist.name))]),t._v(" "),s("songlist",{attrs:{album_id:t.album_ids[a]}})],1)])}))])])},e=[],i={render:a,staticRenderFns:e};n.a=i},"76kl":function(t,n,s){"use strict";function a(t){s("qqHT")}var e=s("zg27"),i=s("5mJW"),o=s("VU/8"),c=a,r=o(e.a,i.a,!1,c,"data-v-de24fe9c",null);n.a=r.exports},"8RQ3":function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"Keywords jumbotron jumbotron-fluid"},[s("div",{staticClass:"container text-center"},[t._m(0),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{staticClass:"form-control",attrs:{placeholder:"Search...",type:"text",id:"artist"},on:{change:t.keywordChanged}})])])])},e=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("h1",[t._v("\n             林檎音楽(仮)\n            "),s("p",{staticClass:"lead text-muted py-3"},[t._v("最近好きなアルバムあるかい? ")])])}],i={render:a,staticRenderFns:e};n.a=i},"9mGq":function(t,n,s){"use strict";function a(t){s("n90w")}var e=s("1VJv"),i=s("8RQ3"),o=s("VU/8"),c=a,r=o(e.a,i.a,!1,c,"data-v-9b52941c",null);n.a=r.exports},C3zb:function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return t.is_success?s("div",[s("audio",{staticClass:"audioPlayer align-middle",attrs:{controls:"",controlsList:"nodownload",preload:"none",src:t.song_url,type:"audio/mpeg"}},[t._v("\n        Your browser does not support the audio element.\n    ")])]):s("div",[t._v("\n    N/A\n")])},e=[],i={render:a,staticRenderFns:e};n.a=i},Heix:function(t,n){},KAIp:function(t,n,s){"use strict";function a(t){s("P6S+")}var e=s("wPZH"),i=s("2ICB"),o=s("VU/8"),c=a,r=o(e.a,i.a,!1,c,"data-v-30346aac",null);n.a=r.exports},LiLJ:function(t,n,s){"use strict";var a=s("mtWM"),e=s.n(a),i=s("Ixwk"),o=s.n(i);n.a={name:"Song",props:["song_info"],components:{"a-player":o.a},data:function(){return{song_url:"",show:!1,is_success:!1,music:{}}},methods:{getSongUrl:function(t){var n=this;e.a.get("https://douting.leanapp.cn/api/get/song/qq?id="+t.id+"&mid="+t.mid).then(function(t){n.song_url=t.data.url,n.is_success=t.data.success})},reloadPlaylist:function(t){this.$store.dispatch("reloadPlaylist",t)}},created:function(){this.getSongUrl(this.song_info)},watch:{album_id:function(t){this.getSongUrl(t)}}}},M93x:function(t,n,s){"use strict";function a(t){s("Heix")}var e=s("xJD8"),i=s("nq2l"),o=s("VU/8"),c=a,r=o(e.a,i.a,!1,c,"data-v-7234b7e4",null);n.a=r.exports},NHnr:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=s("7+uW"),e=s("M93x"),i=s("wtEF");a.default.config.productionTip=!1,new a.default({store:i.a,el:"#app",template:"<App/>",components:{App:e.a}})},"P6S+":function(t,n){},c1EY:function(t,n){},n90w:function(t,n){},nq2l:function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{attrs:{id:"app"}},[s("Keywords",{on:{keywordChanged:t.keywordChanged}}),t._v(" "),s("Albumlist",{attrs:{source:t.source}})],1)},e=[],i={render:a,staticRenderFns:e};n.a=i},qqHT:function(t,n){},wPZH:function(t,n,s){"use strict";var a=s("mtWM"),e=s.n(a),i=s("wUnb");n.a={name:"Songlist",props:["album_id"],components:{song:i.a},data:function(){return{songs:[]}},methods:{getSongList:function(t){var n=this;e.a.get("https://douting.leanapp.cn/api/get/album/qq?id="+t).then(function(t){n.songs=t.data.songList})}},created:function(){this.getSongList(this.album_id)},watch:{album_id:function(t){this.getSongList(t)}}}},wUnb:function(t,n,s){"use strict";function a(t){s("c1EY")}var e=s("LiLJ"),i=s("C3zb"),o=s("VU/8"),c=a,r=o(e.a,i.a,!1,c,"data-v-0388916a",null);n.a=r.exports},wtEF:function(t,n,s){"use strict";s.d(n,"a",function(){return i});var a=s("7+uW"),e=s("NYxO");a.default.use(e.a);var i=new e.a.Store({strict:!0,state:{playlist:[],load:!0},mutations:{addToPlaylist:function(t,n){-1===t.playlist.indexOf(n)&&t.playlist.push(n)},reload:function(t){t.load=!t.load},clearPlaylist:function(t){t.playlist.splice(0)}},actions:{reloadPlaylist:function(t,n){setTimeout(function(){t.commit("reload"),t.commit("addToPlaylist",n)},100),t.commit("reload")},clearPlaylist:function(t){setTimeout(function(){t.commit("reload"),t.commit("clearPlaylist")},100),t.commit("reload")}}})},xJD8:function(t,n,s){"use strict";var a=s("9mGq"),e=s("76kl"),i=s("Ixwk"),o=s.n(i);n.a={name:"app",components:{Keywords:a.a,Albumlist:e.a,"a-player":o.a},computed:{playlist:function(){return this.$store.state.playlist},load:function(){return this.$store.state.load}},data:function(){return{source:""}},methods:{keywordChanged:function(t){this.source=t},clearPlaylist:function(){this.$store.dispatch("clearPlaylist")}}}},zg27:function(t,n,s){"use strict";var a=s("mtWM"),e=s.n(a),i=s("KAIp");n.a={name:"Albumlist",props:["source"],components:{songlist:i.a},data:function(){return{albums:[],songs:[],album_ids:[]}},methods:{getAlbumList:function(t){var n=this;e.a.get("https://douting.leanapp.cn/api/search/album/qq?&limit=3&key="+t).then(function(t){n.albums=t.data.albumList;var s=n.albums.map(function(t){return t.id});n.album_ids=s})}},created:function(){this.getAlbumList(this.source)},watch:{source:function(t){this.getAlbumList(t)}}}}},["NHnr"]);
//# sourceMappingURL=app.a6f7eb6b8367ce377c11.js.map