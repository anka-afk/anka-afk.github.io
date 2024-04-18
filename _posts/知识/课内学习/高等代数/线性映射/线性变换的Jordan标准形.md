---
所有者: Anka
上次编辑时间: 2023-04-21T11:01
---
定理：

> 设$\underline A$﻿是域$\mathbb F$﻿上$n$﻿维线性空间$V$﻿上的一个线性变换，如果$\underline A$﻿的最小多项式$m(\lambda)$﻿在$\mathbb F[\lambda]$﻿中的标准分解式为：
> 
> $m(\lambda) = (\lambda-\lambda_1)^{l_1} \cdots (\lambda-\lambda_s)^{l_s}$
> 
> 则$V$﻿中有一个基使得$\underline A$﻿在此基下的矩阵$A$﻿为Jordan形矩阵，其主对角线上是$\underline A$﻿的全部特征值，主对角元为$\lambda_j$﻿的Jordan块的总数$N_j = \dim V - \mathrm{rank} (\underline A - \lambda_j \underline I)$﻿，主对角元为$\lambda_j$﻿的$t$﻿级Jordan块的个数$N_j(t) = \mathrm{rank}(\underline A - \lambda_j \underline I)^{t+1} + \mathrm{rank}(\underline A - \lambda_j \underline I)^{t-1} - 2\mathrm{rank}(\underline A - \lambda_j \underline I)^{t}$﻿。
> 
> 矩阵$A$﻿称为$\underline A$﻿的Jordan标准形，除去Jordan块的排列顺序外是唯一的。
> 
> - 证明
>     
>     根据最小多项式的分解式知$\lambda_1, \dots, \lambda_s$﻿是线性变换$\underline A$﻿的所有不同的特征值，且
>     
>     $0 = (\underline A - \lambda_1 \underline I)^{l_1} \cdots (\underline A - \lambda_s \underline I)^{l_s} $
>     
>     从而
>     
>     $V = \mathrm{Ker} 0 = \mathrm{Ker} (\underline A - \lambda_1 \underline I)^{l_1} \oplus \cdots \oplus \mathrm{Ker} (\underline A - \lambda_s \underline I)^{l_s} = W_1 \oplus \cdots \oplus W_s$
>     
>     令$\underline B_j = \underline A_j |W_j - \lambda_j \underline I$﻿，那么$\underline B_j$﻿是$W_j$﻿上的幂零变换，其幂零指数为$l_j$﻿。应用幂零变换中的结论，可以在$W_j$﻿中去一个基，使得$\underline B_j$﻿在此基下的矩阵为一个Jordan形矩阵
>     
>     设$\underline A | W_j$﻿在$W_j$﻿的这个基下的矩阵为$A_j$﻿，则$A_j = \lambda_j I + B_j = J_{l_j}(\lambda_j)$﻿，于是$A_j$﻿是主对角元为$\lambda_j$﻿的Jordan形矩阵。因此$\underline A$﻿在$W_1$﻿的一个基，……，在$W_s$﻿中的一个基合起来所成的$V$﻿的一个基下的矩阵$A$﻿是一个Jordan形矩阵。
>     
>     主对角元为$\lambda_j$﻿的Jordan块的总数$ N_j = \dim (\mathrm{Ker}\underline B_j) = \dim (\mathrm{Ker} (\underline A |W_j - \lambda_j \underline I))$﻿。
>     
>     有如下的引理：
>     
>     > $\forall m \in \N^*$﻿，有$\mathrm{Ker} (\underline A |W_j - \lambda_j \underline I)^m = \mathrm{Ker} (\underline A - \lambda_j \underline I)^m$﻿ ，其中$W_j = \mathrm{Ker} (\underline A - \lambda_j \underline I)^{l_j}$﻿
>     > 
>     > - 证明
>     >     
>     >     若$\alpha \in \mathrm{Ker} (\underline A |W_j - \lambda_j \underline I)^m$﻿，则等价于$\alpha \in W_j$﻿且$ (\underline A |W_j - \lambda_j \underline I)^m \alpha = 0$﻿，又等价于$\alpha \in W_j$﻿且$ (\underline A - \lambda_j \underline I)^m \alpha = 0$﻿。据此可以推出$\alpha \in \mathrm{Ker} (\underline A - \lambda_j \underline I)^m$﻿。下面证明从$\alpha \in \mathrm{Ker} (\underline A - \lambda_j \underline I)^m$﻿可以推出$\alpha \in W_j$﻿。
>     >     
>     >     - 当$m \le l_j$﻿时，$\alpha \in \mathrm{Ker} (\underline A - \lambda_j \underline I)^m$﻿可以推出$ (\underline A - \lambda_j \underline I)^m \alpha = 0$﻿，又由于$m \le l_j$﻿，所以$ (\underline A - \lambda_j \underline I)^{l_j} \alpha = 0$﻿，所以$\alpha \in \mathrm{Ker} (\underline A - \lambda_j \underline I)^{l_j} = W_j$﻿
>     >     - 当$m > l_j$﻿时，令
>     >         
>     >         $g(\lambda) = (\lambda-\lambda_1)^{l_1} \cdots (\lambda-\lambda_j)^{m} \cdots (\lambda-\lambda_s)^{l_s}$
>     >         
>     >         显然$m(\lambda) | g(\lambda)$﻿，从而$g(\lambda)$﻿也是$\underline A$﻿的一个零化多项式，于是
>     >         
>     >         $V = \mathrm{Ker} (\underline A - \lambda_1 \underline I)^{l_1} \oplus$
>     >         
>     >         另外$W_j = \mathrm{Ker} (\underline A - \lambda_j \underline I)^{l_j} \subset \mathrm{Ker} (\underline A - \lambda_j \underline I)^{m}$﻿。在$W_j$﻿取去一个基$\alpha_{j1} , \dots, \alpha_{jr_j}$﻿，把它扩充成$\mathrm{Ker} (\underline A - \lambda_j \underline I)^{m}$﻿的一个基$\alpha_{j1} , \dots, \alpha_{jr_j}, \eta_1, \dots, \eta_q$﻿。$W_1, \dots, \mathrm{Ker} (\underline A - \lambda_j \underline I)^{m}, \dots, W_s$﻿的基合起来是$V$﻿的一个基；又由于$W_1$﻿的一个基，……，$W_s$﻿中的一个基合起来成为$V$﻿的一个基，所以$W_j$﻿的基$\alpha_{j1} , \dots, \alpha_{jr_j}$﻿就是$\mathrm{Ker} (\underline A - \lambda_j \underline I)^{m}$﻿的一个基，于是$W_j = \mathrm{Ker} (\underline A - \lambda_j \underline I)^{m}$﻿。从而由$\alpha \in \mathrm{Ker} (\underline A - \lambda_j \underline I)^{m}$﻿可以推出$\alpha \in W_j$﻿。
>     >         
>     >     
>     >     所以$\mathrm{Ker} (\underline A |W_j - \lambda \underline I)^m = \mathrm{Ker} (\underline A - \lambda_j \underline I)^m$﻿
>     >     
>     
>     所以主对角元为$\lambda_j$﻿的Jordan块的总数$ N_j = \dim (\mathrm{Ker}\underline B_j) = \dim (\mathrm{Ker} (\underline A |W_j - \lambda_j \underline I)) = \dim (\mathrm{Ker} (\underline A - \lambda_j \underline I)) = \dim V - \mathrm{rank} (\underline A - \lambda_j \underline I)$﻿。
>     
>     主对角元为$\lambda_j$﻿的$t$﻿级Jordan块的个数
>     
>     $\begin{aligned}$
>     

  

推论：

> 域$\mathbb F$﻿上$n$﻿阶矩阵$A$﻿，如果它的最小多项式$m(\lambda)$﻿在$\mathbb F [x]$﻿中能分解成一次因式的乘积，那么$A$﻿相似于一个Jordan形矩阵，它的主对角线上的元素是$A$﻿的全部特征值，主对角元为$\lambda_j$﻿的Jordan块的总数$N_j = \dim V - \mathrm{rank} (A - \lambda_j \underline I)$﻿，主对角元为$\lambda_j$﻿的$t$﻿级Jordan块的个数$N_j(t) = \mathrm{rank}(A - \lambda_j I)^{t+1} + \mathrm{rank}(A - \lambda_j I)^{t-1} - 2\mathrm{rank}(A - \lambda_j I)^{t}$﻿。
> 
> 矩阵$A$﻿称为$\underline A$﻿的Jordan标准形，除去Jordan块的排列顺序外是唯一的。

  

推论：

> 设$\underline A$﻿是域$\mathbb F$﻿上$n$﻿维线性空间$V$﻿上的线性变换，则$\underline A$﻿有Jordan标准形当且仅当$\underline A$﻿的最小多项式$m(\lambda)$﻿在$\mathbb F[\lambda]$﻿中可以分解成一次因式的乘积。
> 
> - 证明
>     
>     充分性根据前面的定理是显然的，下面证明必要性。
>     
>     $\underline A$﻿有Jordan标准形：
>     
>     $J = \begin{pmatrix}$
>     
>     其中Jordan块$J_{t_j}(\lambda_j)$﻿的最小多项式为$(\lambda - \lambda_j)^{t_j}$﻿，从而$\underline A$﻿的最小多项式为所有Jordan块的最小多项式的公倍式，即可以分解成一次因式的乘积。
>     

  

推论：

> 设$\underline A$﻿是域$\mathbb F$﻿上$n$﻿维线性空间$V$﻿上的线性变换，则$\underline A$﻿有Jordan标准形当且仅当$\underline A$﻿的特征多项式$f(\lambda)$﻿在$\mathbb F[\lambda]$﻿中可以分解成一次因式的乘积。

推论：

> 域$\mathbb F$﻿上的$n$﻿阶矩阵$A$﻿相似于一个Jordan形矩阵当且仅当$A$﻿的特征多项式$f(\lambda)$﻿或者最小多项式$m(\lambda)$﻿在$\mathbb F[\lambda]$﻿中能够分解成一次因式的乘积。

  

利用Jordan标准形，可以得到两个矩阵相似的充要条件

> 设$A, B \in M_n(\mathbb F)$﻿，如果它们的最小多项式或者特征多项式在$\mathbb F[\lambda]$﻿中可以分解成一次多项式的乘积，那么$A \sim B$﻿当且仅当$A$﻿与$B$﻿有相同的Jordan标准形（除去Jordan块的排列顺序外）
> 
> - 证明
>     
>     根据条件有$A \sim J_1, B \sim J_2$﻿，于是
>     
>     $A \sim B $﻿当且仅当$J_1 \sim J_2$﻿
>     
>     当且仅当$J_1$﻿与$J_2$﻿可以看成域$\mathbb F$﻿上$n$﻿维线性空间$V$﻿上同一个线性变换$\underline A$﻿在不同基下的矩阵
>     
>     当且仅当$J_1$﻿与$J_2$﻿都是$\underline A$﻿的Jordan标准形
>     
>     当且仅当$J_1$﻿与$J_2$﻿除去Jordan块的排列顺序外是相同的
>     

  

推论：

> 两个$n$﻿阶复矩阵相似当且仅当他们有相同的Jordan标准形（除去Jordan块的排列顺序外）

  

  

- 特征向量在若当块的末尾