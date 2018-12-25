(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{168:function(e,s,a){"use strict";a.r(s);var t=a(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"instruction-on-the-interfaces-in-mobile-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instruction-on-the-interfaces-in-mobile-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Instruction on the interfaces in mobile app")]),e._v(" "),a("p",[e._v("How to invoke the functions/interfaces for mobile app.")]),e._v(" "),a("h2",{attrs:{id:"docs-release-history"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docs-release-history","aria-hidden":"true"}},[e._v("#")]),e._v(" Docs release history")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" Version  | Date       | Change Diff\n P1A      | 2018-12-24 | Draft     \n P2A      | 2018-12-25 | Add new interface TransferRecordsQuery\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h2",{attrs:{id:"interfaces-exposed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces-exposed","aria-hidden":"true"}},[e._v("#")]),e._v(" Interfaces exposed")]),e._v(" "),a("p",[e._v("There are 14 interfaces exposed under the current version, let`s start with the interfaces one by one.")]),e._v(" "),a("h3",{attrs:{id:"_1-accountcreate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-accountcreate","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. AccountCreate")]),e._v(" "),a("p",[e._v("Used for account creation with usage:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func AccountCreate(password string) string\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Input "),a("code",[e._v("password")]),e._v(" string format for account generation with example output as below:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n          "jsonrpc": "2.0",\n          "id": "",\n          "result": {\n            "pubKey": "YRoVbOkSxltrudPcvZhZF4tbF/293Tozp8s+Pm9EHXk=",\n            "privKey": "HDzw0o0BlBMP6+tJXp7U65vpH5/UKaWtHaqLKBlLDD5hGhVs6RLGW2u509y9mFkXi1sX/b3dOjOnyz4+b0QdeQ==",\n            "addr": "address16rd2qgs6whuhycgm90yvx8uz6dwh83vh2jk2gn",\n            "mnemonic": "siren venue foil chaos hen margin hockey cost decide critic process off allow layer position morning used plunge onion volume job tape into before",\n            "type": "local"\n          }\n }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[e._v("Note: Write down the mnemonic, it is critical for the account recovery procedure.")]),e._v(" "),a("h3",{attrs:{id:"_2-accountrecover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-accountrecover","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. AccountRecover")]),e._v(" "),a("p",[e._v("Used for account recovery with usage:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func AccountRecover(mncode, password string) string\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('Input the "mnemonic" as '),a("code",[e._v("mncode")]),e._v(" and the "),a("code",[e._v("password")]),e._v(" upon account creation, it could be recovered with example output as below:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n          "jsonrpc": "2.0",\n          "id": "",\n          "result": {\n            "pubKey": "YRoVbOkSxltrudPcvZhZF4tbF/293Tozp8s+Pm9EHXk=",\n            "privKey": "HDzw0o0BlBMP6+tJXp7U65vpH5/UKaWtHaqLKBlLDD5hGhVs6RLGW2u509y9mFkXi1sX/b3dOjOnyz4+b0QdeQ==",\n            "addr": "address16rd2qgs6whuhycgm90yvx8uz6dwh83vh2jk2gn",\n            "mnemonic": "siren venue foil chaos hen margin hockey cost decide critic process off allow layer position morning used plunge onion volume job tape into before",\n            "type": "local"\n          }\n }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[e._v("Obviously, it is the same format as that while account creation!")]),e._v(" "),a("h3",{attrs:{id:"_3-pubaddrretrieval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-pubaddrretrieval","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. PubAddrRetrieval")]),e._v(" "),a("p",[e._v("Used for public key and address retrieval from private key input with usage:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func PubAddrRetrieval(priv string) string\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('Input the "privKey" of the account as '),a("code",[e._v("priv")]),e._v(" to fetch the public key and address information, the output could be as below:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n          "jsonrpc": "2.0",\n          "id": "",\n          "result": {\n            "pubKey": "YRoVbOkSxltrudPcvZhZF4tbF/293Tozp8s+Pm9EHXk=",\n            "addr": "address16rd2qgs6whuhycgm90yvx8uz6dwh83vh2jk2gn"\n          }\n }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h3",{attrs:{id:"_4-aesencrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-aesencrypt","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. AesEncrypt")]),e._v(" "),a("p",[e._v("Used for the private key AES encryption alongside with usage:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func AesEncrypt(key, plainText string) string \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('Input the "key" as the string output of internal HMAC, the byte size should be 16, and the "plainText" is the "privKey" of the account. The output could be as below:')]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("90wz2NtXedwF5kMnjF88kty4yjxacijK9GdhpZhOvYwaeB-UV1QA6E0uuAv2rDUSlW3v81OS-u4I5sj2nBwF-vIxsyDc3UxwyIezFJPTHYo1J2yaSFX77WzxaxhOCXAQWTowgSO-aPs=\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('It would be stored in the app equipment and retrieved for the "plain" private key after decryption.')]),e._v(" "),a("p",[e._v('Note: It is worth mentioning however that there is a "salt" of sorts for AES as well in the form of the IV (initialization vector). This is simply random data (which should be different every time), that can be stored alongside the ciphertext, and ensures that even when encrypting the same data multiple times, the output is different.')]),e._v(" "),a("h3",{attrs:{id:"_5-aesdecrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-aesdecrypt","aria-hidden":"true"}},[e._v("#")]),e._v(" 5. AesDecrypt")]),e._v(" "),a("p",[e._v("Used for the private key retrieval on AES decryption with usage:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func AesDecrypt(key, cipherText string) string \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('Input the same "key" as encryption, and the "cipherText" output of the private key after encryption. The "plain" private key could be shown as below:')]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("HDzw0o0BlBMP6+tJXp7U65vpH5/UKaWtHaqLKBlLDD5hGhVs6RLGW2u509y9mFkXi1sX/b3dOjOnyz4+b0QdeQ==\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_6-setblockchainentrance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-setblockchainentrance","aria-hidden":"true"}},[e._v("#")]),e._v(" 6. SetBlockchainEntrance")]),e._v(" "),a("p",[e._v("Used for set the Restful entrance for the block chain with usage:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func SetBlockchainEntrance(sh, mh string)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('Input "sh" means the restful host of block chain(e.g. qstars), the format could be "IP:1317"; the "mh" is reserved for Qmoon explorer, right now could be input as "192.168.1.223:9527".')]),e._v(" "),a("p",[e._v("Note: This function should be invoked every time Restful operations are taking.")]),e._v(" "),a("h3",{attrs:{id:"_7-qscqueryaccount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-qscqueryaccount","aria-hidden":"true"}},[e._v("#")]),e._v(" 7. QSCQueryAccount")]),e._v(" "),a("p",[e._v("Used for querying the QSC account information with usage:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func QSCQueryAccount(addr string) string\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('Input "addr" of the account you want to query.')]),e._v(" "),a("p",[e._v("Note: Remember this is only used for query the account activated in QSC other than QOS, error would be returned if input the wrong address.")]),e._v(" "),a("h3",{attrs:{id:"_8-qosqueryaccount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-qosqueryaccount","aria-hidden":"true"}},[e._v("#")]),e._v(" 8. QOSQueryAccount")]),e._v(" "),a("p",[e._v("Used for querying the QOS account information with usage:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func QOSQueryAccount(addr string) string\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('Input "addr" of the account you want to query.')]),e._v(" "),a("p",[e._v("Note: Remember this is only used for query the account activated in QOS other than QSC, error would be returned if input the wrong address.")]),e._v(" "),a("h3",{attrs:{id:"_9-qsckvstoreset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-qsckvstoreset","aria-hidden":"true"}},[e._v("#")]),e._v(" 9.  QSCKVStoreSet")]),e._v(" "),a("p",[e._v("Used for setting the keystore information in QSC with usage:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func QSCKVStoreSet(k, v, privkey, chain string) string\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('Input "k", "v" is the key-value as name, "chain" is the chain-id of the QSC, which is also corresponding to the Restful host with '),a("code",[e._v("SetBlockchainEntrance")]),e._v('; for security reason, "privkey" would be deprecated, now you can input any string.')]),e._v(" "),a("p",[e._v('Note: It should not input as plain "privkey" by security reason!')]),e._v(" "),a("h3",{attrs:{id:"_10-qsckvstoreget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-qsckvstoreget","aria-hidden":"true"}},[e._v("#")]),e._v(" 10.  QSCKVStoreGet")]),e._v(" "),a("p",[e._v("Used for setting the keystore information in QSC with usage:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func QSCKVStoreGet(k string) string\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('Input "k" is the key set in the previous '),a("code",[e._v("QSCKVStoreSet")])]),e._v(" "),a("h3",{attrs:{id:"_11-qsctransfersend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-qsctransfersend","aria-hidden":"true"}},[e._v("#")]),e._v(" 11.  QSCtransferSend")]),e._v(" "),a("p",[e._v("Used for transaction via the QSC then direct to QOS with usage:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func QSCtransferSend(addrto, coinstr, privkey, chainid string) string\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('Input "addrto" is the address of the receiver; "coinstr" is the transaction amount, e.g. "1QOS"; "privkey" is the "plain" private key of the sender; "chainid" is the chain-id of the QSC which is also corresponding to the Restful host with '),a("code",[e._v("SetBlockchainEntrance")])]),e._v(" "),a("h3",{attrs:{id:"_12-qoscommitresultcheck"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-qoscommitresultcheck","aria-hidden":"true"}},[e._v("#")]),e._v(" 12.  QOSCommitResultCheck")]),e._v(" "),a("p",[e._v("Used for QSC transaction check with usage:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func QOSCommitResultCheck(txhash, height string) string\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('Input "txhash" ,"height" are the transaction hash and block height respectively after the transaction result feedback.\nNote: This function is partially implemented while QOS unsupported.')]),e._v(" "),a("h3",{attrs:{id:"_13-jqinvestad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-jqinvestad","aria-hidden":"true"}},[e._v("#")]),e._v(" 13.  JQInvestAd")]),e._v(" "),a("p",[e._v("Used for generation of the transaction message with usage:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func JQInvestAd(QOSchainId, QSCchainId, articleHash, coins, privatekey string) string \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('Input "QOSchainId", "QSCchainId" are the chain-id for the QOS and QSC respectively; "articleHash" is the hash of the article which has already created in QSC; "coins" is the investing amount; "privatekey" is the "plain" private key of the Dapp owner.\nThe output would be a transaction message on json, to be sent to Java background to push to block chain. An output example could be as below:')]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "type": "qbase/txs/stdtx",\n    "value": {\n      "itx": {\n        "type": "qstars/InvestTx",\n        "value": {\n          "Std": {\n            "itx": {\n              "type": "qos/txs/TxTransfer",\n              "value": {\n                "senders": [\n                  {\n                    "addr": "address13mjc3n3xxj73dhkju9a0dfr4lrfvv3whxqg0dy",\n                    "qos": "0",\n                    "qscs": [\n                      {\n                        "coin_name": "AOE",\n                        "amount": "5"\n                      }\n                    ]\n                  }\n                ],\n                "receivers": [\n                  {\n                    "addr": "address18yunjwfe8yunjwfe8yunjwfe8yunjwfex078fv",\n                    "qos": "0",\n                    "qscs": [\n                      {\n                        "coin_name": "AOE",\n                        "amount": "5"\n                      }\n                    ]\n                  }\n                ]\n              }\n            },\n            "sigature": [\n              {\n                "pubkey": {\n                  "type": "tendermint/PubKeyEd25519",\n                  "value": "fDLjEW4zeLVCvKKx4iYB00fnp5Mcl3APIIla7KyETOE="\n                },\n                "signature": "8BSwrU4aRzeKuaedOmfX0y7vliKtBxSquvMm6EFJU3d+cv8fK+/Vyen7ZqDTUizlTuOr7VP7Ydtw2MiSGSt7Ag==",\n                "nonce": "18"\n              }\n            ],\n            "chainid": "qos-test",\n            "maxgas": "0"\n          },\n          "articleHash": "MTU0NTEyODMyMTE0Mg=="\n        }\n      },\n      "sigature": [\n        {\n          "pubkey": {\n            "type": "tendermint/PubKeyEd25519",\n            "value": "fDLjEW4zeLVCvKKx4iYB00fnp5Mcl3APIIla7KyETOE="\n          },\n          "signature": "7/5IhnUZEzEX+nBCqBDBSJzltkCDjgZVYkP8NUc7RZ7m7Gkpb2p5tInzBaqIop8YCiyt9qPOXFW2Xje3/+B/Dg==",\n          "nonce": "28"\n        }\n      ],\n      "chainid": "qstars-test",\n      "maxgas": "0"\n    }\n  }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br"),a("span",{staticClass:"line-number"},[e._v("46")]),a("br"),a("span",{staticClass:"line-number"},[e._v("47")]),a("br"),a("span",{staticClass:"line-number"},[e._v("48")]),a("br"),a("span",{staticClass:"line-number"},[e._v("49")]),a("br"),a("span",{staticClass:"line-number"},[e._v("50")]),a("br"),a("span",{staticClass:"line-number"},[e._v("51")]),a("br"),a("span",{staticClass:"line-number"},[e._v("52")]),a("br"),a("span",{staticClass:"line-number"},[e._v("53")]),a("br"),a("span",{staticClass:"line-number"},[e._v("54")]),a("br"),a("span",{staticClass:"line-number"},[e._v("55")]),a("br"),a("span",{staticClass:"line-number"},[e._v("56")]),a("br"),a("span",{staticClass:"line-number"},[e._v("57")]),a("br"),a("span",{staticClass:"line-number"},[e._v("58")]),a("br"),a("span",{staticClass:"line-number"},[e._v("59")]),a("br"),a("span",{staticClass:"line-number"},[e._v("60")]),a("br"),a("span",{staticClass:"line-number"},[e._v("61")]),a("br"),a("span",{staticClass:"line-number"},[e._v("62")]),a("br"),a("span",{staticClass:"line-number"},[e._v("63")]),a("br"),a("span",{staticClass:"line-number"},[e._v("64")]),a("br"),a("span",{staticClass:"line-number"},[e._v("65")]),a("br"),a("span",{staticClass:"line-number"},[e._v("66")]),a("br")])]),a("h3",{attrs:{id:"_14-transferrecordsquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-transferrecordsquery","aria-hidden":"true"}},[e._v("#")]),e._v(" 14.  TransferRecordsQuery")]),e._v(" "),a("p",[e._v("Used for generation of the transaction records with usage:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("func TransferRecordsQuery(addr, cointype string) string \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('Input the "addr" for the address you are querying and "cointype" to filter the type of coin, e.g. "AOE", "qos" ,etc.')]),e._v(" "),a("p",[e._v("Note: The Qmoon Explorer adress should be input in the "),a("code",[e._v("SetBlockchainEntrance")]),e._v(' as "Mh" of "192.168.1.223:9527"')])])}],!1,null,null,null);n.options.__file="instruction.md";s.default=n.exports}}]);