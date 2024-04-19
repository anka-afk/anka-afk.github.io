---
title: jacobi迭代法
excerpt: 一种迭代方法
toc: true
author: anka
date: 2024.4.18
---
#定义 
> 把系数矩阵写为 $A=D+L+U$﻿的形式
> 
> 其中 $D$﻿为 $A$﻿的主对角线组成的**对角矩阵**
> 
> $L$﻿为 $A$﻿的严格下三角部分组合的**严格下三角矩阵**(不含对角线)
> 
> $U$﻿为 $A$﻿的严格上三角部分组合的**严格上三角矩阵**(不含对角线)
> 
> 我们把迭代表达式写为:
> 
> $x^{(k+1)} = -D^{-1}(L+U)x^{(k)} + D^{-1}b$
> 
> 我们称这种迭代方法为**Jacobi 迭代法**
> 
# 怎么构造 Jacobi 迭代公式
由方程组 $AX = b$ 的第 i 个方程解出 $X_i\left (i=1,2,\cdots, n\right)$ 得到一个同解方程组

$\begin{cases}x_1=\dfrac{1}{a_{11}}(-a_{12}x_2-a_{13}x_3-\cdots-a_{1n}x_n+b_1)\\[2ex]x_2=\dfrac{1}{a_2}(-a_{21}x_1-a_{23}x_3-\cdots-a_{2n}x_n+b_2)\\[2ex]......\\x_n=\dfrac{1}{a_{n1}}(-a_{n1}x_1-a_{n2}x_2-\cdots-a_{n,n-1}x_{n-1}+b_n)\end{cases}$

我们修改一下右边的 $x_{i}$, 得到迭代公式:

$\begin{cases}x_{1}^{(k+1)}=\frac{1}{a_{11}}(-a_{12}x_{2}^{(k)}-a_{13}x_{3}^{(k)}-\cdots-a_{1n}x_{n}^{(k)}+b_{1})\\\\x_{2}^{(k+1)}=\frac{1}{a_{22}}\big(-a_{21}x_{1}^{(k)}-a_{23}x_{3}^{(k)}-\cdots-a_{2n}x_{n}^{(k)}+b_{2}\big)\\\cdots\cdots\\x_{n}^{(k+1)}=\frac{1}{a_{nm}}\big(-a_{n1}x_{1}^{(k)}-a_{n2}x_{2}^{(k)}-\cdots-a_{n,n-1}x_{n-1}^{(k)}+b_{n}\big)\end{cases}$

我们有了迭代公式, 总得有一个起点吧
#符号 
我们找一个初始向量: $X^{(0)}=(x_1^{(0)},x_2^{(0)},\cdots,x_n^{(0)})^T$

<font color="#ff0000">上面的公式就称为</font> $Jacobi$ <font color="#ff0000">迭代公式</font>

## 矩阵形式
#符号 
我们引入三个记号:

我们用 $D$ 记矩阵 $A$ 的对角线部分:

$D=\begin{bmatrix}a_{11}&&&\\&a_{22}&&\\&&\ddots&\\&&&a_{nn}\end{bmatrix}$
我们用 $L$ 记矩阵 $A_{}$ 的下三角部分<font color="#ff0000">(不包括对角线) </font>:
$L=\begin{bmatrix}\mathbf{0}\\a_{21}&\mathbf{0}\\\cdots&\cdots\\a_{n1}&a_{n2}&\cdots&\mathbf{0}\end{bmatrix}$
我们用 $U_{}$ 记矩阵 $A$ 的上三角部分 <font color="#ff0000">(不包括对角线)</font> :
$U=\begin{bmatrix}0&a_{12}&\cdots&a_{1n}\\&0&\cdots&a_{2n}\\&&&\vdots\\&&&\mathbf{0}\end{bmatrix}$

则有 $A{=}D{+}L{+}U$ 成立，矩阵形式为

$$
{Dx=-(L+U)x+b}
$$
等式两边乘以 $D^{-1}$, 得

$x=-D^{-1}(L+U)$ $x+D^{-1}b$

#定义
于是我们得到迭代公式:
$x^{(k+1)}=-D^{-1}{(L+U)}x^{(k)}+D^{-1}b$

如果不用矩阵形式, 还可以表示为:
> 
> $\begin{aligned}x^{(0)} = (x_1^{(0)},x_2^{(0)},\cdots,x_n^{(0)})^T \\ x_i^{(k+1)} = (b_i-\sum_{j=1,j\ne i }^na_ijx_j^{(k)})/a_{ii} \\ i=1,2,\cdots,n \quad k = 0,1,2,\cdots \quad k表示迭代次数\end{aligned}$
> 
# 特点
#性质
- $\text{迭代矩阵 }B_J=-D^{-1}(L+U)$
- 每迭代一次主要是计算一次矩阵乘向量 $B_Jx^{(k)}$ 所以计算量为 $n^2$ 数量级。
- 计算过程中涉及到的中间变量 $x^{(k)}$ 及 $x^{(k+1)}$,需要两组工作单元 $x_{n}$, $y_{n}$来存储}
- $\text{计算过程中,初始数据A始终不变;}$
- 解的分量 $ｘ_i$﻿没有先后之分, 适合并行运算
- 公式简单, 迭代矩阵容易求到
- 也称<font color="#ff0000">同事替换法</font>(相较于后面的方法)
# 迭代终止条件
$\text{若迭代矩阵}\mathsf{B}\text{满足}\|B\|<1\text{则}$
$\left\|X^*-X^{(k)}\right\|\leq\frac{\left\|B\right\|}{1-\left\|B\right\|}\left\|X^{(k)}-X^{(k-1)}\right\|$
- 这个公式给出了误差的估计, 也就是迭代点和真值的差距可以用两个相邻迭代点的差距约束
于是我们有一个停止迭代的条件 (终止条件)
$$\left\|X^{(k-1)}- X^{(k-1)}\right\|<\varepsilon $$

# 例子
#例子 
$\begin{cases}10x_1-2x_2-x_3=3\\-2x_1+10x_2-x_3=15\\-x_1-2x_2+5x_3=10&\end{cases}$
求 $Jacobi$ 迭代公式
就是第 $i$ 行把其他元素都移到右边, 左边剩 $x_{i}$, 然后把左边的变成 $x_{i}^{(k+1)}$, 右边的变成 $x_{i}^{(k)}$
得到

$$\begin{gathered}
x_{1}^{(k+1)}=\frac{1}{10}(2{x_2}^{(k)}+{x_3}^{(k)}+3) \\
x_{2}^{(k+1)}=\frac1{10}(2{x_1}^{(k)}+{x_3}^{(k)}+15) \\
x_{3}^{(k+1)}=\frac15{(x_1^{(k)}+2x_2^{(k)}+10)} 
\end{gathered}$$

# 代码
#代码
```MATLAB
function y=jacobi(A,b,x,M)
D = diag(diag(A));
U = -triu(A,1)
L = -tril(A,-1);
B = D\(L+U)
f= D\b;
y = B*x+f ; n=1:
while norm(y-x)>=1.0e-6&n<M
x= y
y=B*x+f;
n=n+1;
end
```

