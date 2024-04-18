---
所有者: Anka
上次编辑时间: 2023-06-24T12:24
---
定义 Dirichlet积分的定义

待补充

# ==_**定义 Dirichlet积分的定义**_==

> 我们从Fourier级数的部分和入手,先将Fourier系数的公式
> 
> $a_n = \frac{1}{\pi}\int_{-\pi}^{\pi}f(t)\cos{nt}\,\mathrm{d}t,\quad b_n = \frac{1}{\pi}\int_{-\pi}^{\pi}f(t)\sin{nx}\,\mathrm{d}t$
> 
> 代入
> 
> $S_m(x) = \frac{a_0}{2} + \sum_{n = 1}^{m}(a_n\cos{nx} + b_n\sin{nx})$
> 
> 得到
> 
> $\begin{aligned} & S_m(x)=\frac{1}{2\pi}\int_{-\pi}^{\pi}f(t)\,\mathrm{d}t \\ &+ \frac{1}{\pi}\sum_{n = 1}^{m}[(\int_{-\pi}^{\pi}f(t)\cos{nt}\,\mathrm{d}t)\cos{nx} + (\int_{-\pi}^{\pi}f(t)\sin{nt}\,\mathrm{d}t)\sin{nx}] \\ & = \frac{1}{\pi}\int_{-\pi}^{\pi}f(t)[\frac{1}{2}+\sum_{n = 1}^{m}(\cos{nt}\cos{nx} + \sin{nt}\sin{nx})]\,\mathrm{d}t \\ & = \frac{1}{\pi}\int_{-\pi}^{\pi}f(t)[\frac{1}{2}+\sum_{n = 1}^{m}\cos{n(t-x)}]\,\mathrm{d}t \end{aligned}$
> 
> 当$\theta \ne 0$﻿时,由三角形的积化和差公式,可得
> 
> $\frac{1}{2} + \sum_{n = 1}^{m}\cos{n\theta} = \frac{\sin{\frac{2m+1}{2}\theta}}{2\sin{\frac{\theta}{2}}}$
> 
> 而当$\theta = 0$﻿时,我们把右端理解为当$\theta \to 0$﻿时的极限,等式依然成立,
> 
> 于是上式在$\theta \in [-\pi,\pi]$﻿上都成立
> 
> 于是
> 
> $S_m(x) \begin{aligned}&= \frac{1}{\pi}\int_{-\pi}^{\pi}f(t)\frac{\sin{\frac{2m+1}{2}(t-x)}}{2\sin{\frac{t-x}{2}}}\,\mathrm{d}t \quad (作代换t-x=u) \\ & =\frac{1}{\pi}\int_{-\pi - x}^{\pi -x}f(x +u)\frac{\sin{\frac{2m+1}{2}u}}{2\sin{\frac{u}{2}}}\,\mathrm{d}u \\ & = \frac{1}{\pi}\int_{-\pi}^{\pi}f(x+u)\frac{\sin{\frac{2m+1}{2}u}}{2\sin{\frac{u}{2}}}\,\mathrm{d}u \end{aligned}$
> 
> 最后一个等式是因为周期函数在任意一个长度等于周期的区间上积分相等
> 
> 这样,我们把部分和公式化为了积分形式,我们称这个积分为$Dirichlet$﻿积分
> 
>