#证明 
当 $n=1$ 时, 定理显然成立, 此时右侧的 $N$ 为空矩阵
#数学归纳法
假设定理对于所有 $n-1$ 阶以及阶数小于 $n-1$ 的矩阵成立
我们考虑阶数为 $n$ 的矩阵:
如果: $Ax=\mu x,x\neq0$
那么由[[解耦的构造]], 我们知道存在一个酉矩阵 $U$ 使得 $U^HAU$ 是<font color="#ff0000">分块上三角</font>矩阵:
$$U^HAU=\begin{pmatrix}\mu&w^H\\0&C\end{pmatrix}$$
其中 $C$ 是 $n-1$ 阶的方阵, 
而左上角的 $\mu$ 是 $A$ 的一个特征值
由归纳假设我们可以知道存在一个酉矩阵 $\overline{U}$ 使得  $\overline{U}^HC\overline{U}$ 也是<font color="#ff0000">分块上三角</font>矩阵
于是我们构造 $Q = Udiag(1,\overline{U})$, 就能使得 $Q^{H}AQ$ 为分块上三角矩阵