(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{175:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This guide will explain how to install the "),a("router-link",{attrs:{to:"/introduction/overview.html"}},[t._v("QStars")]),t._v(" onto your system. With the SDK installed on a server, you can participate in the latest testnet as either a "),a("router-link",{attrs:{to:"./full-node.html"}},[t._v("Full Node")]),t._v(" or a "),a("router-link",{attrs:{to:"/validators/validator-setup.html"}},[t._v("Validator")]),t._v(".")],1),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Install "),a("code",[t._v("go")]),t._v(" by following the "),a("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("official docs"),a("OutboundLink")],1),t._v(". Remember to set your "),a("code",[t._v("$GOPATH")]),t._v(", "),a("code",[t._v("$GOBIN")]),t._v(", and "),a("code",[t._v("$PATH")]),t._v(" environment variables, for example:")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("Next, let's install the testnet's version of the QSTARS SDK.\nYou can find information about the latest testnet and the right\nversion of the QStars for it in the "),a("a",{attrs:{href:"https://github.com/QOSGroup/qstars/testnets#testnet-status",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnets\nrepo"),a("OutboundLink")],1),t._v(".\nHere we'll use the "),a("code",[t._v("master")]),t._v(" branch, which contains the latest stable release.\nIf necessary, make sure you "),a("code",[t._v("git checkout")]),t._v(" the correct\n"),a("a",{attrs:{href:"https://github.com/QOSGroup/qstars/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("released version"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Make sure that you have GO version above 11, we use go module to compile")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("With Qstars installed, you can run "),a("router-link",{attrs:{to:"./full-node.html"}},[t._v("a full node on the latest testnet")]),t._v(".")],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"install-the-qstars"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-the-qstars","aria-hidden":"true"}},[this._v("#")]),this._v(" Install the QStars")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"install-go"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-go","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Go")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p "),a("span",{attrs:{class:"token variable"}},[t._v("$HOME")]),t._v("/go/bin\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"export GOPATH='),a("span",{attrs:{class:"token variable"}},[t._v("$HOME")]),t._v('/go"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.bash_profile\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"export GOBIN='),a("span",{attrs:{class:"token variable"}},[t._v("$GOPATH")]),t._v('/bin"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.bash_profile\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"export PATH='),a("span",{attrs:{class:"token variable"}},[t._v("$PATH")]),t._v(":"),a("span",{attrs:{class:"token variable"}},[t._v("$GOBIN")]),t._v('"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.bash_profile\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[s("strong",[this._v("Go 1.11+")]),this._v(" is required for the Qstars.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"install-qstars"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-qstars","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Qstars")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" codedir\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" codedir\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/QOSGroup/qstars\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" qstars "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n"),a("span",{attrs:{class:"token function"}},[t._v("export")]),t._v(" GO111MODULE"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("on\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" cmd/qstarsd "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" go build\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" cmd/qstarscls "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" go build\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("That will install the "),s("code",[this._v("qstarsd")]),this._v(" and "),s("code",[this._v("qstarscli")]),this._v(" binaries. Verify that everything is OK:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ qstarsd version\n$ qstarscli version\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"run-a-full-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-a-full-node","aria-hidden":"true"}},[this._v("#")]),this._v(" Run a Full Node")])}],!1,null,null,null);n.options.__file="installation.md";s.default=n.exports}}]);