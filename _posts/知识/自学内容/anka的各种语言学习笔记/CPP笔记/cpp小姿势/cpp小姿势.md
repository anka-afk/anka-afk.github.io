二维数组中数组名也是指针,但是指向一个数组,是**数组指针**

和一维数组的指针的变量类型不同

  

给大家一个运算符优先级的口诀：  
括号成员第一； // （）和 .  
全体单目第二； // ++ -- +(正） -（负） * &  
乘除余三 // * / %  
加减四 // + -  
位移五 // >> <<  
关系六 // > < >= <=  
等于不等排第七 // == ！=  
位与异或和位或三分天下 *** 十 //& ^ | 逻辑或跟与十二和十一 // || &&  
条件高于赋值  
逗号运算符最低  

  

全体一元，条件，赋值右结合，其他左结合

  

自增自减只能操作变量,不能操作常量和表达式

  

条件优先级低于<<所以在cout中应该加括号

  

```MATLAB
c = a++++b错误(不能(a++)++b)
a<=b<=c错误
应该用a<=b&&a<=c
```

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled.png|Untitled.png]]

逗号表达式输出最后面的值

按顺序连续计算东西

  

不能cin>>a+b

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 1.png|Untitled 1.png]]

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 2.png|Untitled 2.png]]

switch中case记得加break

  

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 3.png|Untitled 3.png]]

const int & x

和

const int *const x

效果一样,但后者是指针参数

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 4.png|Untitled 4.png]]

"非约束的引用参数对应的实参必须是对象名" 这句话的意思是，如果函数的形参是非常量引用类型，并且没有其他限制条件（比如模板参数），则在调用函数时，只能将一个具体的对象作为实参传递给这个引用参数，而不能传递表达式、字面值或临时对象。

以下是一个简单的例子来说明这个概念：

```C++
\#include <iostream>

void printNumber(int& num) {
    std::cout << num << std::endl;
}

int main() {
    int num = 42;
    printNumber(num);  // 正确，将对象名num作为实参传递给非约束的引用参数

    // 下面的调用是错误的，因为非约束的引用参数不能绑定到表达式、字面值或临时对象
    // printNumber(42);
    // printNumber(num + 1);
    // printNumber(getNumber());

    return 0;
}
```

兄弟们，为什么赋值运算符=只能在成员函数重载但是+=可以在友元函数重载

![[571cc089d37dcfdb.jpg]]

大概就是因为友元没有默认指向左值的this指针，然后会导致左值出现不能为左值的东西，所以这样规定只能在成员函数重载？

而+=可以保证左值为该类类型

  

const & xxx这种常引用作为函数参数传入就相当于传入一个一样的东西,连地址都一样,不会创建副本

  

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 5.png|Untitled 5.png]]

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 6.png|Untitled 6.png]]

这里val+5是一个**匿名对象**,地址和val不同

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 7.png|Untitled 7.png]]

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 8.png|Untitled 8.png]]

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 9.png|Untitled 9.png]]

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 10.png|Untitled 10.png]]

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 11.png|Untitled 11.png]]

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 12.png|Untitled 12.png]]

返回地址在一个函数的栈空间的参数下面,先于参数入栈

  

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 13.png|Untitled 13.png]]

递归条件\基线条件

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 14.png|Untitled 14.png]]

这里函数参数用引用是为了追踪动态数组的地址,防止删不到

  

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 15.png|Untitled 15.png]]

这种不会帮你加结束标志\0

  

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 16.png|Untitled 16.png]]

这个东西实际上是

```C++
strcpy_s(s,"program")
```

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 17.png|Untitled 17.png]]

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 18.png|Untitled 18.png]]

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 19.png|Untitled 19.png]]

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 20.png|Untitled 20.png]]

![[知识/自学内容/anka的各种语言学习笔记/CPP笔记/cpp小姿势/pictures/Untitled 21.png|Untitled 21.png]]

**一定记得先声明函数原型再用**

**!运算符优先级很高,仅在括号之下**

**字符数组的指针也可以当数组名用**

类模板里面的成员函数都是模板函数

类模板的成员可以不是模板