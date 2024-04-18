#定义 
也称高斯-赛德尔迭代法
观察 $Jacobi$ 迭代法, 我们发现, 在求 $\color{red}{x^{(k+1)}}\text{ }$ 的分量时,
当求到第 $i$ 个分量: $\color{red}{x_i^{(k+1)}}$ 时, 我们已经求到了 $x_{1}^{(k+1)},x_{2}^{(k+1)}\cdots x_{i-1}^{(k+1)}$
我们知道, $x_{1}^{(k+1)},x_{2}^{(k+1)}\cdots x_{i-1}^{(k+1)}$ 理论上是比 $x_{1}^{(k)},x_{2}^{(k)}\cdots x_{i-1}^{(k)}$ 要接近<font color="#ff0000">真值</font>的,
我们不禁想到, 如果用 $x_{1}^{(k+1)},x_{2}^{(k+1)}\cdots x_{i-1}^{(k+1)}$ 代替 $x_{1}^{(k)},x_{2}^{(k)}\cdots x_{i-1}^{(k)}$
会不会使得迭代法收敛更快呢?
(毕竟使用了更加接近真值的信息)
- 如果将 Jacobi 迭代法得到的解立刻投入到下一次运算中, 我们得到**高斯-赛德尔迭代法**


	基于上面的想法, 我们对 $Jacobi$ 方法进行改造得到
$\begin{cases}\mathrm{~x}_1^{(k+1)}=\frac1{a_{11}}(-a_{12}\mathrm{x}_2^{(k)}-a_{13}\mathrm{x}_3^{(k)}-a_{14}\mathrm{x}_4^{(k)}-\cdots-a_{1n}\mathrm{x}_n^{(k)}+b_1)\\\\\mathrm{~x}_2^{(k+1)}=\frac1{a_{22}}(-a_{21}\mathrm{x}_1^{(k+1)}-a_{23}\mathrm{x}_3^{(k)}-a_{24}\mathrm{x}_4^{(k)}-\cdots-a_{2n}\mathrm{x}_n^{(k)}+b_2)\\\\\mathrm{~x}_3^{(k+1)}=\frac1{a_{33}}(-a_{31}\mathrm{x}_1^{(k+1)}-a_{32}\mathrm{x}_2^{(k+1)}-a_{34}\mathrm{x}_4^{(k)}-\cdots-a_{3n}\mathrm{x}_n^{(k)}+b_3)\\\\\cdots&\cdots&\cdots\\\\\mathrm{~x}_n^{(k+1)}=\frac1{a_m}\left(-a_{n1}\mathrm{x}_1^{(k+1)}-a_{n2}\mathrm{x}_2^{(k+1)}-a_{n2}\mathrm{x}_3^{(k+1)}-\cdots-a_{m-1}\mathrm{x}_{n-1}^{(k+1)}+b_n\right)&\end{cases}$
$x_i^{(k)}=\frac{1}{a_{ii}}\left[-\sum_{j=1}^{i-1}(a_{ij}x_j^{(k)})-\sum_{j=i+1}^{n}(a_{ij}x_j^{(k-1)})+b_i\right],$

- 看起来确实很丑, 但是推导是容易的
我们来看比较好看的矩阵形式:
> $\begin{aligned}&x^{(k+1)} = -D^{-1}(Lx^{(k+1)} +Ux^{(k)}) + D^{-1}b \\ &\Rightarrow x^{(k=1)}= -(D+L)^{-1}Ux^{(k)}+(D+L)^{-1}b\end{aligned}$
- 推导是很直观的, $x_{i}^{(k+1)}$ 的系数都是矩阵 $A$ 的下三角部分
  而 $x_{i}^{(k)}$ 的系数都是矩阵的上三角部分

# 特点
#性质
- 这个迭代法的想法是, $x^{(k+1)}$﻿是比 $x^{(k)}$﻿更加接近精确解 $x^*$﻿的, 我们就直接利用当前算出的一些 $x^{(k+1)}$﻿的分量计算其他分量, 例如算 $x^{(k+1)}_2$﻿时, 我们已经算出 $x^{(k+1)}_1$﻿了, 我们可以用这个代替 $x^{k}_1$﻿来计算 $x^{(k+1)}_2$﻿, 因为 $x_1^{(k+1)}$﻿更加接近精确解的第一个分量.
- 因为我们是根据当前步骤已经算出的分量算其他的分量, 所以这个方法的解的分量 $x_i$﻿**有先后之分**
- 一般来说这个方法比 Jacobi 迭代法**收敛更快**

# 例子
#例子 
$\begin{cases}10x_1-2x_2-x_3=3\\-2x_1+10x_2-x_3=15\\-x_1-2x_2+5x_3=10&\end{cases}$
经过高斯-赛德尔迭代法得到的迭代公式:
$$\begin{aligned}
\left|x_1^{(k+1)}\right.&=\frac 1{10}(2{x_2}^{(k)}+{x_3}^{(k)}+3) \\
\left|x_2^{(k+1)}\right.&=\frac 1{10}(2{x_1}^{(k+1)}+{x_3}^{(k)}+15) \\
\left|x_3^{(k+1)}\right.& =\frac 15 ({x_1}^{(k+1)}+2{x_2}^{(k+1)}+10) 
\end{aligned}$$

# 代码
$\varepsilon$ 为精度要求，$k$ 记录迭代次数，$N$ 为允许的最大迭代次数，二维数组 $\{a_{ij}\}_{i,j=1}^{n+1}$ 存放 $A,b$. 一维数组 $\{x_i\}_{i=1}^n$ 开始存放初值，迭代过程存放迭代值。
1. $\color{red}{k=0}$ 
2. 对 $\color{red}{i=1,2\cdots n}$, 置初值 $x_i=0$
3. $\color{red}{k=k+1}$
4. 若 $\color{red}{k>N}$, 则输出当前迭代值 $x_{i}$ 和 $k$, 停机
5. $\quad P_0=0$
6. 对 $\color{red}{i=1,2\cdots n}$ 
   $P\leftarrow\Delta x_i=(a_{i,n+1}-\sum_{j=1}^{n}\alpha_{ij}x_j)/\alpha_{ii}^{}$ 
   若 $|P_0|<|P|$, 则 $P_0=P$
   $\color{red}{x_i=x_i+P}$
7. 如果 $\color{red}{|P_0|<\varepsilon}$, 则进入步骤 8，否则转入步骤3
8. 输出近似解 $\quad\text{}\color{red}{x_i(i=1,2\cdots n)}$ 和 $k$
