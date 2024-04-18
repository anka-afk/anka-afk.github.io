直接看这个例子:
$$A=\begin{bmatrix}2&&1&&5\\[0.3em]4&&4&&-4\\[0.3em]1&&3&&1\end{bmatrix}$$
根据部分主元, 第 1 行和第 2 行需要进行交换:
记录下 $P$ 
$$P=\begin{bmatrix}0&1&0\\1&0&0\\0&0&1\end{bmatrix}$$ $$\begin{bmatrix}2&1&5\\4&4&-4\\1&3&1\end{bmatrix}\to\text{交换第1行和第2行}\to\begin{bmatrix}4&4&-4\\2&1&5\\1&3&1\end{bmatrix}$$
第 2 行减去第 1 行的 $\frac{1}{2}$ 倍
第 3行减去第 1行的 $\frac{1}{4}$ 倍
得到:
$$\begin{bmatrix}4&4&-4\\\\0&-1&7\\\\0&2&2\end{bmatrix}$$
接下来继续换行:
$$P=\begin{bmatrix}0&1&0\\0&0&1\\1&0&0\end{bmatrix}\to\text{交换第2行和第3行}\to\begin{bmatrix}4&4&-4\\0&2&2\\0&-1&7\end{bmatrix}$$
第 3 行减去第 2 行的 $-\frac{1}{2}$ 倍, 就结束了
得到
$$\begin{bmatrix}0&1&0\\0&0&1\\1&0&0\end{bmatrix}\begin{bmatrix}2&1&5\\4&4&-4\\1&3&1\end{bmatrix}=\begin{bmatrix}1&0&0\\\\\dfrac{1}{4}&1&0\\\\\dfrac{1}{2}&-\dfrac{1}{2}&1\end{bmatrix}\begin{bmatrix}4&4&-4\\\\0&2&2\\\\0&0&8\end{bmatrix}$$
即 $$
PA=LU
$$
