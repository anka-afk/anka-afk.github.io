---
title: UDP53端口绕过Wi-Fi登陆认证
tags:
  - VPN
  - Linux
excerpt: 锐捷，你看到了吗.jpg（）
toc: true
author: xeonds
date: '2020.12.18 13:21:00'
categories:
  - 计算机科学
---
这段时间一直在和锐捷对线，甚至被迫营业用上kali nh（~~本就不大的存储空间更加雪上加霜www~~）不过好在找到了法子。

就是它！UDP 53!搬一下度娘介绍：

53端口为DNS(Domain Name Server，域名服务器)服务器所开放，主要用于域名解析，DNS服务在NT系统中使用的最为广泛。通过<a href="https://baike.baidu.com/item/DNS%E6%9C%8D%E5%8A%A1%E5%99%A8" target="_blank" rel="noopener noreferrer">DNS服务器</a>可以实现域名与IP地址之间的转换，只要记住域名就可以快速访问网站。

就是这样！但是这和我不能认证上网又有什么关系呢？有关系。因为锐捷会劫持你的页面，但是它对UDP53端口是不拦截的。所以……或许可以试试借此突破防护？

我们试试连接wifi，ping一下百度（百度正确食用方法：~~测试网络状况~~）

我们得到了下图的结果：

![ping测试结果](http://mxts.jiujiuer.xyz/files/picture/Screenshot_20201103-124939693.jpg)

也就是说，我们可以通过UDP53端口来直接访问外部网络！

验证结束。接下来开始实操。  

---
首先，我们需要两个文件。一个是服务端软件openVPN server，另一个是服务端远程管理软件SoftEther VPN。除此之外，还需要一个有公网地址的服务器。我用的是运行Ubuntu的阿里云（毕竟学生机跟白送差不多×），也有dalao用的是vultr之类的。

首先，我们需要配置我们的服务端。通过ssh连接到ubuntu服务器，创建一个目录用来下载openvpn的安装文件。

下载完成之后，使用命令tar  -zxvf   [文件名]来解压。解压完成后使用cd openvpn进入软件目录，使用make命令来编译软件（默认环境已经安装了gcc等支持）。编译过程一路1+回车确定即可。

编译完成后使用命令./vpnserver start启动服务端，使用命令./vpncmd进入设置。输入1后连按回车直到出现vpnserver>提示符为止。使用SetVpnserverPassword指令设置openvpn服务端密码。设置完成后，使用exit指令退出。

至此，服务端配置完成。可以断开ssh连接了。
  
现在，我们需要一个运行windows系统的电脑（废话）来完成服务端的最终配置。

这里的配置后面再说，我先放上已经完成的配置文件：[openVPN配置文件](http://mxts.jiujiuer.xyz/files/openvpn-conf-20201121.zip)

点击下载到本地，待会需要使用到这个文件

接下来，我们便可以使用openvpn来愉快地上网了（不过ios平台可能得费些功夫，因为在国内这玩意下载起来比较困难）

这里先附上安卓端：[点击下载](https://dreamweb.lanzoui.com/ijkMvj3ts8h)。

下载完成后，打开软件，点击右上角导入配置文件。然后找到我们刚下载好的配置文件，打开，确定，点击开启，输入账号密码，完成！

---

到这里就差不多结束了。现在，你可以无视锐捷，愉快地免登陆上网了w
