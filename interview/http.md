- 浏览器渲染过程，回流重绘等等，load、DOMContentLoaded等等事件的触发顺序

- 一个完整的http请求，页面渲染过程，js和css文件怎么渲染
构建DOM树(DOM tree)：从上到下解析HTML文档生成DOM节点树（DOM tree）
构建CSSOM(CSS Object Model)树：加载解析样式生成CSSOM树
执行JavaScript：加载并执行JavaScript代码（包括内联代码或外联JavaScript文件）
构建渲染树(render tree)：根据DOM树和CSSOM树,生成渲染树(render tree)；渲染树：按顺序展示在屏幕上的一系列矩形，这些矩形带有字体，颜色和尺寸等视觉属性
布局（layout）：根据渲染树将节点树的每一个节点布局在屏幕上的正确位置
绘制（painting）：遍历渲染树绘制所有节点，为每一个节点适用对应的样式，这一过程是通过UI后端模块完成

- 从url输入到页面显示会有哪些步骤
1、浏览器的地址栏输入URL并按下回车。
2、浏览器查找当前URL是否存在缓存，并比较缓存是否过期。
3、DNS解析URL对应的IP。
4、根据IP建立TCP连接（三次握手）。
5、HTTP发起请求。
6、服务器处理请求，浏览器接收HTTP响应。
7、渲染页面，构建DOM树。
8、关闭TCP连接（四次挥手）。
加载：浏览器对一个html页面的加载顺序是从上而下的。
当加载到外部css文件、图片等资源，浏览器会再发起一次http请求，来获取外部资源。
当加载到js文件，html文档会挂起渲染（加载解析渲染同步）的线程，等待js文件加载、解析完毕才可以恢复html文档的渲染线程。
解析：解析DOM树和CSSDOM树。
渲染：构建渲染树，将DOM树进行可视化表示，将页面呈现给用户。

- 请描述一下DNS解析的具体过程？
见图片

- 讲tcp/ip网络层、三次握手，为什么不能两次握手

- TCP是如何发起连接和关闭连接的？
三次握手，四次挥手

- TCP怎么工作的
三次握手

- TCP三次握手

- SSL握手过程

- tcp/ip网络层，http的特点

- http强行使用udp能实现吗？

- http2比http1好的地方

- http状态码
2XX 成功

200 OK，表示从客户端发来的请求在服务器端被正确处理
204 No content，表示请求成功，但响应报文不含实体的主体部分
206 Partial Content，进行范围请求

3XX 重定向

301 moved permanently，永久性重定向，表示资源已被分配了新的 URL
302 found，临时性重定向，表示资源临时被分配了新的 URL
303 see other，表示资源存在着另一个 URL，应使用 GET 方法丁香获取资源
304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况
307 temporary redirect，临时重定向，和302含义相同

4XX 客户端错误

400 bad request，请求报文存在语法错误
401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息
403 forbidden，表示对请求资源的访问被服务器拒绝
404 not found，表示在服务器上没有找到请求的资源

5XX 服务器错误

500 internal sever error，表示服务器端在执行请求时发生了错误
503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求

- 有哪些优化手段可以优化提高网页响应速度
https://csspod.com/frontend-performance-best-practices/

- Http请求中的keep-alive
在http早期，每个http请求都要求打开一个tpc socket连接，并且使用一次之后就断开这个tcp连接。
使用keep-alive可以改善这种状态，即在一次TCP连接中可以持续发送多份数据而不会断开连接。通过使用keep-alive机制，可以减少tcp连接建立次数，也意味着可以减少TIME_WAIT状态连接，以此提高性能和提高httpd服务器的吞吐率(更少的tcp连接意味着更少的系统内核调用,socket的accept()和close()调用)。
但是，keep-alive并不是免费的午餐,长时间的tcp连接容易导致系统资源无效占用。配置不当的keep-alive，有时比重复利用连接带来的损失还更大。所以，正确地设置keep-alive timeout时间非常重要。

- Http的缓存(http-cache)
好处:
减少了冗余的数据传输，减少网费
减少服务器端的压力
Web 缓存能够减少延迟与网络阻塞，进而减少显示某个资源所用的时间
加快客户端加载网页的速度
常见 http 缓存的类型:
私有缓存（一般为本地浏览器缓存）
代理缓存

本地缓存:
本地缓存是指浏览器请求资源时命中了浏览器本地的缓存资源，浏览器并不会发送真正的请求给服务器了。它的执行过程是：
第一次浏览器发送请求给服务器时，此时浏览器还没有本地缓存副本，服务器返回资源给浏览器，响应码是200 OK，浏览器收到资源后，把资源和对应的响应头一起缓存下来。
第二次浏览器准备发送请求给服务器时候，浏览器会先检查上一次服务端返回的响应头信息中的Cache-Control，它的值是一个相对值，单位为秒，表示资源在客户端缓存的最大有效期，过期时间为第一次请求的时间减去Cache-Control的值，过期时间跟当前的请求时间比较，如果本地缓存资源没过期，那么命中缓存，不再请求服务器。
如果没有命中，浏览器就会把请求发送给服务器，进入缓存协商阶段。
与本地缓存相关的头有：Cache-Control、Expires，Cache-Control有多个可选值代表不同的意义，而Expires就是一个日期格式的绝对值。
Cache-Control:
Cache-Control是HTPP缓存策略中最重要的头，它是HTTP/1.1中出现的，它由如下几个值

no-cache：不使用本地缓存。需要使用缓存协商，先与服务器确认返回的响应是否被更改，如果之前的响应中存在ETag，那么请求的时候会与服务端验证，如果资源未被更改，则可以避免重新下载。
no-store：直接禁止游览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源。
public：可以被所有的用户缓存，包括终端用户和CDN等中间代理服务器。
private：只能被终端用户的浏览器缓存，不允许CDN等中继缓存服务器对其缓存。
max-age：从当前请求开始，允许获取的响应被重用的最长时间（秒）。
例如：`Cache-Control: public, max-age=1000 表示资源可以被所有用户以及代理服务器缓存，最长时间为1000秒。`
Expires:
Expires是HTTP/1.0出现的头信息，同样是用于决定本地缓存策略的头，它是一个绝对时间，时间格式是如Mon, 10 Jun 2015 21:31:12 GMT，只要发送请求时间是在Expires之前，那么本地缓存始终有效，否则就会去服务器发送请求获取新的资源。如果同时出现Cache-Control：max-age和Expires，那么max-age优先级更高。他们可以这样组合使用
`Cache-Control: public`
`Expires: Wed, Jan 10 2018 00:27:04 GMT`
所谓的缓存协商:
当第一次请求时服务器返回的响应头中存在以下情况时

没有 Cache-Control 和 Expires
Cache-Control 和 Expires 过期了
Cache-Control 的属性设置为 no-cache 时
那么浏览器第二次请求时就会与服务器进行协商，询问浏览器中的缓存资源是不是旧版本，需不需要更新，此时，服务器就会做出判断，如果缓存和服务端资源的最新版本是一致的，那么就无需再次下载该资源，服务端直接返回304 Not Modified 状态码，如果服务器发现浏览器中的缓存已经是旧版本了，那么服务器就会把最新资源的完整内容返回给浏览器，状态码就是200 Ok，那么服务端是根据什么来判断浏览器的缓存是不是最新的呢？其实是根据HTTP的另外两组头信息，分别是：Last-Modified/If-Modified-Since 与 ETag/If-None-Match。

Last-Modified 与 If-Modified-Since:
浏览器第一次请求资源时，服务器会把资源的最新修改时间Last-Modified:Thu, 29 Dec 2011 18:23:55 GMT放在响应头中返回给浏览器
第二次请求时，浏览器就会把上一次服务器返回的修改时间放在请求头If-Modified-Since:Thu, 29 Dec 2011 18:23:55发送给服务器，服务器就会拿这个时间跟服务器上的资源的最新修改时间进行对比
如果两者相等或者大于服务器上的最新修改时间，那么表示浏览器的缓存是有效的，此时缓存会命中，服务器就不再返回内容给浏览器了，同时Last-Modified头也不会返回，因为资源没被修改，返回了也没什么意义。如果没命中缓存则最新修改的资源连同Last-Modified头一起返回。
第一次请求返回的响应头：
`Cache-Control:max-age=3600`
`Expires: Fri, Jan 12 2018 00:27:04 GMT`
`Last-Modified: Wed, Jan 10 2018 00:27:04 GMT`
第二次请求的请求头信息：
`If-Modified-Since: Wed, Jan 10 2018 00:27:04 GMT`
这组头信息是基于资源的修改时间来判断资源有没有更新，另一种方式就是根据资源的内容来判断，就是接下来要讨论的 ETag 与 If-None-Match

ETag与If-None-Match:
ETag/If-None-Match与Last-Modified/If-Modified-Since的流程其实是类似的，唯一的区别是它基于资源的内容的摘要信息（比如MD5 hash）来判断

浏览器发送第二次请求时，会把第一次的响应头信息ETag的值放在If-None-Match的请求头中发送到服务器，与最新的资源的摘要信息对比，如果相等，取浏览器缓存，否则内容有更新，最新的资源连同最新的摘要信息返回。用ETag的好处是如果因为某种原因到时资源的修改时间没改变，那么用ETag就能区分资源是不是有被更新。

第一次请求返回的响应头：

`Cache-Control: public, max-age=31536000`
ETag: "15f0fff99ed5aae4edffdd6496d7131f"``
第二次请求的请求头信息：
`If-None-Match: "15f0fff99ed5aae4edffdd6496d7131f"`
缓存判断顺序
先判断Cache-Control，在Cache-Control的max-age之内，直接返回200 from cache；
没有Cache-Control再判断Expires，再Expires之内，直接返回200 from cache；
Cache-Control=no-cache或者不符合Expires，浏览器向服务器发送请求；
服务器同时判断ETag和Last-Modified，都一致，返回304，有任何一个不一致，返回200。

- http请求方式有哪些？
HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法。
HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法。