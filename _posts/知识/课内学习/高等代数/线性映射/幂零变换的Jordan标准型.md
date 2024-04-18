---
所有者: Anka
上次编辑时间: 2023-04-20T22:03
---
设$\underline A$﻿是$\mathbb F$﻿上$n$﻿维线性空间$V$﻿上的一个线性变换，设$\underline A$﻿的最小多项式$m(\lambda) $﻿在$\mathbb F[\lambda]$﻿中可以分解为

$m(\lambda) = (\lambda - \lambda_1)^{l_1} \cdots (\lambda - \lambda_s)^{\lambda_s}$

其中$\lambda_1, \dots, \lambda_s$﻿是域$\mathbb F$﻿中两两不等的元素

$V = \mathrm{Ker}(\underline A-\lambda_1 \underline I)^{l_1} \oplus \cdots \oplus \mathrm{Ker}(\underline A-\lambda_s \underline I)^{l_s}$

设$W_j = \mathrm{Ker}(\underline A-\lambda_j \underline I)^{l_j}$﻿，分别取$W_j, j= 1, \dots, s$﻿的一个基，合起来得到$V$﻿上的一个基，$\underline A$﻿在这个基下的矩阵是分块对角矩阵。现在分别寻找$W_j$﻿上的基使得$\underline A | W_j$﻿在这个基下的矩阵最简单。

求$\underline A | W_j$﻿的最小多项式$m_j(\lambda)$﻿。任给$\alpha_j \in W_j = \mathrm{Ker}(\underline A-\lambda_j \underline I)^{l_j}$﻿，所以$(\underline A|W_j-\lambda_j \underline I)^{l_j} \alpha_j = (\underline A-\lambda_j \underline I)^{l_j} \alpha_j = 0$﻿。于是

$(\underline A|W_j-\lambda_j \underline I)^{l_j} = \underline 0$

从而$(\lambda- \lambda_j)^{l_j}$﻿是$\underline A | W_j$﻿的一个零化多项式，因此$\underline A | W_j$﻿的最小多项式$m_j(\lambda) = (\lambda - \lambda_j)^{t_j}$﻿，其中$t_j \le l_j, j = 1, \dots, s$﻿，所以：

$m(\lambda) = [(\lambda-\lambda_j)^{t_1} , \dots, (\lambda-\lambda_s)^{t_s}]$

根据唯一因式分解定理可以得到$t_j = l_j, j = 1, \dots, s$﻿。

所以$\underline A | W_j$﻿的最小多项式$m_j(\lambda ) = (\lambda - \lambda_j)^{l_j}$﻿。

设$\underline A | W_j$﻿在$W_j$﻿的一个基下的矩阵为$A_j$﻿，令$\underline B_j = \underline A|W_j-\lambda_j \underline I$﻿，则$\underline B_j^{l_j} = (\underline A|W_j-\lambda_j \underline I)^{l_j} = \underline 0$﻿，而且由于$m_j(\lambda ) = (\lambda - \lambda_j)^{l_j}$﻿是$\underline A | W_j$﻿的最小多项式，所以$B_j$﻿是$W_j$﻿上的幂零变换，其幂零指数为$l_j$﻿。

由于$\underline A | W_j$﻿在$W_j$﻿的一个基下的矩阵为$A_j$﻿，所以$B_j$﻿在上述基下的矩阵为$B_j = A_j - \lambda_j I$﻿，那么只需要找到一个使得$B_j$﻿最简单的基，那么就可以使得$A_j$﻿最简单。

  

设$\underline B$﻿是域$\mathbb F$﻿上的$r$﻿为线性空间$W$﻿上的一个幂零变换，其幂零指数为$l$﻿，则$\underline B^l = \underline 0$﻿且$\underline B^{l-1} \not = \underline 0$﻿，于是存在$\xi \in W$﻿且$\xi \not = 0$﻿使得$\underline B^{l-1} \xi \not = 0, \underline B^l = 0$﻿，

$k_0 \xi + k_1 \underline B \xi+ \cdots + k_{l-2}\underline B^{l-2} \xi + k_{l-1}\underline B^{l-1} \xi = 0$

两边同时乘上$\underline B^{l-1}$﻿可以推出$k_0 = 0$﻿

两边同时乘上$\underline B^{l-2}$﻿可以推出$k_1 = 0$﻿

以此类推可以得到所有系数为$0$﻿，因此$\underline B^{l-1} \xi, \underline B^{l-2} \xi, \dots, \underline B \xi, \xi$﻿是线性无关的。从而$l \le \dim W = r$﻿。

向量组$\underline B^{l-1} \xi, \underline B^{l-2} \xi, \dots, \underline B \xi, \xi$﻿生成的空间$\langle \underline B^{l-1} \xi, \underline B^{l-2} \xi, \dots, \underline B \xi, \xi \rangle$﻿是$\underline B$﻿的不变子空间，$\underline B$﻿在这个子空间上的限制在基$\underline B^{l-1} \xi, \underline B^{l-2} \xi, \dots, \underline B \xi, \xi$﻿下的矩阵为：

$J_l(0) = \begin{pmatrix}$

定义：

> 域$\mathbb F$﻿上的$t$﻿阶矩阵$J_t(a)$﻿：
> 
> $J_t(\lambda) = \begin{pmatrix}\lambda &1&0&\cdots &0\\0&\lambda &1&\cdots &0\\\vdots &\vdots &\ddots &\vdots &\vdots \\0&0&0&\lambda &1\\0&0&0&0&\lambda \\\end{pmatrix}$
> 
> 称为主对角元为$\lambda$﻿的一个$t$﻿阶Jordan块

定义：

> 由若干个Jordan块组成的分块对角矩阵称为是一个Jordan型矩阵

定义：

> 设$\underline A$﻿是$\mathbb F$﻿上$n$﻿维线性空间$V$﻿上的一个线性变换，如果$\alpha \in V$﻿使得$\alpha , \underline A \alpha, \dots, \underline A^{t-1} \alpha$﻿线性无关，且$\underline A^r \alpha \in \langle \alpha, \underline A \alpha , \dots, \underline A^{t-1} \alpha \rangle$﻿，那么称$\langle \alpha, \underline A \alpha , \dots, \underline A^{t-1} \alpha \rangle$﻿是一个$\underline A$﻿循环子空间；若$\underline A^t \alpha = 0$﻿，那么称$\langle \alpha, \underline A \alpha , \dots, \underline A^{t-1} \alpha \rangle$﻿是一个$\underline A$﻿强循环子空间

  

命题：

> 设$\underline B$﻿是域$\mathbb F$﻿上的$r$﻿为线性空间$W$﻿上的一个幂零变换，其幂零指数为$l$﻿，那么$\langle \underline B^{l-1} \xi, \underline B^{l-2} \xi, \dots, \underline B \xi, \xi \rangle$﻿是一个$\underline B$﻿循环子空间。且在基$\underline B^{l-1} \xi, \underline B^{l-2} \xi, \dots, \underline B \xi, \xi$﻿下的矩阵是一个Jordan块$J_l(0) $﻿

  

> 设$\underline B$﻿是域$\mathbb F$﻿上的$r$﻿维线性空间$W$﻿上的一个幂零变换，其幂零指数为$l$﻿，则$W$﻿分解为$\dim W_0$﻿个强循环子空间的直和，其中$W_0$﻿是$\underline B$﻿的属于特征值$0$﻿的特征子空间。
> 
> - 证明
>     
>     对线性空间的维数$r$﻿做第二数学归纳法。
>     
>     - 当$r = 1$﻿时，$W = \langle \alpha \rangle $﻿，此时$l =1 $﻿，于是$\underline B ^1 = \underline 0$﻿，$\underline 0 \alpha = 0 \in W$﻿，因此$\langle \alpha \rangle$﻿是$\underline 0$﻿强循环子空间
>     - 假设对于维数小于$r$﻿的线性空间，命题成立
>     - 现在对于$r$﻿维线性空间$W$﻿上的幂零变换$\underline B$﻿，其幂零指数维$l$﻿，
>         - 若$l = 1$﻿，则$\underline B^1 = \underline 0$﻿，$W$﻿中取一个基$\alpha_1, \dots, \alpha_n$﻿，则$W = \langle \alpha_1 \rangle \oplus \cdots\oplus \langle \alpha_n \rangle $﻿，由于$\underline 0 \alpha_j = 0$﻿，因此$\langle \alpha_j \rangle $﻿是$\underline 0$﻿强循环子空间，所以$W$﻿分解为$n$﻿个强循环子空间的直和
>         - 若$l >1$﻿，此时$\underline B \not = \underline 0$﻿，幂零变换$\underline B$﻿有特征值$0$﻿，于是$\underline B$﻿的属于特征值$0$﻿的特征子空间$W_0 $﻿不是零子空间，由于$\underline B \not = 0$﻿且$W_0$﻿对应的特征值为$0$﻿，所以有$W_0 \not = W$﻿。注意到商空间的维数小于$r$﻿：
>             
>             $1 \le \dim W/ W_0 = \dim W - \dim W_0 < \dim W = r$
>             
>             下面构造商空间上的幂零变换，并证明其是原空间上的幂零变化。
>             
>             构造映射：
>             
>             $\begin{aligned}$
>             
>             下面证明映射成立。若有$\beta + W_0 = \alpha + W_0$﻿，那么$\alpha - \beta \in W_0$﻿，由于$W_0$﻿对应的特征值为$0$﻿，所以$\underline B (\alpha - \beta) \in W_0$﻿，所以$\underline B \alpha - \underline B \beta \in W_0$﻿，从而可以推出$\underline B\beta + W_0 = \underline B \alpha + W_0$﻿，因此$\underline {\tilde B}$﻿是$W/W_0$﻿上的一个变换。易验证其保持加法和纯量乘法，从而$\underline{\tilde B}$﻿是$W/W_0$﻿上的一个线性变换。
>             
>             $\forall \alpha + W_0 \in W/W_0$﻿，有$\underline{\tilde B}^l (\alpha + W_0) = \underline{B}^l \alpha + W_0 = \underline 0 \alpha + W_0 = W_0$﻿，因此$\underline{\tilde B}$﻿是$W/W_0$﻿上的幂零变换。
>             
>             由于商空间$W/W_0$﻿得维数小于$r$﻿，所以可以对$W/W_0$﻿用归纳假设（即分解为$n$﻿个强循环子空间的直和），得：
>             
>             $W/ W_0 = \langle \underline{\tilde B}^{t_1-1}(\xi_1+ W_0), \dots, (\xi_1+ W_0) \rangle \oplus \cdots \oplus \langle \underline{\tilde B}^{t_s-1}(\xi_s+W_0), \dots, (\xi_s+W_0) \rangle$
>             
>             其中$\langle \underline{\tilde B}^{t_i-1}(\xi_i+W_0), \dots, (\xi_i+W_0) \rangle$﻿都是$\underline{\tilde B}$﻿强循环子空间（也就是有$\underline{\tilde B}^{t_i}(\xi_i+W_0) = W_0$﻿）。根据映射$\underline{\tilde B}$﻿的定义，以及直和，可以得到商空间的一个基为：
>             
>             $\underline B^{t_1 -1}\xi_1 + W_0, \dots, \xi_1+W_0, \dots, \underline B^{t_s-1}\xi_s + W_0, \dots, \xi_s + W_0$
>             
>             取商空间中陪集的代表，令：
>             
>             $\begin{aligned}$
>             
>             根据商空间的定理，可以知道：
>             
>             $W = U \oplus W_0$
>             
>             我们想找到的是$W$﻿分解成$\underline B$﻿强循环子空间，所以希望$U$﻿和$W_0$﻿处理成强循环子空间的直和。
>             
>             利用前面从归纳假设中得到的$\underline{\tilde B}^{t_i}(\xi_i+W_0) = W_0$﻿，可以知道：
>             
>             $\underline B^{t_i}\xi_i + W_0 = \underline{\tilde B}^{t_i}(\xi_i + W_0) = W_0$
>             
>             所以$\underline B^{t_i}\xi_i \in W_0$﻿。又由于$W_0$﻿是$\underline B$﻿的属于特征值$0$﻿的特征子空间，所以：
>             
>             $\underline B^{t_i+1}\xi_i = \underline B(\underline B^{t_i} \xi_i) = 0(\underline B^{t_i} \xi_i) = 0$
>             
>             因此我们可以注意到，在$ \langle$﻿中加上$\underline B^{t_i}\xi_i$﻿，它就可以成为一个$\underline B$﻿强循环子空间。而这个$\underline B^{t_i}\xi_i$﻿是来自于$W_0$﻿的，所以考虑，这些$\underline B^{t_i}\xi_i, i=1,\dots, s$﻿在$W_0$﻿中的线性无关性，令：
>             
>             $k_1 \underline B^{t_1} \xi_1 + \cdots + k_s \underline B^{t_s} \xi_s = 0$
>             
>             即：
>             
>             $\underline B (k_1 \underline B^{t_1-1} \xi_1 + \cdots + k_s \underline B^{t_s-1} \xi_s ) = 0$
>             
>             从而：$k_1 \underline B^{t_1-1} \xi_1 + \cdots + k_s \underline B^{t_s-1} \xi_s \in W_0$﻿，把它作为陪集$W_0$﻿（此时是从商空间的角度看$W_0$﻿）的代表，于是根据陪集的运算可以得到：
>             
>             $W_0 = (k_1 \underline B^{t_1-1} \xi_1 + \cdots + k_s \underline B^{t_s-1} \xi_s )+ W_0 = $
>             
>             注意到，$ \underline B^{t_1-1} \xi_1+ W_0 , \dots ,\underline B^{t_s-1} \xi_s + W_0$﻿都在前面提到的商空间$W/W_0$﻿的基中，所以必有：$k_1 = \cdots = k_s = 0$﻿，从而就验证了这些$\underline B^{t_i}\xi_i, i=1,\dots, s$﻿在$W_0$﻿中线性无关。将它们扩展成$W_0$﻿中的一个基：
>             
>             $\underline B^{t_1} \xi_1, \dots, \underline B^{t_s} \xi_s, \eta_1, \dots, \eta_q$
>             
>             于是：
>             
>             $\begin{aligned}$
>             
>             前面已经提到了，在$ \langle$﻿中加上$\underline B^{t_i}\xi_i$﻿，它就可以成为一个$\underline B$﻿强循环子空间$ \langle \underline B^{t_i}\xi_i,$﻿。而对于$\langle \eta_j \rangle$﻿，由于$\eta_j \in W_0$﻿，所以$\underline B \eta_j =0 \eta_j = 0$﻿，所以$\langle \eta_j \rangle$﻿是$\underline B$﻿强循环子空间。
>             
>             由于$\underline B^{t_1} \xi_1, \dots, \underline B^{t_s} \xi_s, \eta_1, \dots, \eta_q \in W_0$﻿且线性无关，$\underline B^{t_i}\xi_i,$﻿第一个属于$W_0$﻿剩下的属于$U$﻿且线性无关，所以$\underline B^{t_i}\xi_i,$﻿线性无关。因此以上都线性无关，因此和为直和：
>             
>             $$
>             
>             因此，$r$﻿维线性空间$W$﻿也可以分解成若干个$\underline B$﻿强循环子空间的直和，上述分解式中$\underline B$﻿强循环子空间的个数为$q + s$﻿，由于$W_0$﻿的基$\underline B^{t_1} \xi_1, \dots, \underline B^{t_s} \xi_s, \eta_1, \dots, \eta_q$﻿的个数为$q+s$﻿，所以：
>             
>             $q + s = \dim W_0$
>             
>             根据第二数学归纳法原理，命题为真。
>             

  

定理：

> 设$\underline B$﻿是域$\mathbb F$﻿上$r$﻿维线性空间$W$﻿上的幂零变换，其幂零指数为$l$﻿，则在$W$﻿中有一个基使得$\underline B$﻿在此基下的矩阵$B$﻿是一个Jordan形矩阵，且Jordan块的个数为$\dim W_0 = \dim \mathrm{Ker} (\underline B - 0\underline I) = \dim \mathrm{Ker} \underline B = r - \mathrm{rank}\underline B$﻿。其中每一个Jordan块的主对角元为$0$﻿，且其级数$t \le l$﻿。
> 
> $t$﻿级Jordan块的个数$N(t)$﻿为$\mathrm{rank}\underline B^{t-1} + \mathrm{rank}\underline B^{t+1} -2 \mathrm{rank}\underline B^t$﻿
> 
> 这个Jordan形矩阵称为是$\underline B$﻿的一个Jordan标准形。$\underline B$﻿的Jordan标准形除了排列顺序以外是唯一的。
> 
> - 证明
>     
>     这里证明$t$﻿级Jordan块的个数$N(t)$﻿。$t$﻿级Jordan块$J_t(0)$﻿为
>     
>     $J_t(0) = \begin{pmatrix}$
>     
>     所以：
>     
>     $\mathrm{rank}J_t(0)=t-1 $
>     
>     对于一个分块对角矩阵，若每一个块都是一个Jordan块。注意到：
>     
>     $\mathrm{rank}B^0 = B\text{的行数} = $
>     
>     $\mathrm{rank} B = \mathrm{rank} B_1 + \cdots + \mathrm{rank} B_m =$
>     
>     $\mathrm{rank} B^2 = N(3)\cdot 1 + \cdots + N(l)\cdot(l-2)$
>     
>     所以：
>     
>     $\mathrm{rank}B^0 - \mathrm{rank}B = N(1) + N(2) + \cdots + N(l)$
>     
>     $\mathrm{rank}B - \mathrm{rank}B^2 = N(2) + \cdots + N(l)$
>     
>     所以
>     
>     $N(1) = (\mathrm{rank}B^0 -\mathrm{rank}B) -(\mathrm{rank}B - \mathrm{rank}B^2 )$
>     
>     类似的可以得到：当$2 \le t < l$﻿时，
>     
>     $N(t) = \mathrm{rank}B^{t-1} + \mathrm{rank}B^{t+1} -2 \mathrm{rank}B^t$
>     
>     当$t = l$﻿时，$\mathrm{rank}B^{t-1} = N(l)[l-(l-1)] = N(l)$﻿，$\mathrm{rank}B^t = \mathrm{rank}B^{t+1} = 0$﻿，所以也有：
>     
>     $N(t) = \mathrm{rank}B^{t-1} + \mathrm{rank}B^{t+1} -2 \mathrm{rank}B^t = \mathrm{rank}\underline B^{t-1} + \mathrm{rank}\underline B^{t+1} -2 \mathrm{rank}\underline B^t$
>     

  

推论：

> 设矩阵$B$﻿是域$\mathbb F$﻿上的$r$﻿阶幂零矩阵，其幂零矩阵，所以$B$﻿相似于一个Jordan形矩阵，且Jordan块的个数为$\dim W_0 = \dim \mathrm{Ker} (\underline B - 0\underline I) = \dim \mathrm{Ker} \underline B = r - \mathrm{rank}\underline B$﻿。其中每一个Jordan块的主对角元为$0$﻿，且其级数$t \le l$﻿。
> 
> $t$﻿级Jordan块的个数$N(t)$﻿为$ \mathrm{rank}B^{t-1} + \mathrm{rank}B^{t+1} -2 \mathrm{rank}B^t$﻿
> 
> 这个Jordan形矩阵称为是$ B$﻿的一个Jordan标准形，除了排列顺序以外是唯一的。