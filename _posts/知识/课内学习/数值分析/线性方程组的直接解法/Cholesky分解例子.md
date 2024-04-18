解线性方程组 $$\left.\left\{\begin{array}{c}4\mathrm{x}_1+2\mathrm{x}_2+4\mathrm{x}_3=4\\2\mathrm{x}_1+10\mathrm{x}_2-\mathrm{x}_3=17\\4\mathrm{x}_1-\mathrm{x}_2+6\mathrm{x}_3=0\end{array}\right.\right.$$ 
系数矩阵 $$\mathbf{A}=\begin{bmatrix}4&2&4\\2&10&-1\\4&-1&6\end{bmatrix}$$ 
是对称正定矩阵, 故存在唯一的下三角矩阵 $L$ 使得 $A=LL^T$
我们只需要下三角部分: $$\begin{bmatrix}4\\2&10\\4&-1&6\end{bmatrix}$$
先计算 L 的列，由 $a_{11}=1_{11}^2$, 得 $\mathrm{l}_{11}=2$
 由 $a_{21}=l_{21}l_{11}=l_{21}\times 2=1$ 
 由 $\mathrm{a}_{31}=\mathrm{l}_{31}\mathrm{l}_{11}=\mathrm{l}_{31}\times2=4$, 得 $\mathrm{l}_{31}=2$
 再计算 L 的行，
 由 $\mathrm{a}_{22}=\mathrm{l}_{21}\mathrm{l}_{21}+\mathrm{l}_{22}\mathrm{l}_{22}=1+\mathrm{l}_{22}^2=10$, 得 $\mathrm{l}_{22}=3$
 由 $\mathrm{a}_{32}=\mathrm{l}_{31}\mathrm{l}_{21}+\mathrm{l}_{32}\mathrm{l}_{22}=2+\mathrm{l}_{32}\times3=-1$, 得 $\mathrm{l}_{32}=1$
于是
$$\mathbf{L}=\begin{bmatrix}2&&\\1&3&\\2&-1&1\end{bmatrix}$$
