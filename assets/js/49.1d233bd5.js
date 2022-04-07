(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{478:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"andorid密度对应分辨率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#andorid密度对应分辨率"}},[t._v("#")]),t._v(" andorid密度对应分辨率")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-pic.oss-cn-beijing.aliyuncs.com/20190724150859.png",alt:"20190724150859.png"}})]),t._v(" "),s("blockquote",[s("p",[t._v("引用：https://blog.csdn.net/u010413574/article/details/52790253")])]),t._v(" "),s("h2",{attrs:{id:"application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[t._v("#")]),t._v(" Application")]),t._v(" "),s("ul",[s("li",[s("b",[t._v("单例模式")]),t._v("：每个App都有且只有一个Application的实例对象，可以通过继承Application子类来进行自定义,如果没有自定义的话,APP会在打开是自动创建一个默认的实例对象.")]),t._v(" "),s("li",[s("b",[t._v("生命周期")]),t._v("：APP开启时就会开始实例化Application对象,Application实例的生命周期是最长的,拥有和APP一样长的生命周期")]),t._v(" "),s("li",[s("b",[t._v("获取方式")]),t._v("：如果没有自定义Application的话,同样可以获取到Application对象,使用Activity.getApplication()或者  Context.getApplicationContext()方法都可以获取到对象.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n    setContentView(R.layout.activity_main)\n\n    //这两种方法都可以获取到实例对象\n    val application = application\n    val otherApplication = applicationContext\n}\n")])])]),s("ul",[s("li",[s("b",[t._v("全局实例")]),t._v("：在不同的组件中(如:Activity,Service),都可以获取Application对象,并且都会是同一个对象")])]),t._v(" "),s("h2",{attrs:{id:"activity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activity"}},[t._v("#")]),t._v(" Activity")]),t._v(" "),s("h3",{attrs:{id:"activity是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activity是什么"}},[t._v("#")]),t._v(" Activity是什么？")]),t._v(" "),s("p",[t._v("Activity是一个Android应用程序组件(也称为Android四大组件之一)，它提供了一个屏幕，用户可以通过该屏幕进行交互以执行某些操作，例如拨打电话，拍照，发送电子邮件或查看地图。每个活动都有一个窗口，用于绘制其用户界面。窗口通常填满屏幕，但可能比屏幕小，并漂浮在其他窗口的顶部."),s("br"),t._v('\nAndroid应用程序通常由多个彼此松散绑定的Activity组成。通常，应用程序中的一个Activity被指定为“主要”Activity，该Activity在首次启动应用程序时呈现给用户。然后，每个Activity可以启动另一个Activity以执行不同的操作。每次新Activity开始时，前一个Activity都会停止，但系统会将Activity保留在后台堆栈中（“后堆栈”）。当一个新的Activity开始时，它会被推到后面的堆栈上，并引起用户的注意。后栈遵循基本的“ 后进先出”堆栈机制，因此，当用户完成当前活动并按下"后退按钮"时，它从堆栈弹出（并销毁），之前的活动恢复。（后台堆栈将在后面为大家详细介绍。）')]),t._v(" "),s("h3",{attrs:{id:"如何创建activity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何创建activity"}},[t._v("#")]),t._v(" 如何创建Activity")]),t._v(" "),s("p",[t._v("要创建Activity,您必须创建Activity的子类。在子类中，您需要实现当Activity在其生命周期的各个状态之间转换时系统调用的回调方法，例如在创建，停止，恢复或销毁活动时。两个最重要的回调方法是")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("public class ExampleActivity extends AppCompatActivity {\n\n @Override\n    public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {\n        super.onCreate(savedInstanceState, persistentState);\n//您必须实现此方法。系统在创建Activity时调用此方法。在您的实施中，您应该初始化Activity的基本组成部分。最重要的是，您必须在此处调用以定义Activity用户界面的布局。\n        setContentView();\n    }\n\n\n//系统将此方法称为用户离开您的Activity的第一个指示（尽管并不总是意味着Activity正在被销毁）。这通常是您应该提交应该在当前用户会话之外保留的任何更改的地方（因为用户可能不会回来）。\n\n@Override\n    protected void onPause() {\n        super.onPause();\n        //在此处应该提交应该在当前用户会话之外保留的任何更改的地方\n    }\n\n}\n\n\n")])])]),s("blockquote",[s("p",[t._v("在访问Activity时，必须在manifest中声明此Activity")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<manifest ... >\n <application ... > \n    <activity android：name = “.ExampleActivity” />    \n </ application ... >  \n</ manifest >\n\n")])])]),s("h3",{attrs:{id:"如何启动activity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何启动activity"}},[t._v("#")]),t._v(" 如何启动Activity")]),t._v(" "),s("p",[t._v("您可以通过调用启动另一个Activity,通过startActivity()方法，并将Intent传递给您要启动的Activity。intent指定要启动的确切Activity或描述您要执行的操作类型（系统为您选择适当的活动，甚至可以来自不同的应用程序）。Intent(意图)还可以携带少量数据以供启动的活动使用。")]),t._v(" "),s("ul",[s("li",[t._v("启动指定自建的Activity")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" intent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SignInActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("此种启动又叫做显示Intent .")]),t._v(" "),s("ul",[s("li",[t._v("启动其他类型的Activity")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" intent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_SEND"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nintent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("putExtra")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EXTRA_EMAIL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" recipientArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("此种启动又叫做隐式Intent .")]),t._v(" "),s("blockquote",[s("p",[t._v("有时候，我们可能需要从上一个Activity接收返回数据结果，这时，我们就需要另外一种启动方式了。")])]),t._v(" "),s("p",[t._v("在这种情况下，通过调用startActivityForResult()（而不是startActivity()）来启动Activity。然后，要从后续Activity接收结果，就需要实现onActivityResult()回调方法。完成后续Activity后，它会在您的onActivityResult() 方法中返回结果。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pickContact")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Create an intent to "pick" a contact, as defined by the content provider URI')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" intent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_PICK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Contacts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CONTENT_URI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startActivityForResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PICK_CONTACT_REQUEST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onActivityResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" requestCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" resultCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the request went well (OK) and the request was PICK_CONTACT_REQUEST")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resultCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Activity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RESULT_OK "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" requestCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" PICK_CONTACT_REQUEST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Perform a query to the contact's content provider for the contact's name")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cursor")]),t._v(" cursor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContentResolver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Contacts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DISPLAY_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("moveToFirst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// True if the cursor is not empty")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" columnIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getColumnIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Contacts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DISPLAY_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("columnIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something with the selected contact's name...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"关闭activity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭activity"}},[t._v("#")]),t._v(" 关闭Activity")]),t._v(" "),s("p",[t._v("您可以通过调用其finish()方法来关闭活动。您还可以关闭之前通过调用启动的单独活动finishActivity()。")]),t._v(" "),s("blockquote",[s("p",[t._v("接下来便是整个Activity最核心的地方了，只要搞清楚一下内容，Activity也就理解的差不多了")])]),t._v(" "),s("h3",{attrs:{id:"activity生命周期详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activity生命周期详解"}},[t._v("#")]),t._v(" Activity生命周期详解")]),t._v(" "),s("p",[t._v("Activity之所以能够成为Android四大组件之一,原因便是其具有非常灵活的生命周期回调方法,通过实现回调方法来管理Activity的生命周期对于开发强大而灵活的应用程序至关重要。Activity的生命周期直接受其与其他Activity，其任务和后台堆栈的关联的影响。"),s("br"),t._v("\nActivity基本上存在于三种状态：")]),t._v(" "),s("ol",[s("li",[t._v("恢复 onResume() Activity位于屏幕的前景并具有用户焦点。")]),t._v(" "),s("li",[t._v("已暂停 onPause()当系统开始准备停止当前Activity的时候调用，在该方法中google给出的建议是存储一些变化的数据同时停止一些类似于动画等消耗CPU的工作。该方法的调用过程是很快的，否则会影响到后面的Activity的显示，所以在该方法里不宜做过多耗时操作。")]),t._v(" "),s("li",[t._v("停止 onStop() activity完全被其他activity掩盖，不可见。仍然保留所有状态和变量信息，但是在系统其他地方需要内存的情况下，可能会被系统杀死。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);