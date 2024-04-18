---
所有者: Anka
上次编辑时间: 2023-07-01T17:03
---
定义 三角级数的定义

定义 Fourier级数的定义

定义 Fourier级数的部分和的定义

定义 余弦级数的定义

定理 偶函数的Fourier级数为余弦级数

定义 正弦级数的定义

定理 奇函数的Fourier级数为正弦级数

待补充

# ==_**定义 三角级数的定义**_==

> 我们称形如
> 
> $\frac{a_0}{2} + \sum_{n = 1}^{\infty}(a_n \cos{nx} + b_n \sin{nx})$
> 
> 的函数项级数为**三角级数**,其中$a_0$﻿,$a_n$﻿和$b_n(n = 1 , 2, \cdots)$﻿为常数

---

待补充

---

# ==_**定义 Fourier级数的定义**_==

> 若$f(x)$﻿是一个周期为$T$﻿的周期函数，  
> 若成立  
> 
> $f(x) \sim \frac{a_0}{2} + \sum_{n = 1}^{\infty}(a_n \cos{\frac{2\pi}{T}nx} + b_n \sin{\frac{2\pi}{T}nx})$
> 
> 我们称右边部分为**$Fourier$**﻿**级数**
> 
> 并且有
> 
> $\begin{aligned}& a_0 = \int_{-\frac{T}{2}}^{\frac{T}{2}}f(x)\, \mathrm{d}x \\ & a_n = \frac{2}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}f(x) \cos{\frac{2 \pi}{T}nx}\, \mathrm{d}x \quad (n = 1,2,3,\cdots)\\ & b_n = \frac{2}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}f(x) \sin{\frac{2 \pi}{T}nx} \, \mathrm{d}x \quad (n = 1,2,3,\cdots)\end{aligned}$
> 
> 我们称$a_n$﻿和$b_n$﻿为**$Fourier$**﻿**系数**

---

待补充

---

# ==_**定义 Fourier级数的部分和的定义**_==

> 类似其他级数,我们给出$Fourier$﻿级数的部分和的定义
> 
> 我们定义$Fourier$﻿级数的部分和为:
> 
> $S_m(x) = \frac{a_0}{2}+\sum_{n = 1}^{m}(a_n\cos{nx} + b_n\sin{nx})$

---

# ==_**定义 余弦级数的定义**_==

> 如果有
> 
> $f(x) \sim \sum_{n = 1}^{\infty}b_n\cos{nx}$
> 
> 我们称形如$\sum_{n = 1}^{\infty}b_n\cos{nx}$﻿的三角级数为正弦级数

---

# ==_**定理 偶函数的Fourier级数为余弦级数**_==

> 如果函数$f(x)$﻿是偶函数,那么有
> 
> $f(x) \sim \sum_{n = 1}^{\infty}b_n\cos{nx}$
> 
> 其中
> 
> $b_n = \frac{2}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}f(x) \cos{\frac{2 \pi}{T}nx} \, \mathrm{d}x \quad (n = 1,2,3,\cdots)$
> 
> 即它的$Fourier$﻿级数是余弦级数

- 证明待补充

---

# ==_**定义 正弦级数的定义**_==

> 如果有
> 
> $f(x) \sim \sum_{n = 1}^{\infty}b_n\sin{nx}$
> 
> 我们称形如$\sum_{n = 1}^{\infty}b_n\sin{nx}$﻿的三角级数为正弦级数

---

# ==_**定理 奇函数的Fourier级数为正弦级数**_==

> 如果函数$f(x)$﻿是奇函数,那么有
> 
> $f(x) \sim \sum_{n = 1}^{\infty}b_n \sin{nx}$
> 
> 其中
> 
> $b_n = \frac{2}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}f(x) \sin{\frac{2 \pi}{T}nx} \, \mathrm{d}x \quad (n = 1,2,3,\cdots)$
> 
> 即它的$Fourier$﻿级数是正弦级数

- 证明待补充

---