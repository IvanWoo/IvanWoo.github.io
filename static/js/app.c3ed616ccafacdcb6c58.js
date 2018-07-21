webpackJsonp([1],{

/***/ "//un":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1VJv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'Keywords',
    methods: {
        keywordChanged: function keywordChanged(e) {
            this.$emit('keywordChanged', e.target.value);
        }
    }
});

/***/ }),

/***/ "5mJW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Albumlist"},[_c('div',{staticClass:"container-fluid"},[_c('ul',{staticClass:"media-list row"},_vm._l((_vm.albums),function(album,index){return _c('li',{key:album.id,staticClass:"media row col-sm-12 col-lg-6"},[_c('div',{staticClass:"col-sm-12 col-md-4"},[_c('img',{staticClass:"media-left media-object mw-100",attrs:{"src":album.coverBig}})]),_vm._v(" "),_c('div',{staticClass:"media-body col-md-12"},[_c('h2',{staticClass:"h3"},[_vm._v(_vm._s(album.name))]),_vm._v(" "),_c('h3',{staticClass:"h4"},[_vm._v(_vm._s(album.artist.name))]),_vm._v(" "),_c('songlist',{attrs:{"album_id":_vm.album_ids[index]}})],1)])}))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "76kl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Albumlist_vue__ = __webpack_require__("zg27");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_de24fe9c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Albumlist_vue__ = __webpack_require__("5mJW");
function injectStyle (ssrContext) {
  __webpack_require__("qqHT")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-de24fe9c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Albumlist_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_de24fe9c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Albumlist_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "86h0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.is_success)?_c('div',[_c('audio',{staticClass:"audioPlayer align-middle",attrs:{"controls":"","controlsList":"nodownload","preload":"none","src":_vm.song_url,"type":"audio/mpeg"}},[_vm._v("\n        Your browser does not support the audio element.\n    ")])]):_c('div',[_vm._v("\n    N/A\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "8RQ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Keywords jumbotron jumbotron-fluid"},[_c('div',{staticClass:"container text-center"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{staticClass:"form-control",attrs:{"placeholder":"Search...","type":"text","id":"artist"},on:{"change":_vm.keywordChanged}})])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',[_vm._v("\n             林檎音楽(仮)\n            "),_c('p',{staticClass:"lead text-muted py-3"},[_vm._v("最近好きなアルバムあるかい? ")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "9mGq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Keywords_vue__ = __webpack_require__("1VJv");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b52941c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Keywords_vue__ = __webpack_require__("8RQ3");
function injectStyle (ssrContext) {
  __webpack_require__("n90w")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9b52941c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Keywords_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b52941c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Keywords_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Heix":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "KAIp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Songlist_vue__ = __webpack_require__("wPZH");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6351df21_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Songlist_vue__ = __webpack_require__("gNiU");
function injectStyle (ssrContext) {
  __webpack_require__("Ohe8")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6351df21"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Songlist_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6351df21_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Songlist_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "LiLJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_aplayer__ = __webpack_require__("Ixwk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_aplayer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_aplayer__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'Song',
    props: ['song_id'],
    components: {
        'a-player': __WEBPACK_IMPORTED_MODULE_1_vue_aplayer___default.a
    },
    data: function data() {
        return {
            song_url: "",
            show: false,
            is_success: false,
            music: {}
        };
    },

    methods: {
        getSongUrl: function getSongUrl(song_id) {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://douting.leanapp.cn/api/get/song/qq?id=' + song_id).then(function (response) {
                _this.song_url = response.data.url;
                // this.music.title = response.data.name;
                // this.music.pic = response.data.album.cover;
                // this.music.url = response.data.url;
                // this.music.author = response.data.artist.id;
                // this.show = true;
                _this.is_success = response.data.success;
            });
        },
        reloadPlaylist: function reloadPlaylist(newSong) {
            // this.$store.commit('reload');
            // this.$store.commit('addToPlaylist', newSong);
            this.$store.dispatch('reloadPlaylist', newSong);
        }
        // reload: function() {
        //     this.$store.commit('reload');
        // }
    },
    created: function created() {
        this.getSongUrl(this.song_id);
    },
    watch: {
        album_id: function album_id(val) {
            this.getSongUrl(val);
        }
    }
});

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7234b7e4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("nq2l");
function injectStyle (ssrContext) {
  __webpack_require__("Heix")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7234b7e4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7234b7e4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_store__ = __webpack_require__("wtEF");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  store: __WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* store */],
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "Ohe8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gNiU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('table',{staticClass:"table table-sm"},[_vm._m(0),_vm._v(" "),_c('tbody',_vm._l((_vm.songs),function(song,index){return _c('tr',{key:song.id},[_c('td',{staticClass:"align-middle text-muted"},[_vm._v(_vm._s(index + 1))]),_vm._v(" "),_c('td',{staticClass:"col-sm-12 col-lg-8 align-middle"},[_vm._v(_vm._s(song.name))]),_vm._v(" "),_c('td',{staticClass:"align-middle"},[_c('song',{attrs:{"song_id":song.id}})],1)])}))])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('td'),_vm._v(" "),_c('td',{staticClass:"col-sm-12 col-lg-8 align-middle text-muted"},[_vm._v("Title")]),_vm._v(" "),_c('td',{staticClass:"col-lg align-middle text-muted"},[_vm._v("Play")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "n90w":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "nq2l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('Keywords',{on:{"keywordChanged":_vm.keywordChanged}}),_vm._v(" "),_c('Albumlist',{attrs:{"source":_vm.source}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "qqHT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wPZH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Song__ = __webpack_require__("wUnb");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'Songlist',
    props: ['album_id'],
    components: {
        'song': __WEBPACK_IMPORTED_MODULE_1__components_Song__["a" /* default */]
    },
    data: function data() {
        return {
            songs: []
        };
    },

    methods: {
        getSongList: function getSongList(album_id) {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://douting.leanapp.cn/api/get/album/qq?id=' + album_id).then(function (response) {
                _this.songs = response.data.songList;
            });
        }
    },
    created: function created() {
        this.getSongList(this.album_id);
    },
    watch: {
        album_id: function album_id(val) {
            this.getSongList(val);
        }
    }
});

/***/ }),

/***/ "wUnb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Song_vue__ = __webpack_require__("LiLJ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_28599e9c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Song_vue__ = __webpack_require__("86h0");
function injectStyle (ssrContext) {
  __webpack_require__("//un")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-28599e9c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Song_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_28599e9c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Song_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "wtEF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    strict: true,
    state: {
        playlist: [],
        load: true
    },
    mutations: {
        addToPlaylist: function addToPlaylist(state, newSong) {
            // https://stackoverflow.com/questions/36719477/array-push-and-unique-items
            if (state.playlist.indexOf(newSong) === -1) {
                state.playlist.push(newSong);
            }
        },
        reload: function reload(state) {
            state.load = !state.load;
        },
        clearPlaylist: function clearPlaylist(state) {
            state.playlist.splice(0);
        }
    },
    actions: {
        reloadPlaylist: function reloadPlaylist(context, newSong) {
            setTimeout(function () {
                context.commit('reload');
                context.commit('addToPlaylist', newSong);
            }, 100);
            context.commit('reload');
        },
        clearPlaylist: function clearPlaylist(context) {
            setTimeout(function () {
                context.commit('reload');
                context.commit('clearPlaylist');
            }, 100);
            context.commit('reload');
        }
    }
});

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Keywords__ = __webpack_require__("9mGq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Albumlist__ = __webpack_require__("76kl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_aplayer__ = __webpack_require__("Ixwk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_aplayer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_aplayer__);
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  components: {
    Keywords: __WEBPACK_IMPORTED_MODULE_0__components_Keywords__["a" /* default */],
    Albumlist: __WEBPACK_IMPORTED_MODULE_1__components_Albumlist__["a" /* default */],
    'a-player': __WEBPACK_IMPORTED_MODULE_2_vue_aplayer___default.a
  },
  computed: {
    playlist: function playlist() {
      return this.$store.state.playlist;
    },
    load: function load() {
      return this.$store.state.load;
    }
  },
  data: function data() {
    return {
      source: ""
    };
  },

  methods: {
    keywordChanged: function keywordChanged(source) {
      this.source = source;
    },
    clearPlaylist: function clearPlaylist() {
      // this.$store.commit('reload');
      // this.$store.commit('addToPlaylist', newSong);
      this.$store.dispatch('clearPlaylist');
    }
  }
});

/***/ }),

/***/ "zg27":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Songlist__ = __webpack_require__("KAIp");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'Albumlist',
    props: ['source'],
    components: {
        'songlist': __WEBPACK_IMPORTED_MODULE_1__components_Songlist__["a" /* default */]
    },
    data: function data() {
        return {
            albums: [],
            songs: [],
            album_ids: []
        };
    },

    methods: {
        getAlbumList: function getAlbumList(source) {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://douting.leanapp.cn/api/search/album/qq?&limit=3&key=' + source).then(function (response) {
                _this.albums = response.data.albumList;

                var ids = _this.albums.map(function (album) {
                    return album.id;
                });

                _this.album_ids = ids;
            });
        }
    },
    created: function created() {
        this.getAlbumList(this.source);
    },
    watch: {
        source: function source(val) {
            this.getAlbumList(val);
        }
    }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.c3ed616ccafacdcb6c58.js.map