(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{168:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Before setting up your validator node, make sure you already had QOS installed by following this "),s("router-link",{attrs:{to:"./installation.html"}},[t._v("guide")]),t._v(".")],1),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("These instructions are for setting up a brand new full node from scratch.")]),t._v(" "),s("p",[t._v("First, initialize the node and create the necessary config files:")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),s("p",[t._v("Your full node has been initialized!")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),s("p",[t._v("Edit the following config in your local "),s("code",[t._v("config.toml")]),t._v(" according to "),s("a",{attrs:{href:"https://raw.githubusercontent.com/QOSGroup/qos-testnets/master/capricorn-1000/config.toml",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("config.toml")]),s("OutboundLink")],1)]),t._v(" "),t._m(9),s("p",[t._v("Note we use the "),s("code",[t._v("capricorn-1000")]),t._v(" directory, that may not be the latest. Search your version In the "),s("a",{attrs:{href:"https://github.com/QOSGroup/qos-testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnets repo"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("Start the full node with this command:")]),t._v(" "),t._m(11),s("p",[t._v("Check that everything is running smoothly:")]),t._v(" "),t._m(12),s("p",[t._v("If you see the catching_up is false, it means your node is fully synced with the network, otherwise your node is still downloading blocks. Once fully synced, you could upgrade your node to a validator node. The instructions is in "),s("router-link",{attrs:{to:"./validator.html"}},[t._v("here")]),t._v(".")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"setup-a-full-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-a-full-node","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup A Full-node")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"init-your-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#init-your-node","aria-hidden":"true"}},[this._v("#")]),this._v(" Init Your Node")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("qosd init --name "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("your_custom_moniker"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("Only ASCII characters are supported for the "),e("code",[this._v("--name")]),this._v(". Using Unicode characters will render your node unreachable.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can edit "),e("code",[this._v("moniker")]),this._v(" in the "),e("code",[this._v("~/.qosd/config/config.toml")]),this._v(" file:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-toml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('# A custom human readable name for this node\nmoniker = "<your_custom_moniker>"\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"get-configuration-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-configuration-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Get Configuration Files")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Replace your local "),e("code",[this._v("genesis.json")]),this._v(" to testnet's:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://raw.githubusercontent.com/QOSGroup/qos-testnets/master/capricorn-1000/genesis.json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HOME")]),t._v("/.qosd/config/genesis.json\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-toml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('# Comma separated list of nodes to keep persistent connections to\npersistent_peers = "<according_to_testnet_config>"\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"run-a-full-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-a-full-node","aria-hidden":"true"}},[this._v("#")]),this._v(" Run a Full Node")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("qosd start --with-tendermint\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("qoscli tendermint status\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])}],!1,null,null,null);a.options.__file="fullnode.md";e.default=a.exports}}]);