(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{476:function(e,a,t){"use strict";t.r(a);var n=t(2),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),t("p",[e._v("目前只能初始化一个智能合约，有多个只能合约需要手动添加相关Manifest (subgraph.yaml) 、Schema (schema.graphql)、AssemblyScript Mappings (mapping.ts)")]),e._v(" "),t("h3",{attrs:{id:"why-the-graph"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-the-graph"}},[e._v("#")]),e._v(" Why The Graph ？")]),e._v(" "),t("p",[e._v("之前的写法是通过转换sol文件为ts文件，客户端实例化合约来获取数据，使用"),t("code",[e._v("The Graph")]),e._v("后相当于是把实例化的过程放到了它的网络上去执行，减少了前端的调用成本，并且是使用graphql语法编写，那么可以随心所欲的配置返回结果。")]),e._v(" "),t("h2",{attrs:{id:"hosted-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hosted-service"}},[e._v("#")]),e._v(" hosted-service")]),e._v(" "),t("p",[e._v("这里负责创建和管理线上的subgraph,创建subgraph时如果想要使用组织而不是用户名，则需要先到github中允许该网站的请求权限，然后退出登录再重新登录"),t("code",[e._v("the graph")])]),e._v(" "),t("h3",{attrs:{id:"创建账号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建账号"}},[e._v("#")]),e._v(" 创建账号")]),e._v(" "),t("p",[e._v("在使用hosted service之前需要"),t("a",{attrs:{href:"https://thegraph.com/hosted-service/",target:"_blank",rel:"noopener noreferrer"}},[e._v("创建账号"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"保存access-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保存access-token"}},[e._v("#")]),e._v(" 保存Access Token")]),e._v(" "),t("p",[e._v("跳转到"),t("a",{attrs:{href:"https://thegraph.com/hosted-service/dashboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("dashboard"),t("OutboundLink")],1),e._v(",复制token，然后运行"),t("code",[e._v("graph auth --product hosted-service <ACCESS_TOKEN>")])]),e._v(" "),t("h3",{attrs:{id:"添加subgraph"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加subgraph"}},[e._v("#")]),e._v(" 添加Subgraph")]),e._v(" "),t("p",[e._v("首先需要去"),t("a",{attrs:{href:"https://thegraph.com/hosted-service/dashboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("dashboard"),t("OutboundLink")],1),e._v("添加一个subgraph，并填入一下信息：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Image - subgraph缩略图\n\nSubgraph Name - 此名字将会和账户名字一起添加，例如`account-name/subgraph-name-style`,此字段无法修改\n\nAccount - 创建子图的账户，可以是个人或者组织\n\nSubtitle - 将出现在子图卡片中的文本。\n\nDescription - 子图的描述，在子图详细信息页面上可见\n\nGitHub URL - Link to the subgraph repository on GitHub.\n\nHide - Switching this on hides the subgraph in the Graph Explorer.\n\n\n")])])]),t("h4",{attrs:{id:"部署subgraph"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署subgraph"}},[e._v("#")]),e._v(" 部署Subgraph")]),e._v(" "),t("p",[e._v("部署子图将会把本地"),t("code",[e._v("build")]),e._v("之后的文件上传到IPFS，并且通知"),t("code",[e._v("Graph Explorer")]),e._v("开始索引。")]),e._v(" "),t("p",[e._v("部署指令："),t("code",[e._v("yarn deploy")])]),e._v(" "),t("p",[e._v("部署的速度取决于链上需要提取的数据和历史事件，同步可能需要几分钟或几小时。子图的status变成"),t("code",[e._v("Synced")]),e._v("表示同步完成，并且会监听新块的产生")]),e._v(" "),t("p",[e._v("重新部署：只需要再次执行"),t("code",[e._v("yarn deploy")]),e._v("，会导致"),t("code",[e._v("Graph Node")]),e._v("重新索引，如果之前已经部署过，那么新版本会同步完之后再替换旧版本。如果旧版本仍在同步中，则会立即替换旧版本，开始同步新版本。")]),e._v(" "),t("h4",{attrs:{id:"subgraph归档政策"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subgraph归档政策"}},[e._v("#")]),e._v(" subgraph归档政策")]),e._v(" "),t("p",[e._v('A subgraph is defined as "inactive" if it was deployed to the Hosted Service more than 45 days ago, and if it has received 0 queries in the last 30 days.')]),e._v(" "),t("p",[e._v("如果被标记为不活跃，那么会在删除的7天前发邮件通知用户。")]),e._v(" "),t("p",[e._v("如果想要活跃，只需要发起查询就可以了。被删除也可以重新部署。")]),e._v(" "),t("h2",{attrs:{id:"graphql-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#graphql-api"}},[e._v("#")]),e._v(" GraphQL API")]),e._v(" "),t("p",[e._v("查询单一实体时，必须带有id字符串")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("{\n  token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("id: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" {\n    id\n    owner\n  }\n}\n")])])]),t("h3",{attrs:{id:"entites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entites"}},[e._v("#")]),e._v(" entites")]),e._v(" "),t("p",[e._v("所有类型为"),t("code",[e._v("@entity")]),e._v("指令的都作为实体（目前所有类型必须包含"),t("code",[e._v("@entity")]),e._v("，以后可能会去除这个限制），必须包含"),t("code",[e._v("ID")]),e._v("字段")]),e._v(" "),t("h3",{attrs:{id:"排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[e._v("#")]),e._v(" 排序")]),e._v(" "),t("p",[e._v("使用"),t("code",[e._v("orderBy")]),e._v("按照特定字段进行排序，"),t("code",[e._v("orderDirection")]),e._v("可以用来指定排序方式，"),t("code",[e._v("asc")]),e._v("或者"),t("code",[e._v("desc")])]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("{\n  tokens"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("orderBy: price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" orderDirection: "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("asc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" {\n    id\n    owner\n  }\n}\n")])])]),t("h3",{attrs:{id:"分页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分页"}},[e._v("#")]),e._v(" 分页")]),e._v(" "),t("p",[e._v("使用"),t("code",[e._v("first")]),e._v("参数，进行分页。默认排序是按id以数字升序排序，不是按照创建时间。"),t("code",[e._v("skip")]),e._v("参数可以指定"),t("code",[e._v("first")]),e._v("开始位置，也就是说如果"),t("code",[e._v("first:100,skip:100")]),e._v("，则从第101开始。应避免使用非常大的"),t("code",[e._v("skip")]),e._v(",因为它表现不佳")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("{\n  tokens"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("first")]),e._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" {\n    id\n    owner\n  }\n}\n")])])]),t("p",[e._v('如果要查询大量数据，将查询基于属性并按该属性进行过滤会更高效。比如下边这个例子，第一次，它会发送带有 lastID = "" 的查询，并且对于后续请求，将 lastID 设置为上一个请求中最后一个实体的 id 属性。这种方法将比使用'),t("code",[e._v("skip")]),e._v("表现得更好。")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("{\n  query manyTokens"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("$lastID: String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" {\n    tokens"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("first")]),e._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(": { id_gt: $lastID  }"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" {\n      id\n      owner\n    }\n  }\n}\n")])])]),t("h3",{attrs:{id:"过滤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过滤"}},[e._v("#")]),e._v(" 过滤")]),e._v(" "),t("p",[e._v("使用"),t("code",[e._v("where")]),e._v("属性过滤特定字段，也可以是多个字段。")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("{\n  challenges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(": { outcome: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"failed"')]),e._v(" }"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" {\n    challenger\n    outcome\n    application {\n      id\n    }\n  }\n}\n")])])]),t("p",[e._v("通过添加后缀"),t("code",[e._v("_gt、_lte")]),e._v("可以为查询字段添加比较")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("{\n  applications"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(": { deposit_gt: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"10000000000"')]),e._v(" }"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" {\n    id\n    whitelisted\n    deposit\n  }\n}\n")])])]),t("p",[e._v("有些后缀只能用在特定类型上，所有支持的后缀如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("_not\n_gt\n_lt\n_gte\n_lte\n_in\n_not_in\n_contains\n_not_contains\n_starts_with\n_ends_with\n_not_starts_with\n_not_ends_with\n")])])]),t("h3",{attrs:{id:"时间旅行查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间旅行查询"}},[e._v("#")]),e._v(" 时间旅行查询")]),e._v(" "),t("p",[e._v("查询不只是在最后一个块查找数据，也可以查询在某个"),t("code",[e._v("block")]),e._v("之前的数据，参数可以为块"),t("code",[e._v("number")]),e._v("或者块"),t("code",[e._v("hash")]),e._v(",这种方式查询的结果不会随时间改变，除非查询的块位置非常靠近主网的头部区块，有可能最终这条数据没有并入主块。")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("{\n  challenges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("block: { number: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000000")]),e._v(" }"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" {\n    challenger\n    outcome\n    application {\n      id\n    }\n  }\n}\n")])])]),t("h3",{attrs:{id:"全文搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全文搜索"}},[e._v("#")]),e._v(" 全文搜索")]),e._v(" "),t("blockquote",[t("p",[e._v("从 specVersion 0.0.4 版本开始, fullTextSearch 必须在子图清单的 features 部分下声明。")])]),e._v(" "),t("p",[e._v("全文搜索必须包含"),t("code",[e._v("text")]),e._v("参数，全文搜索还提供一些特殊的操作符：")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("&")]),e._v(":用于将多个搜索词组合到过滤器中")]),e._v(" "),t("li",[t("code",[e._v("|")]),e._v(":或者")]),e._v(" "),t("li",[t("code",[e._v("<->")]),e._v(": 查找两个中间被隔开的单词")]),e._v(" "),t("li",[t("code",[e._v(":*")]),e._v("：以某个单位为开头")])]),e._v(" "),t("p",[e._v("全文搜索需要添加一个"),t("code",[e._v("schema")]),e._v("，需要包含"),t("code",[e._v("_Scheam_")]),e._v("type和"),t("code",[e._v("@fulltext")]),e._v("指令。这个schema中包含了全文搜索的名称"),t("code",[e._v("bandSearch")]),e._v("，以及搜索中包含的字段"),t("code",[e._v("include")]),e._v("。每个全文搜索都有可能有多个"),t("code",[e._v("field")]),e._v("，但是他们都要来自同一个实体"),t("code",[e._v("entity")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('type _Schema_\n  @fulltext(\n    name: "bandSearch"\n    language: en\n    algorithm: rank\n    include: [{ entity: "Band", fields: [{ name: "name" }, { name: "description" }, { name: "bio" }] }]\n  )\n\ntype Band @entity {\n  id: ID!\n  name: String!\n  description: String!\n  bio: String\n  wallet: Address\n  labels: [Label!]!\n  discography: [Album!]!\n  members: [Musician!]!\n}\n')])])]),t("p",[e._v("以下示例表示搜索以"),t("code",[e._v("lou")]),e._v("开头，后边有"),t("code",[e._v("music")]),e._v("的数据")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("{\n  blogSearch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("text")]),e._v(": "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"lou:* <-> music"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" {\n    id\n    title\n    body\n    author\n  }\n}\n\n")])])]),t("h3",{attrs:{id:"validation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[e._v("#")]),e._v(" Validation")]),e._v(" "),t("p",[e._v("Graph Node implements "),t("a",{attrs:{href:"https://spec.graphql.org/October2021/#sec-Validation",target:"_blank",rel:"noopener noreferrer"}},[e._v("specification-based"),t("OutboundLink")],1),e._v(" validation of the GraphQL queries it receives using "),t("a",{attrs:{href:"https://github.com/dotansimha/graphql-tools-rs#validation-rules",target:"_blank",rel:"noopener noreferrer"}},[e._v("graphql-tools-rs"),t("OutboundLink")],1),e._v(", which is based on the "),t("a",{attrs:{href:"https://github.com/graphql/graphql-js/tree/main/src/validation",target:"_blank",rel:"noopener noreferrer"}},[e._v("graphql-js reference implementation"),t("OutboundLink")],1),e._v(". Queries which fail a validation rule do so with a standard error - visit the "),t("a",{attrs:{href:"https://spec.graphql.org/October2021/#sec-Validation",target:"_blank",rel:"noopener noreferrer"}},[e._v("GraphQL spec"),t("OutboundLink")],1),e._v(" to learn more.")]),e._v(" "),t("h2",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[e._v("#")]),e._v(" 部署")]),e._v(" "),t("p",[e._v("支持两种方式，一种是Ether主网使用subgraph statio，还有一种是其他类型，其他类型网络使用hosted service。")]),e._v(" "),t("p",[e._v("先创建subgraph,获取token"),t("code",[e._v("5e1b889bed4745858e7bfb4cf25788f9")]),e._v(",用于"),t("code",[e._v("graph auth")]),e._v("指令获取部署权限.")]),e._v(" "),t("p",[e._v("获取权限后就可以使用"),t("code",[e._v("yarn deploy")]),e._v("部署了。")]),e._v(" "),t("p",[e._v("部署之后，查看dashboard有一个进度条，显示 Syncing(x%)，这是在同步区块数据。")]),e._v(" "),t("blockquote",[t("p",[e._v("cli init时的account和subgraph name一定要和hosted-service中的一致，否则无法部署")])]),e._v(" "),t("h2",{attrs:{id:"编写graph"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写graph"}},[e._v("#")]),e._v(" 编写Graph")]),e._v(" "),t("p",[e._v("目前你the graph只支持"),t("code",[e._v("queries")]),e._v("定义")]),e._v(" "),t("h3",{attrs:{id:"编写流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写流程"}},[e._v("#")]),e._v(" 编写流程")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("运行codegen会生成相关abi的type文件")])]),e._v(" "),t("li",[t("p",[e._v("在schema.graphql中编写query实体，实体的字段类型应该为codegen生成后的合约文件中相关事件的params类型。然后运行codegen会生成对应字段的实体类")])]),e._v(" "),t("li",[t("p",[e._v("然后在对应的mapping文件中的event函数中根据实体类创建该实体并保存")])])]),e._v(" "),t("h3",{attrs:{id:"query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[e._v("#")]),e._v(" Query")]),e._v(" "),t("p",[e._v("当我们查询的时候一般指的是查询实体"),t("code",[e._v("@entity")])]),e._v(" "),t("h3",{attrs:{id:"load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[e._v("#")]),e._v(" load")]),e._v(" "),t("p",[e._v("用来从"),t("code",[e._v("Graph Node store")]),e._v("中加载指定实体已经有的数据。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" let gravatar = Gravatar.load(id)\n")])])]),t("h3",{attrs:{id:"数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[e._v("#")]),e._v(" 数据类型")]),e._v(" "),t("p",[e._v("the graph支持的数据类型有：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- Bytes:\tByte array, represented as a hexadecimal string. Commonly used for Ethereum hashes and addresses.\n- ID:\tStored as a string.\n- String:\tScalar for string values. Null characters are not supported and are automatically removed.\n- Boolean:\tScalar for boolean values.\n- Int\tThe GraphQL spec defines Int to have size of 32 bytes.\n- BigInt\tLarge integers. Used for Ethereum's uint32, int64, uint64, ..., uint256 types. Note: Everything below - uint32, such as int32, uint24 or int8 is represented as i32.\n- BigDecimal\tBigDecimal High precision decimals represented as a signficand and an exponent. The exponent range is from −6143 to +6144. Rounded to 34 significant digits.\n")])])]),t("h3",{attrs:{id:"动态创建合约"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态创建合约"}},[e._v("#")]),e._v(" 动态创建合约")]),e._v(" "),t("p",[e._v("除了source字段其他都跟data source相同，这适用于没有合约地址，abi相同的合约。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dataSources:\n  - kind: ethereum/contract\n    name: Factory\n    # ... other source fields for the main contract ...\ntemplates:\n  - name: Exchange\n    kind: ethereum/contract\n    network: mainnet\n    source:\n      abi: Exchange\n    mapping:\n      kind: ethereum/events\n      apiVersion: 0.0.6\n      language: wasm/assemblyscript\n      file: ./src/mappings/exchange.ts\n      entities:\n        - Exchange\n      abis:\n        - name: Exchange\n          file: ./abis/exchange.json\n      eventHandlers:\n        - event: TokenPurchase(address,uint256,uint256)\n          handler: handleTokenPurchase\n        - event: EthPurchase(address,uint256,uint256)\n          handler: handleEthPurchase\n        - event: AddLiquidity(address,uint256,uint256)\n          handler: handleAddLiquidity\n        - event: RemoveLiquidity(address,uint256,uint256)\n          handler: handleRemoveLiquidity\n\n")])])]),t("h4",{attrs:{id:"实例化动态合约"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例化动态合约"}},[e._v("#")]),e._v(" 实例化动态合约")]),e._v(" "),t("p",[e._v("在合约创建时，使用"),t("code",[e._v("create")]),e._v("来实例化,实例化之后才会开始索引该合约：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import { Exchange } from '../generated/templates'\n\nexport function handleNewExchange(event: NewExchange): void {\n  // Start indexing the exchange; `event.params.exchange` is the\n  // address of the new exchange contract\n  Exchange.create(event.params.exchange)\n}\n")])])]),t("p",[e._v("新实例化的数据源只处理创建它的块和所有后续块的调用和事件，不会处理之前的历史数据。")]),e._v(" "),t("h4",{attrs:{id:"上下文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上下文"}},[e._v("#")]),e._v(" 上下文")]),e._v(" "),t("p",[e._v("动态创建时还可以带入上下文环境到合约中")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import { Exchange } from '../generated/templates'\n\nexport function handleNewExchange(event: NewExchange): void {\n  let context = new DataSourceContext()\n  context.setString('tradingPair', event.params.tradingPair)\n  Exchange.createWithContext(event.params.exchange, context)\n}\n")])])]),t("p",[e._v("然后通过"),t("code",[e._v("context.getString")]),e._v("获取：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import { dataSource } from '@graphprotocol/graph-ts'\n\nlet context = dataSource.context()\nlet tradingPair = context.getString('tradingPair')\n")])])]),t("h2",{attrs:{id:"项目结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[e._v("#")]),e._v(" 项目结构")]),e._v(" "),t("p",[e._v("cli init之后项目的目录结构为:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("subgraph.yaml     #manifest文件，也是subgraph的入口点，很多信息都是在该文件中配置\nschema.graphql    #schema主要定义了保存到Graph节点中的各种实体数据的数据结构\npackage.json\nyarn.lock\nabis              #合约的abi文件都放在这里\n  - Contract.json\nsrc               #主要编写对合约事件监听后的处理，处理逻辑一般就是创建或更新实体数据\n  - mapping.ts\ngenerated         #这是自动生成的，修改以上的文件后可用graph codegen命令重新生成\n  - schema.ts\n  - Contract\n    - Contract.ts\n")])])]),t("h3",{attrs:{id:"manifest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manifest"}},[e._v("#")]),e._v(" Manifest")]),e._v(" "),t("p",[e._v("Manifest 文件就是 "),t("strong",[e._v("subgraph.yaml")]),e._v(" 文件，是核心的入口点。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('specVersion: 0.0.2\nschema:\n  file: ./schema.graphql // 表示graphql文件位置\ndataSources:             // 数据源,可以配置多个\n  - kind: ethereum       // 什么种类的数据\n    name: HODLToken      \n    network: bsc         // 所在网络\n    source:\n    \tstartBlock:15277512  // 可选的，推荐使用该合约的创建区块\n      address: "0xB306b4DC1e1B23B1816F6730Dc60ed2c8372BA2b"  // 合约地址\n      abi: HODLToken                                         // abi名称\n    mapping:          // 映射链上数据和 schema entities\n      kind: ethereum/events     // 映射事件类型\n      apiVersion: 0.0.5\n      language: wasm/assemblyscript\n      entities:      // 指定使用了哪些entites\n        - Approval\n        - OwnershipTransferred\n        - Transfer\n      abis:  // 指定abi位置，可以是多个\n        - name: HODLToken\n          file: ./abis/HODLToken.json\n      eventHandlers:   // 绑定链上数据事件关联的本地文件file中的函数\n        - event: Approval(indexed address,indexed address,uint256)\n          handler: handleApproval\n        - event: OwnershipTransferred(indexed address,indexed address)\n          handler: handleOwnershipTransferred\n        - event: Transfer(indexed address,indexed address,uint256)\n          handler: handleTransfer\n      file: ./src/mapping.ts    // 表示subgraph搜索使用的函数都在这里\ntemplates: // 用于设置支持动态创建的合约(没有address)\n  - kind: ethereum/contract\n    name: Option\n    network: bsctestnet\n    source:\n      abi: Option\n    mapping:\n      kind: ethereum/events\n      apiVersion: 0.0.5\n      language: wasm/assemblyscript\n      entities:\n        - Option\n        - Trade\n        - OptionAccount\n        - User\n        - ValueStore\n      abis:\n        - name: Option\n          file: ./abis/Option.json\n        - name: StakingPools\n          file: ./abis/StakingPools.json\n        - name: Sniper\n          file: ./abis/Sniper.json\n        - name: Bullet\n          file: ./abis/Bullet.json\n      eventHandlers:\n        - event: EnteredOption(uint256,address,uint256)\n          handler: handleEnteredOption\n        - event: Exercised(uint256,uint256,uint256)\n          handler: handleExercised\n        - event: RedeemedToken(uint256,address,uint256,uint256)\n          handler: handleRedeemedToken\n      file: ./src/mapping/option.ts\n\n')])])]),t("h3",{attrs:{id:"mappings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mappings"}},[e._v("#")]),e._v(" Mappings")]),e._v(" "),t("p",[e._v("mapping中的函数接收为事件，事件都继承ethereum.Event,其结构为：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export class Event {\n  address: Address\n  logIndex: BigInt\n  transactionLogIndex: BigInt\n  logType: string | null\n  block: Block\n  transaction: Transaction\n  parameters: Array<EventParam>\n}\n")])])]),t("p",[e._v("用的最多的是"),t("code",[e._v("event.params.xxx")]),e._v("来获取参数")]),e._v(" "),t("h2",{attrs:{id:"cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" cli")]),e._v(" "),t("h3",{attrs:{id:"codegen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#codegen"}},[e._v("#")]),e._v(" codegen")]),e._v(" "),t("ol",[t("li",[e._v("通过转化abi文件为ts代码")]),e._v(" "),t("li",[e._v("schema.graphql文件中的实体编译为ts文件")])]),e._v(" "),t("h3",{attrs:{id:"create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create"}},[e._v("#")]),e._v(" create")]),e._v(" "),t("p",[e._v("本地的subgraph项目想要部署到私有节点的话，需要先在本地执行：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("graph create <SUBGRAPH_NAME> --node http://<NODE_IP>:8020\n")])])]),t("h2",{attrs:{id:"graph-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#graph-node"}},[e._v("#")]),e._v(" Graph Node")]),e._v(" "),t("p",[e._v("通过graph node我们可以自己部署想要的网络")]),e._v(" "),t("h3",{attrs:{id:"环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[e._v("#")]),e._v(" 环境")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://www.rust-lang.org/zh-CN/tools/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装Rust"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.enterprisedb.com/downloads/postgres-postgresql-downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装PostgreSQL"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://formulae.brew.sh/formula/postgresql",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装IPFS 命令行工具"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("ol",[t("li",[e._v("链接：https://juejin.cn/post/6975499793976000525")])])])}),[],!1,null,null,null);a.default=s.exports}}]);