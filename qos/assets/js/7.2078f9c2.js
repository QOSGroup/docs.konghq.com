(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{188:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("p",[s._v("提供与QOS交互的命令行工具。")]),s._v(" "),s._m(1),s._m(2),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.github.com/QOSGroup/qbase",target:"_blank",rel:"noopener noreferrer"}},[s._v("keystore"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("添加地址信息Sansa：")]),s._v(" "),s._m(3),s._m(4),s._v(" "),a("p",[s._v("查询相关命令")]),s._v(" "),s._m(5),s._m(6),s._v(" "),a("p",[a("router-link",{attrs:{to:"./account.html"}},[s._v("链上账户状态查询")])],1),s._v(" "),s._m(7),s._v(" "),a("p",[s._v("通过abci query直接查询store的底层方法，path参数指定查询路径，data指定查询key")]),s._v(" "),s._m(8),a("p",[s._v("查询指定qsc")]),s._v(" "),s._m(9),a("p",[s._v("查询所有账户")]),s._v(" "),s._m(10),s._m(11),s._v(" "),a("p",[a("router-link",{attrs:{to:"./qcp.html"}},[s._v("跨链交易数据查询")])],1),s._v(" "),s._m(12),s._v(" "),a("p",[a("router-link",{attrs:{to:"./approve.html"}},[s._v("预授权查询")])],1),s._v(" "),s._m(13),s._v(" "),a("p",[a("router-link",{attrs:{to:"./qsc.html"}},[s._v("联盟链信息查询")])],1),s._v(" "),s._m(14),s._v(" "),s._m(15),s._m(16),s._v(" "),a("p",[a("router-link",{attrs:{to:"./qsc.html"}},[s._v("创建、发放联盟币")])],1),s._v(" "),s._m(17),s._v(" "),a("p",[a("router-link",{attrs:{to:"./transfer.html"}},[s._v("转账")])],1),s._v(" "),s._m(18),s._v(" "),a("p",[a("router-link",{attrs:{to:"./approve.html"}},[s._v("预授权")])],1),s._v(" "),s._m(19),s._v(" "),a("p",[a("router-link",{attrs:{to:"./validator.html"}},[s._v("验证节点")])],1),s._v(" "),s._m(20),s._v(" "),s._m(21),s._m(22),s._v(" "),a("p",[s._v("运行状态")]),s._v(" "),s._m(23),s._v(" "),a("p",[s._v("验证节点信息")]),s._v(" "),s._m(24),s._v(" "),a("p",[s._v("区块信息")]),s._v(" "),s._m(25),s._v(" "),a("p",[s._v("tx数据查询")])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"qos-client"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qos-client","aria-hidden":"true"}},[this._v("#")]),this._v(" QOS Client")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ qoscli --help\nQOS light-client\n\nUsage:\n  qoscli "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nAvailable Commands:\n\n  keys        keys management tools. Add or view local private keys\n  query       query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("alias "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("q"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" subcommands.\n  tx          tx subcommands\n  tendermint  tendermint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("alias "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("t"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  subcommands\n  version     Print the app version\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("help")]),s._v("        Help about any "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("command")]),s._v("\n\nFlags:\n  -e, --encoding string   Binary encoding "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("b64"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("btc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hex"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -h, --help              "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" qoscli\n      --home string       directory "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" config and data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOME")]),s._v('/.qoscli"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -o, --output string     Output "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --trace             print out full stack trace on errors\n\nUse "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qoscli [command] --help"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information about a command.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keys","aria-hidden":"true"}},[this._v("#")]),this._v(" keys")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ qoscli keys add Sansa\nEnter a passphrase "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" your key:12345678\nRepeat the passphrase:12345678\nNAME:\tTYPE:\tADDRESS:\t\t\t\t\t\tPUBKEY:\nSansa\tlocal\taddress1t7eadnyl8g6ct9xyrasvz4rdztvkeqpc0hzujh\tPubKeyEd25519"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("143CEBE483744337D6A1C785FDAF552E0FDCFB06008D87A57E925B92CA3F3E66"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n**Important** "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" this seed phrase "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a safe place.\nIt is the only way to recover your account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" you ever forget your password.\n\nsentence swap network level reason jewel radio apple soap vessel symptom improve mimic early wise real float clarify forward turkey lake actress typical twin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query","aria-hidden":"true"}},[this._v("#")]),this._v(" query")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ qoscli query --help\nquery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("alias "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("q"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" subcommands.\n\nUsage:\n  qoscli query "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nAliases:\n  query, q\n\nAvailable Commands:\n  account     Query account info by address or name\n  store       Query store data by low level\n  qcp         qcp subcommands\n  approve     Query approve by from and to\n  qsc         query qsc info by name\n\nFlags:\n  -h, --help   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" query\n\nGlobal Flags:\n  -e, --encoding string   Binary encoding "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("b64"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("btc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hex"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --home string       directory "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" config and data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOME")]),s._v('/.qoscli"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -o, --output string     Output "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --trace             print out full stack trace on errors\n\nUse "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qoscli query [command] --help"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information about a command.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#account","aria-hidden":"true"}},[this._v("#")]),this._v(" account")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"store"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#store","aria-hidden":"true"}},[this._v("#")]),this._v(" store")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ qoscli query store --help\nQuery store data by low level\n\nUsage:\n  qoscli query store "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nFlags:\n      --data string   store query data\n  -h, --help          "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" store\n      --indent        print indent result json\n  -n, --node string   Node to connect to "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp://localhost:26657"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --path string   store query path\n\nGlobal Flags:\n  -e, --encoding string   Binary encoding "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("b64"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("btc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hex"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --home string       directory "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" config and data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOME")]),s._v('/.qoscli"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -o, --output string     Output "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --trace             print out full stack trace on errors\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("qoscli query store --path /store/qsc/key --data qsc/"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("qsc_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("qoscli query store --path /store/acc/subspace --data account:\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"qcp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qcp","aria-hidden":"true"}},[this._v("#")]),this._v(" qcp")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"approve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#approve","aria-hidden":"true"}},[this._v("#")]),this._v(" approve")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"qsc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qsc","aria-hidden":"true"}},[this._v("#")]),this._v(" qsc")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"tx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tx","aria-hidden":"true"}},[this._v("#")]),this._v(" tx")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ qoscli tx --help\ntx subcommands\n\nUsage:\n  qoscli tx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nAvailable Commands:\n  create-qsc       create qsc\n  issue-qsc        issue qsc\n\n  init-qcp         init qcp\n\n  transfer         Transfer QOS and QSCs\n\n  create-approve   Create approve\n  increase-approve Increase approve\n  decrease-approve Decrease approve\n  use-approve      Use approve\n  cancel-approve   Cancel approve\n\n  create-validator Create validator\n  revoke-validator Revoke validator\n  active-validator Active validator\n\nFlags:\n  -h, --help   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" tx\n\nGlobal Flags:\n  -e, --encoding string   Binary encoding "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("b64"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("btc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hex"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --home string       directory "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" config and data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOME")]),s._v('/.qoscli"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -o, --output string     Output "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --trace             print out full stack trace on errors\n\nUse "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qoscli tx [command] --help"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information about a command.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"qsc-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qsc-2","aria-hidden":"true"}},[this._v("#")]),this._v(" qsc")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"transfer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transfer","aria-hidden":"true"}},[this._v("#")]),this._v(" transfer")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"approve-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#approve-2","aria-hidden":"true"}},[this._v("#")]),this._v(" approve")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validator","aria-hidden":"true"}},[this._v("#")]),this._v(" validator")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"tendermint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tendermint","aria-hidden":"true"}},[this._v("#")]),this._v(" tendermint")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ qoscli tendermint --help\ntendermint subcommands\n\nUsage:\n  qoscli tendermint "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nAvailable Commands:\n  status      Query remote node "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" status\n\n  validators  Get validator "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" at given height\n  block       Get block info at given height\n\n  txs         Search "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" all transactions that match the given tags.\n  tx          query match "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hash")]),s._v(" tx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" all commit block\n\nFlags:\n  -h, --help   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" tendermint\n\nGlobal Flags:\n  -e, --encoding string   Binary encoding "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("b64"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("btc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hex"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --home string       directory "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" config and data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOME")]),s._v('/.qoscli"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -o, --output string     Output "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --trace             print out full stack trace on errors\n\nUse "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qoscli tendermint [command] --help"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information about a command.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status","aria-hidden":"true"}},[this._v("#")]),this._v(" status")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"validators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validators","aria-hidden":"true"}},[this._v("#")]),this._v(" validators")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"block"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#block","aria-hidden":"true"}},[this._v("#")]),this._v(" block")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"txs-tx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#txs-tx","aria-hidden":"true"}},[this._v("#")]),this._v(" txs & tx")])}],!1,null,null,null);e.options.__file="qoscli.md";t.default=e.exports}}]);