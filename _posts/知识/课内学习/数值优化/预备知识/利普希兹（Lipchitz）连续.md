- Lipschitz 连续蕴涵绝对连续，绝对连续蕴涵一致连续。

也就是说, 只要一个函数在一个区间 Lipschitz 连续, 那么他就在这个区间上连续且一致连续

- Lipschitz 连续的函数是比连续函数较更加 “光滑”，
  但不一定是处处光滑的，比如 $\left| x \right|$ ,
  它不光滑的点不多，放在一起是一个零测集，所以他是几乎处处的光滑的

在[微分方程](https://zh.wikipedia.org/wiki/%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B "微分方程")，利普希茨连续是[皮卡 - 林德洛夫定理](https://zh.wikipedia.org/wiki/%E6%9F%AF%E8%A5%BF-%E5%88%A9%E6%99%AE%E5%B8%8C%E8%8C%A8%E5%AE%9A%E7%90%86 "柯西-利普希茨定理")中确保了**初值问题存在唯一解**的核心条件。

一种特殊的利普希茨连续，称为[压缩](https://zh.wikipedia.org/wiki/%E5%8E%8B%E7%BC%A9%E6%98%A0%E5%B0%84 "压缩映射")应用于[巴拿赫不动点定理](https://zh.wikipedia.org/wiki/%E5%B7%B4%E6%8B%BF%E8%B5%AB%E4%B8%8D%E5%8B%95%E9%BB%9E%E5%AE%9A%E7%90%86 "巴拿赫不动点定理")
- 我们在数值分析这门课程中, 使用[[迭代法|迭代法]] 求方程的根的时候, 就需要这个条件

> [!note] 利普希兹连续
> 
对于在实数集的子集的函数 $f{:}D\subseteq\mathbb{R}\to\mathbb{R}$, 若存在常数 $K$, 使得 $$|f(a)-f(b)|\leq K|a-b|\quad\forall a,b\in D$$ 则称 $f$ 符合利普希茨条件，其中 $f$ 最小的常数 $K$ 称为 $f$ 的利普希茨常数。
