```Rust
fn main() {

    println!("Hello, world!");

  

    // 不可变变量

    let mut x = 5;

    println!("x的值是:{}",x);

    x = 6;

    println!("x的值是:{}",x);

  

    // 常量也是不可变的,但是不可约使用mut,永远都不可变

    // 声明常量必须使用const

    // 声明常量必须标注类型

    // 常量可以在任何作用域声明,包括全局作用域

    // 常量只能被设置为常量表达式,不能是函数调用的结果,或任何其他只能在运行时计算得到的值

    // 常量在运行期间总是存在的,并且它们在任何作用域中都可以被访问

    // 常量使用全大写字母和下划线命名,并且下划线可以用来增加可读性

    // 数字中间可以插入下划线来增加可读性

    const MAX_POINTS:u32 = 100_000;

  

    // 隐藏变量

    // 可以用同样的名字声明一个新变量,而新变量会隐藏之前的变量

    let x = 5;

    println!("x的值是:{}",x);

    let x = x + 1;

    println!("x的值是:{}",x);

    // 虽然x是不可变的,但是可以用let关键字来声明一个新变量,这样就可以隐藏之前的变量

    // 相当于override

    let x = x * 2;

    println!("x的值是:{}",x);

  

    // shadow和把变量标记为mut是不一样的

    // 用let声明的新变量也是不可变的

    // 使用let声明的同名新变量的类型可以和之前的不一样

    let spaces = "    ";

    let spaces = spaces.len();

    // 这里把spaces的类型从字符串变成了数字,但是名字还是spaces,其实是一个新的变量,同名隐藏掉原来的变量

    // 如果这里不加let,会报错,因为变量是不可变的

  

    println!("spaces的值是:{}",spaces);

  
  

    // 数据类型

    // Rust是静态类型语言,必须在编译时知道所有变量的类型

    // 如果可能的类型比较多,例如parse方法,就必须添加类型的标注

    let guess:u32 = "43".parse().expect("不是个数!");

    // 如果不标注是u32类型,会报错

  

    println!("guess的值是:{}",guess);

  

    // 标量类型

    // 标量类型代表单个的值

    // rust一共有四个主要的标量类型:整数,浮点数,布尔类型,字符类型

    // 整数类型

    // 有符号整数:i8,i16,i32,i64,i128,isize

    // 无符号整数:u8,u16,u32,u64,u128,usize

    // isize和usize类型依赖运行程序的计算机架构:64位计算机上是64位,32位计算机上是32位

    // 默认是i32类型

    // 除了byte类型,其他类型都可以用类型后缀来标注,例如123u32

  

    // 整数溢出

    // Rust在编译时会检查是否有整数溢出,如果有,会报错

    // debug模式下会panic,release模式下会wrap,例如256u8会变成0,257u8会变成1

    // 例如:let x:u8 = 256;会报错

  

    // 浮点数类型

    // rust有两种浮点数类型:f32和f64

    // 默认是f64类型

    let x = 2.0;

    let y:f32 = 3.0;

  

    // 数值操作

    // 加法

    let sum = 5 + 10;

    let difference = 95.5 - 4.3;

    let producy = 4 * 30;

    let quotient = 56.7 / 32.2;

    let reminder = 54 % 5;

  

    // 布尔类型

    // rust有两个布尔值:true和false

    // 布尔类型的大小是1个字节

    // 布尔类型的值是bool类型

    let t = true;

    let f:bool = false;

  

    // 字符类型

    // Rust的char类型是单个Unicode字符,可以表示比ASCII更多的字符,例如中文,日文,韩文等,甚至是emoji表情

    // Rust的char类型是4个字节

    // Rust的char类型用单引号表示

    // Unicode中没有字符的概念,只有代码点,代码点是一个数字,代表一个字符

    let x = 'z';

    let y:char = '😻';

    let z = '中';

    println!("x的值是:{}",x);

    println!("y的值是:{}",y);

    println!("z的值是:{}",z);

  

    // 复合类型

    // Rust有两个复合类型:元组和数组

    // 元组可以将多个不同类型的值组合在一起

    // 数组可以将多个相同类型的值组合在一起

  

    // 元组tuple

    // 元组是一个将多个其他类型的值组合在一起的复合类型

    // 元组的长度是固定的,一旦声明,就不能增加或减少

    let tup:(i32,f64,u8) = (500,6.4,1);

    // 获取tuple的值

    // 可以使用模式匹配来解构一个tuple来获取元素的值

    let (x,y,z) = tup;

    println!("x的值是:{}",x);

    println!("y的值是:{}",y);

    println!("z的值是:{}",z);

  

    // 访问tuple的元素

    // 使用点号和索引来访问tuple的元素

    println!("{},{},{}",tup.0,tup.1,tup.2);

    // 数组

    // 数组是一个将多个相同类型的值组合在一起的复合类型

    // 数组的长度是固定的,一旦声明,就不能增加或减少

    // 数组的类型标注是[Type;size],例如:[i32;5]

    // 数组的元素可以通过索引访问,索引从0开始

    let a = [1,2,3,4,5];

    let b:[char;5] = ['a','b','c','d','e'];

    // 如果想把数据存在stack(栈)上而不是heap(堆)上就可以使用数组

    // 如果想保证有固定数量的元素,也可以使用数组

    // 数组没有Vector灵活

    // Vector是可以改变长度的,数组是固定长度的

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    // 这种不会变长度的就适合用数组

  

    // 如果每个元素都相同,还有一种语法

    let a = [3;5];

    // 这样就会生成一个包含5个3的数组

  

    // 访问数组元素

    // 数组是栈上的单个块的内存

  

    let first = months[0];

    let second = months[1];

    println!("first的值是:{}",first);

    println!("second的值是:{}",second);

  

    // 如果访问的索引超过了数组的范围,会报错panic

    // rust不允许其继续访问相应地址的内存,这样可以避免潜在的安全漏洞

    // 不允许越界,只能访问数组占的内存空间

    // 例如:let index = 10;let element = a[index];会报错

    // 有时不会报错,例如:let index = [12,13,14,15]; let month = months[index[1]];可以通过编译,但是运行时会报错index out of bounds,程序panic
}
```