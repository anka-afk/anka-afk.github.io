下面给出两个例子
# 例子 1
考虑 $2\times 2$ 的矩阵 $A$
$$
A = \begin{bmatrix}1&1\\3&-4\end{bmatrix}
$$
我们进行一般的高斯消元, 但是要把步骤记录下来,
我们知道矩阵的初等行变换等价于左乘一个可逆矩阵 (因为初等变换是可逆的)

我们把第 $2$ 行减去第 $1$ 行的 $3$ 倍, 得到:
$$\begin{bmatrix}1&1\\0&-7\end{bmatrix}=U$$
可以看到我们高斯消元法的结果就是一个上三角矩阵, 它就是 $U$

我们保留步骤中用到的乘数 $3$, 注意到, 我们定义的 $L$ 是一个下三角矩阵, 我们要把它找到
我们做初等变换的矩阵是
$$
L_1=\begin{bmatrix}1&0\\-3&1\end{bmatrix}
$$
容易发现这个事实:
$$
L_{1}A= U
$$
那么我们可以
$$
A = L_{1}^{-1}U
$$
那么 $L_{1}^{-1}$ 是不是下三角矩阵呢?
答案是, 是的
而且 $L_{1}^{-1}$ 恰好等于这个初等变换的逆变换, 是容易写出来的
例如, 如果做初等变换第二行减去第一行, 是表示成 $\begin{bmatrix}1&0\\-1&1\end{bmatrix}$ 的
反过来, 做初等变换第二行加上第一行, 是表示成 $\begin{bmatrix}1&0\\1&1\end{bmatrix}$ 的
所以, 如果把矩阵看成映射, 逆当然是反向操作
于是我们的 $L_{1}^{-1} = \begin{bmatrix}1&0\\3&1\end{bmatrix}$
这样就做了一次 $LU$ 分解, 把 $A$ 分解成了下三角矩阵 $L$ 乘上上三角矩阵 $U$
$$
A = \begin{bmatrix}1&1\\3&-4\end{bmatrix}= \begin{bmatrix}1&0\\3&1\end{bmatrix}\begin{bmatrix}1&1\\0&-7\end{bmatrix} = LU
$$

这引出了三个事实:
## 事实 1
>[!note] 初等变换对应左乘矩阵
令 $L_{ij}(-c)$ 表示下三角矩阵, 它的主对角线上的元素为 $1$
在 $(i,j)$ 位置上的元素为 $-c$,
$L_{ij}(-c)A$ 表示对 $A$ 进行初等行变换: 从第 $i$ 行中减去第 $j$ 行的 $c$ 倍

例如:
$$\begin{bmatrix}1&0&0\\-c&1&0\\0&0&1\end{bmatrix}\begin{bmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{bmatrix}=\begin{bmatrix}a_{11}&a_{12}&a_{13}\\a_{21}-ca_{11}&a_{22}-ca_{12}&a_{23}-ca_{13}\\a_{31}&a_{32}&a_{33}\end{bmatrix}$$

## 事实 2
$$L_{ij}\left(-c\right)^{-1}=L_{ij}\left(c\right)$$
这和我们上面陈述的一样, 第二行减去第一行这个操作的逆, 当然等于第二行加上第一行
例如:
$$\begin{bmatrix}1&0&0\\-c&1&0\\0&0&1\end{bmatrix}^{-1}=\begin{bmatrix}1&0&0\\c&1&0\\0&0&1\end{bmatrix}$$

## 事实 3
对于 $2\times 2$ 的矩阵, 我们当然可以只求一个矩阵 $L_{1}$ 的逆, 但是对于高阶的矩阵, 我们需要做很多次行变换, 才能把它化为上三角 (二阶只用一次)
对于高阶矩阵, 下面的事实成立:
$$\begin{bmatrix}1&&&\\c_1&1&&\\&&1\end{bmatrix}\begin{bmatrix}1&&&\\&1&&\\c_2&&1\end{bmatrix}\begin{bmatrix}1&&\\&1&\\&c_3&1\end{bmatrix}=\begin{bmatrix}1&&\\c_1&1&\\c_2&c_3&1\end{bmatrix}$$
- 这意味着我们可以把几个矩阵放到一个矩阵中

假设我们对一个矩阵做了三次初等行变换
$$\begin{bmatrix}1\\&1\\&\dfrac{7}{3}&1\end{bmatrix}\begin{bmatrix}1\\&1\\3&&1\end{bmatrix}\begin{bmatrix}1\\-2&1\\&&1\end{bmatrix}\begin{bmatrix}1&2&-1\\2&1&-2\\-3&1&1\end{bmatrix}=\begin{bmatrix}1&2&-1\\0&-3&0\\0&0&-2\end{bmatrix}=U$$
我们先根据事实 2 把左边的三个矩阵逆过去, 计算一下
$$A=\begin{bmatrix}1&&&\\2&1&&\\&&1\end{bmatrix}\begin{bmatrix}1&&&\\&1&&\\-3&&1\end{bmatrix}\begin{bmatrix}1&&&\\&1&&\\&&-\dfrac{7}{3}&1\end{bmatrix}\begin{bmatrix}1&&2&-1\\0&-3&&0\\0&&0&-2\end{bmatrix}$$
$$=\begin{bmatrix}1&&\\2&1&\\-3&-\dfrac{7}{3}&1\end{bmatrix}\begin{bmatrix}1&2&-1\\0&-3&0\\0&0&-2\end{bmatrix}=LU$$
这就是矩阵的 $LU$ 分解了

## 事实 4
由于我们做的初等行变换都是下面的行加上或者减去上面的行
这保证了我们的初等行变换的矩阵 $L_{i}$ 只有下三角区域有非零元素, 对角元一定为 $1$
而由事实 3, 我们知道很多个 $L_{i}^{-1}$ 的乘积还是单位下三角矩阵
这保证了我们的 $LU$ 分解的 $L$ 一定是单位下三角矩阵