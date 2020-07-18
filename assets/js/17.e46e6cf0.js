(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{361:function(_,v,a){"use strict";a.r(v);var t=a(43),l=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"调试技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试技巧"}},[_._v("#")]),_._v(" 调试技巧")]),_._v(" "),a("h2",{attrs:{id:"_1-lldb常用的调试命令？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-lldb常用的调试命令？"}},[_._v("#")]),_._v(" 1.LLDB常用的调试命令？")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("po：print object的缩写，表示显示对象的文本描述，如果对象不存在则打印nil。")])]),_._v(" "),a("li",[a("p",[_._v("p：可以用来打印基本数据类型。")])]),_._v(" "),a("li",[a("p",[_._v('call：执行一段代码 如：call NSLog(@"%@", @"yang")')])]),_._v(" "),a("li",[a("p",[_._v("expr：动态执行指定表达式")])]),_._v(" "),a("li",[a("p",[_._v("bt：打印当前线程堆栈信息 （bt all 打印所有线程堆栈信息）")])]),_._v(" "),a("li",[a("p",[_._v("image：常用来寻找栈地址对应代码位置 如：image lookup --address 0xxxx")])])]),_._v(" "),a("h2",{attrs:{id:"_2-断点调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-断点调试"}},[_._v("#")]),_._v(" 2.断点调试")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("条件断点")]),_._v(" "),a("p",[_._v("打上断点之后，对断点进行编辑，设置相应过滤条件。下面简单的介绍一下条件设置：")]),_._v(" "),a("p",[_._v("Condition：返回一个布尔值，当布尔值为真触发断点，一般里面我们可以写一个表达式。")]),_._v(" "),a("p",[_._v("Ignore：忽略前N次断点，到N+1次再触发断点。")]),_._v(" "),a("p",[_._v("Action：断点触发事件，分为六种：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("AppleScript：执行脚本。")])]),_._v(" "),a("li",[a("p",[_._v("Capture GPU Frame：用于OpenGL ES调试，捕获断点处GPU当前绘制帧。")])]),_._v(" "),a("li",[a("p",[_._v("Debugger Command：和控制台中输入LLDB调试命令一致。")])]),_._v(" "),a("li",[a("p",[_._v("Log Message：输出自定义格式信息至控制台。")])]),_._v(" "),a("li",[a("p",[_._v("Shell Command：接收命令文件及相应参数列表，Shell Command是异步执行的，只有勾选“Wait until done”才会等待Shell命令执行完在执行调试。")])]),_._v(" "),a("li",[a("p",[_._v("Sound：断点触发时播放声音。")])])]),_._v(" "),a("p",[_._v("Options(Automatically continue after evaluating actions选项)：选中后，表示断点不会终止程序的运行。")])]),_._v(" "),a("li",[a("p",[_._v("异常断点")]),_._v(" "),a("p",[_._v("异常断点可以快速定位不满足特定条件的异常，比如常见的数组越界，这时候很难通过异常信息定位到错误所在位置。这个时候异常断点就可以发挥作用了。")]),_._v(" "),a("p",[_._v("Exception：可以选择抛出异常对象类型：OC或C++。")]),_._v(" "),a("p",[_._v("Break：选择断点接收的抛出异常来源是Throw还是Catch语句。")])]),_._v(" "),a("li",[a("p",[_._v("符号断点")]),_._v(" "),a("p",[_._v("符号断点的创建方式和异常断点一样一样的，在符号断点中可以指定要中断执行的方法：")]),_._v(" "),a("p",[_._v("Symbol:[类名 方法名]可以执行到指定类的指定方法中开始断点。")])])]),_._v(" "),a("h2",{attrs:{id:"_3-ios-常见的崩溃类型有哪些？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-ios-常见的崩溃类型有哪些？"}},[_._v("#")]),_._v(" 3.iOS 常见的崩溃类型有哪些？")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("unrecognized selector crash")])]),_._v(" "),a("li",[a("p",[_._v("KVO crash")])]),_._v(" "),a("li",[a("p",[_._v("NSNotification crash")])]),_._v(" "),a("li",[a("p",[_._v("NSTimer crash")])]),_._v(" "),a("li",[a("p",[_._v("Container crash")])]),_._v(" "),a("li",[a("p",[_._v("NSString crash")])]),_._v(" "),a("li",[a("p",[_._v("Bad Access crash （野指针）")])]),_._v(" "),a("li",[a("p",[_._v("UI not on Main Thread Crash")])])])])}),[],!1,null,null,null);v.default=l.exports}}]);