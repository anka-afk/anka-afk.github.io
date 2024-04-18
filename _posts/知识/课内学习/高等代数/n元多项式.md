---
所有者: Anka
上次编辑时间: 2023-06-08T10:51
---
n元多项式的概念和性质

二次型和它的标准形

实二次型的规范形

正定实二次型

设$f$﻿是域$\mathbb F$﻿上的$n$﻿维线性空间$V$﻿上的一个对称双线性函数，$f$﻿在$V$﻿的一个基$\alpha_1, \dots, \alpha_n$﻿下的度量矩阵为$A$﻿，$\alpha = (\alpha_1, \dots, \alpha_n) X , \beta = (\alpha_1, \dots, \alpha_n) Y$﻿，则

$f(\alpha, \beta) = X^T A Y = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i y_j$

从而，定义

$q(\alpha) := f(\alpha, \alpha) = X^T A X = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j$

称$q$﻿是$V$﻿上的一个二次函数

# n元多项式的概念和性质

定义：

> 设$\mathbb F$﻿是一个域，$x_1, \dots, x_n$﻿是$n$﻿个符号，形如下述的表达式：
> 
> $\sum_{i_1, \dots, i_n} a_{i_1 i_2 \dots i_n} x_1^{i_1} x_2^{i_2} \cdots x_n^{i_n}$
> 
> 其中$i_1, \dots, i_n \in \N$﻿，$a_{i_1 i_2 \dots i_n} \in \mathbb F$﻿称为系数，且只有有限多个系数不为$0$﻿，如果满足：
> 
> 两个这种形式的表达式相等当且仅当它们含有完全相同的项（系数为$0$﻿的项除外）
> 
> 那么称这种表达式是域$\mathbb F$﻿上的一个$n$﻿元多项式，此时$x_1, \dots, x_n$﻿是$n$﻿个无关不定元。

次数全为$0$﻿的多项式为零多项式

定义

> 定义下面的集合：
> 
> $\mathbb F [x_1, \dots, x_n] := \{ \mathbb F \text{上的所有}n \text{元多项式} \}$
> 
> 易验证$\mathbb F[x_1, \dots, x_n]$﻿称为一个有单位元$1$﻿的交换环
> 
> 称它为域$\mathbb F$﻿上的$n$﻿元多项式环

  

定义

> 若$f(x_1,\dots, x_n)$﻿的每个系数不为$0$﻿的单项式的次数都等于$m$﻿，则称$f(x_1, \dots, x_n)$﻿是一个$m$﻿次齐次多项式

零多项式$0$﻿是$m$﻿次齐次多项式，$\forall m \in \N$﻿

  

集合

$\{ \mathbb F \text{上的所有}n \text{元} m \text{次多项式} \}$

是域$\mathbb F$﻿上的一个线性空间

  

$n$﻿元多项式环的通用性质：

> 设$\mathbb F$﻿是一个域，$R$﻿是一个有单位元的交换环，且域$\mathbb F$﻿到$R$﻿的一个子环$R_1$﻿（含有$R$﻿的单位元）有一个同构映射，任给$t_1, \dots, t_n \in R$﻿，令
> 
> $\begin{aligned}$
> 
> 则$\sigma_{t_1, \dots, t_n}$﻿是$\mathbb F[x_1, \dots, x_n]$﻿到$R$﻿的一个映射，使得
> 
> $\sigma_{t_1, \dots, t_n}(x_i) = t_i , i =1, \dots, n$
> 
> 并且，$\sigma_{t_1, \dots, t_n}$﻿保持加法和乘法运算
> 
> 把映射$\sigma_{t_1, \dots, t_n}$﻿称为是$x_1, \dots, x_n$﻿分别用环$R$﻿中的元素$t_1, \dots, t_n$﻿代入

  

# 二次型和它的标准形

定义

> 域$\mathbb F$﻿上$n$﻿元二次齐次多项式：
> 
> $f(x_1, \dots, x_n) = X^T A Y = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i y_j$
> 
> 其中$a_{ij} = a_{ji}, 1 \le i, j \le n$﻿，即矩阵$A$﻿是对称矩阵
> 
> 称为域$\mathbb F$﻿上的一个$n$﻿元==二次型==。

其中的对称矩阵$A$﻿称为是二次型$X^T A X $﻿的矩阵

二次型$f(x_1, \dots, x_n)$﻿的矩阵是唯一的，即：若$X^T A X = X^TBX$﻿，则$A = B$﻿（要求两个矩阵都是对称矩阵）

  

下面寻找二次型的最简形式

$f(x_1, \dots, x_n) = X^T A Y $

$x_1, \dots, x_n$﻿分别用$c_{11} x_1 + \cdots + c_{1n} x_n, \dots, c_{n1} x_1 + \cdots + c_{nn} x_n$﻿代入，得到

$\begin{aligned}$

由于矩阵$(C^T A C )^T = C^T A^T (C^T)^T = C^T A C$﻿，所以$C^T A C$﻿是对称矩阵，所以

$g(x_1,\dots, x_n ) = f(c_{11} x_1 + \cdots + c_{1n} x_n, \dots, c_{n1} x_1 + \cdots + c_{nn} x_n)= X^T (C^T A C) X$

是一个$n$﻿元二次型，它的矩阵是$C^T A C$﻿

  

定义

$x_1, \dots, x_n$﻿分别用$c_{11} x_1 + \cdots + c_{1n} x_n, \dots, c_{n1} x_1 + \cdots + c_{nn} x_n$﻿代入，简称为$X$﻿用$C X$﻿代入，其中

$C = \begin{pmatrix}$

如果$C$﻿是可逆矩阵，则称$X$﻿用$CX$﻿代入是一个==非退化的线性替换==，习惯上记作$X = CY$﻿，其中$Y = (y_1 , \dots, y_n)^T$﻿

  

定义

> 域$\mathbb F$﻿上的两个$n$﻿元二次型$X^T A X$﻿和$X^T B X$﻿，如果存在一个非退化线性替换：$X$﻿用$CX$﻿代入，使得$X^TA X$﻿变成$X^T B X$﻿，那么称$X^TA X$﻿与$X^T B X$﻿是==等价==的，记作$X^TA X \cong X^T B X$﻿

  

等价是$\{ \mathbb F \text{上的}n \text{元二次型} \}$﻿上的一个二元关系，易验证，它具有反身性、对称性、传递性，从而$n$﻿元二次型的等价是上述集合上的一个等价关系。

探索：$X^T AX$﻿的等价类中找一个具有最简单形式的二次型

  

命题

> 域$\mathbb F$﻿上$n$﻿元二次型$X^T AX \cong X^T B X$﻿当且仅当$A \cong B$﻿

定理：

> 特征不为$2$﻿的域$\mathbb F$﻿上的$n$﻿元二次型$X^T A X$﻿一定等价于一个只含有平方项的二次型$d_1 x_1^2 + \cdots + d_n x_n^2$﻿，称为是$X^T A X$﻿的一个==标准形==，并且$X^T A X$﻿的任一标准形中，系数不为$0$﻿的平方项的个数等于$\mathrm{rank} A$﻿，称为==二次型的秩==。
> 
> - 证明
>     
>     由于特征不为$2$﻿的域$\mathbb F$﻿上的任一$n$﻿阶对称矩阵，一定合同于一个对角矩阵，从而
>     
>     $X^T A X \cong X^T $
>     
>     其中系数不为$0$﻿的平方项的个数等于对角矩阵的秩，进而等于$\mathrm{rank} A$﻿
>     

定理：

> 实数域上的$n$﻿元二次型$X^T AX$﻿有标准形$ \lambda_1 x_1^2 + \cdots + \lambda_n \lambda_n^2 $﻿，其中$\lambda_1, \dots, \lambda_n$﻿是$A$﻿的全部特征值。
> 
> - 证明
>     
>     由于$A$﻿是实数域上的对称矩阵，因此存在一个正交矩阵$T$﻿使得
>     
>     $T^{-1} A T = \begin{pmatrix}$
>     
>     其中$\lambda_1, \dots, \lambda_n$﻿是$A$﻿的全部特征值。由于正交矩阵$T$﻿的逆矩阵$T^{-1} = T^T$﻿，因此
>     
>     $T^T A T = $
>     
>     因此，
>     
>     $X^T A X \cong X^T \begin{pmatrix}$
>     

$X$﻿用$TX$﻿代入（其中$T$﻿是正交矩阵）称为一个正交替换

一般地，用配方法去求$X^T A X$﻿的一个标准形

  

# 实二次型的规范形

$n$﻿元实二次型$X^T A X$﻿，设$\mathrm{rank}A =r$﻿，做非退化的线性替换

$X^T A X \cong d_1x_1^2 + \cdots + d_px_p^2 - d_{p+1} x_{p+1}^2 - \cdots - d_r x_r^2$

其中$d_i > 0, i= 1,\dots, p,p+1 , \dots, r$﻿，将$x_i$﻿用$\frac{1}{\sqrt{d_i}} x_i$﻿代入，则

$X^T A X \cong x_1^2 + \cdots + x_p^2 - x_{p+1}^2 - \cdots - x_r^2$

将上面这种标准形称之为==规范形==，系数只有$+1 , -1 , 0$﻿。

  

惯性定理

> $n$﻿元实二次型$X^T AX$﻿的规范形是唯一的
> 
> - 证明
>     
>     假设有两种，则
>     
>     $X^T A X \cong x_1^2 + \cdots + x_p^2 - x_{p+1}^2 - \cdots - x_r^2 \\$
>     
>     则需要去证明$p = q$﻿。
>     
>     由于传递性，所以二者对应的对角矩阵$D_1$﻿和$D_2$﻿是合同的。于是$D_1$﻿和$D_2$﻿可以看作$n$﻿维实线性空间$V$﻿上同一个对称线性函数$f$﻿在$V$﻿的基$\alpha_1, \dots, \alpha_n$﻿和基$\beta_1, \dots, \beta_n$﻿下的度量矩阵，令
>     
>     $V_1= \langle \alpha_1, \dots, \alpha_p \rangle, V_2 = \langle \beta_{q+1} , \dots, \beta_n \rangle$
>     
>     任取$\alpha \in V_1 \cap V_2$﻿，于是
>     
>     $\alpha = \sum_{i=1}^p a_i \alpha_i = \sum_{j=q+1}^n b_j \beta_j $
>     
>     所以
>     
>     $f(\alpha, \alpha) = a_1^2 + \cdots + a_p^2 \\$
>     
>     从而
>     
>     $a_1^2 + \cdots + a_p^2 + b_{q+1}^2 + \cdots + b_r^2 = 0$
>     
>     所以
>     
>     $a_1 = \cdots = a_p = b_{q+1} = \cdots = b_r = 0$
>     
>     从而$\alpha = 0$﻿，于是$V_1 \cap V_2 = 0$﻿，所以
>     
>     $\dim V_1 + \dim V_2 = \dim(V_1 + V_2) \le \dim V$
>     
>     即
>     
>     $p +(n-q) \le n$
>     
>     所以
>     
>     $p \le q$
>     
>     类似可以证明$q\le p$﻿，所以$p = q$﻿
>     

  

定义

> $n$﻿元实二次型$X^T A X$﻿的规范形中系数为$+1$﻿的平方项的个数$p$﻿称为$X^T AX$﻿的正惯性指数，系数为$-1$﻿的平方项的个数$r- p$﻿称为$X^T AX$﻿的负惯性指数，它们的差$2p -r$﻿称为$X^T AX$﻿的符号差。

  

命题

> $n$﻿元实二次型$X^T A X$﻿的任一标准形中系数大于$0$﻿的平方项的个数等于$X^T AX$﻿的正惯性指数，系数小于$0$﻿的平方项的个数等于$X^T AX$﻿的负惯性指数

  

定理

> 两个$n$﻿元实二次型$X^T A X \cong X^T B X$﻿
> 
> 当且仅当它们有相同的规范形
> 
> 当且仅当它们有相等的秩和相等的正惯性指数

  

定理

> 两个$n$﻿阶实对称矩阵$A$﻿与$B$﻿合同，当且仅当它们有相等的秩和相同的正惯性指数（即$A$﻿的合同规范形中主对角线上$+1$﻿的个数）

这表明，秩，正惯性指数是$\{ n \text{级实对称矩阵} \}$﻿在合同关系下的一组完全不变量。

  

# 正定实二次型

定义

> $n$﻿元实二次型$X^T A X$﻿如果$\forall \alpha \in \mathbb R^n, \alpha \not = 0$﻿，都有$\alpha^T A \alpha>0$﻿，那么称$X^T A X$﻿是一个==正定二次型==。

定理

> $n$﻿元实二次型$X^T A X$﻿，则下列命题等价：
> 
> 1. $X^T A X$﻿是正定二次型
> 2. $X^T A X$﻿的规范形为$x_1^2 + \cdots + x_n^2$﻿
> 3. $X^T A X$﻿的正惯性指数为$n$﻿
> 4. $X^T A X$﻿的任一标准形中平方项的系数全部大于$0$﻿
> 
> - 证明
>     
>     由1证2
>     
>     $X^T A X \cong X^T (C^TAC) X = x_1^2 + \cdots + x_p^2 - x_{p+1}^2 - \cdots - x_r^2$
>     
>     假如$p < n$﻿，则$x_n^2$﻿的系数为$-1$﻿或者$0$﻿。取$\alpha = C \varepsilon_n$﻿，则
>     
>     $\alpha^T A \alpha = \varepsilon_n^T(C^T A C) \varepsilon_n = -1 \ \mathrm{or} \ 0$
>     
>     这与$\alpha^T A \alpha>0$﻿矛盾，所以$p = n$﻿。
>     
>     由2证3、由3证4、由4证1易证明。
>     

  

$n$﻿级实对称矩阵是正定矩阵当且仅当$\forall \alpha \in \mathbb R^n , \alpha \not = 0$﻿，都有$\alpha^T A \alpha > 0$﻿，当且仅当$n$﻿元实二次型$X^T A X$﻿是正定的。

因此根据二次型的定理，可以得到如下关于实对称矩阵的定理

> $n$﻿级实对称矩阵$A$﻿是对称是正定矩阵
> 
> 当且仅当：$A \cong I $﻿
> 
> 当且仅当：$A$﻿的任何一个合同标准形中主对角元全部大于$0$﻿
> 
> 当且仅当：$A$﻿的特征值全部大于$0$﻿（因为有一个标准形的主对角线全是特征值）

  

$A$﻿正定等价于

$A \cong \begin{pmatrix}$

从这个对角矩阵可以推出

$\begin{vmatrix}$

这些行列式称为是顺序主子式。各阶顺序主子式大于$0$﻿也可以推出对角矩阵中各个主对角元大于$0$﻿。

定理：

> $n$﻿级实对称矩阵$A$﻿是正定矩阵当且仅当$A$﻿的所有顺序主子式全大于$0$﻿

推论：

> $n$﻿元实二次型$X^T AX$﻿是正定的当且仅当$A$﻿的所有顺序主子式全大于$0$﻿

  

定义

> $n$﻿元实二次型$X^T AX$﻿
> 
> 如果$\forall \alpha \in \mathbb R^n, \alpha \not = 0$﻿，都有$\alpha^T A \alpha \ge 0$﻿，那么称实二次型$X^T AX$﻿是半正定的；
> 
> 如果$\forall \alpha \in \mathbb R^n, \alpha \not = 0$﻿，都有$\alpha^T A \alpha < 0$﻿，那么称实二次型$X^T AX$﻿是负的；
> 
> 如果$\forall \alpha \in \mathbb R^n, \alpha \not = 0$﻿，都有$\alpha^T A \alpha \le 0$﻿，那么称实二次型$X^T AX$﻿是半负定的；
> 
> 如果$X^T A X$﻿既不是半正定的也不是半负定的，那么称$X^T AX$﻿是不定的。