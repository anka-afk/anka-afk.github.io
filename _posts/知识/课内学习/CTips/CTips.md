  

![[QQ%E6%88%AA%E5%9B%BE20231219222042.png]]

字符型为2字节16位，采用Unicode字符集

![[Untitled.png]]

![[Untitled 1.png]]

![[Untitled 2.png]]

![[Untitled 3.png]]

![[Untitled 4.png]]

![[Untitled 5.png]]

![[Untitled 6.png]]

![[Untitled 7.png]]

![[Untitled 8.png]]

![[Untitled 9.png]]

![[Untitled 10.png]]

![[Untitled 11.png]]

![[Untitled 12.png]]

![[Untitled 13.png]]

![[Untitled 14.png]]

![[Untitled 15.png]]

![[Untitled 16.png]]

![[Untitled 17.png]]

![[Untitled 18.png]]

![[Untitled 19.png]]

![[Untitled 20.png]]

![[Untitled 21.png]]

![[Untitled 22.png]]

![[Untitled 23.png]]

![[Untitled 24.png]]

![[Untitled 25.png]]

![[Untitled 26.png]]

![[Untitled 27.png]]

![[Untitled 28.png]]

![[Untitled 29.png]]

![[Untitled 30.png]]

![[Untitled 31.png]]

![[Untitled 32.png]]

![[Untitled 33.png]]

![[Untitled 34.png]]

![[Untitled 35.png]]

![[Untitled 36.png]]

![[Untitled 37.png]]

![[Untitled 38.png]]

![[Untitled 39.png]]

![[Untitled 40.png]]

![[Untitled 41.png]]

readonly是给引用型变量用的const,运行期执行

![[Untitled 42.png]]

![[Untitled 43.png]]

![[Untitled 44.png]]

![[Untitled 45.png]]

![[Untitled 46.png]]

![[Untitled 47.png]]

![[Untitled 48.png]]

![[Untitled 49.png]]

![[Untitled 50.png]]

![[Untitled 51.png]]

![[Untitled 52.png]]

![[Untitled 53.png]]

![[Untitled 54.png]]

![[Untitled 55.png]]

![[Untitled 56.png]]

![[Untitled 57.png]]

![[Untitled 58.png]]

![[Untitled 59.png]]

![[Untitled 60.png]]

![[Untitled 61.png]]

![[Untitled 62.png]]

![[Untitled 63.png]]

![[Untitled 64.png]]

![[Untitled 65.png]]

![[Untitled 66.png]]

![[Untitled 67.png]]

![[Untitled 68.png]]

![[Untitled 69.png]]

![[Untitled 70.png]]

![[Untitled 71.png]]

![[Untitled 72.png]]

![[Untitled 73.png]]

![[Untitled 74.png]]

![[Untitled 75.png]]

![[Untitled 76.png]]

![[Untitled 77.png]]

![[Untitled 78.png]]

![[Untitled 79.png]]

![[Untitled 80.png]]

![[Untitled 81.png]]

![[Untitled 82.png]]

![[Untitled 83.png]]

![[Untitled 84.png]]

![[Untitled 85.png]]

![[Untitled 86.png]]

![[Untitled 87.png]]

![[Untitled 88.png]]

![[Untitled 89.png]]

![[Untitled 90.png]]

![[Untitled 91.png]]

![[Untitled 92.png]]

![[Untitled 93.png]]

![[Untitled 94.png]]

![[Untitled 95.png]]

![[Untitled 96.png]]

![[Untitled 97.png]]

![[Untitled 98.png]]

![[Untitled 99.png]]

![[Untitled 100.png]]

![[Untitled 101.png]]

![[Untitled 102.png]]

![[Untitled 103.png]]

![[Untitled 104.png]]

![[Untitled 105.png]]

![[Untitled 106.png]]

![[Untitled 107.png]]

![[Untitled 108.png]]

![[Untitled 109.png]]

![[Untitled 110.png]]

![[Untitled 111.png]]

![[Untitled 112.png]]

![[Untitled 113.png]]

![[Untitled 114.png]]

![[Untitled 115.png]]

![[Untitled 116.png]]

![[Untitled 117.png]]

![[Untitled 118.png]]

![[Untitled 119.png]]

![[Untitled 120.png]]

![[Untitled 121.png]]

![[Untitled 122.png]]

![[Untitled 123.png]]

![[Untitled 124.png]]

![[Untitled 125.png]]

![[Untitled 126.png]]

![[Untitled 127.png]]

![[Untitled 128.png]]

![[Untitled 129.png]]

![[Untitled 130.png]]

![[Untitled 131.png]]

![[Untitled 132.png]]

![[Untitled 133.png]]

![[Untitled 134.png]]

![[Untitled 135.png]]

![[Untitled 136.png]]

![[Untitled 137.png]]

![[Untitled 138.png]]

![[Untitled 139.png]]

![[Untitled 140.png]]

![[Untitled 141.png]]

![[Untitled 142.png]]

![[Untitled 143.png]]

数据库应用程序的基本设计涉及到连接方式、数据源、主从关系等概念。以下是一些关键概念和常用类的解释：

### 连接方式：

数据库应用程序与数据库之间的连接通常可以分为两种方式：连接方式和不连接方式。

1. **连接方式（Connected Approach）：**
    - 在连接方式中，应用程序与数据库建立连接，并保持连接状态。这意味着应用程序可以实时地执行数据库操作，但需要在使用后显式地关闭连接。
    - **相关类：**
        - `SqlConnection`：表示到 SQL Server 数据库的打开连接。
        - `SqlCommand`：表示要对 SQL Server 数据库执行的 Transact-SQL 语句或存储过程。
        - `SqlDataReader`：从 SQL Server 数据库中读取行的只进流。
    - **示例：**
        
        ```C#
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
        
            using (SqlCommand command = new SqlCommand("SELECT * FROM Customers", connection))
            using (SqlDataReader reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    // 处理查询结果
                }
            }
        }
        ```
        
2. **不连接方式（Disconnected Approach）：**
    - 在不连接方式中，应用程序从数据库中检索数据，然后断开与数据库的连接。应用程序在内存中操作数据，而不是直接在数据库上执行操作。
    - **相关类：**
        - `DataSet`：表示内存中的数据缓存，通常包含多个 `DataTable`。
        - `DataTable`：表示内存中的表，包含多个 `DataRow`。
        - `DataRow`：表示表中的一行数据。
    - **示例：**
        
        ```C#
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            SqlDataAdapter adapter = new SqlDataAdapter("SELECT * FROM Customers", connection);
            DataSet dataSet = new DataSet();
            adapter.Fill(dataSet, "Customers");
        
            DataTable customersTable = dataSet.Tables["Customers"];
            foreach (DataRow row in customersTable.Rows)
            {
                // 处理查询结果
            }
        }
        ```
        

### 项目数据源的概念：

项目数据源是指在项目中定义的、可在代码中使用的数据源。在数据库应用程序中，项目数据源通常与连接字符串、表、查询等相关。

1. **连接字符串（ConnectionString）：**
    - 连接字符串包含了连接数据库所需的信息，如数据库服务器地址、数据库名称、身份验证方式等。
2. **数据表（DataTable）：**
    - 数据表是内存中的表格，包含列和行。它可以表示数据库中的表，可以通过数据适配器填充。
3. **查询（Query）：**
    - 查询是指从数据库中检索数据的操作。在项目中，可以使用 SQL 查询语句或 LINQ 查询来获取数据。

### 主从关系的实现方法：

主从关系是指两个表格之间的关系，其中一个表格的记录（主表）可以与另一个表格的多个记录（从表）相关联。在项目数据源中，`Relation` 组件用于表示这种关系。

1. `**Relation**` **组件的用法：**
    - `Relation` 是 `DataRelation` 类的实例，用于定义两个表格之间的关系。关系可以基于一个或多个列。
    - **示例：**
        
        ```C#
        // 创建主从关系
        DataRelation relation = new DataRelation("CustomersOrders",
                                                 dataSet.Tables["Customers"].Columns["CustomerID"],
                                                 dataSet.Tables["Orders"].Columns["CustomerID"]);
        
        // 将关系添加到数据集中
        dataSet.Relations.Add(relation);
        
        // 通过主表获取从表数据
        DataRow customerRow = dataSet.Tables["Customers"].Rows[0];
        DataRow[] orders = customerRow.GetChildRows(relation);
        ```
        
    - 在上述示例中，创建了一个名为 "CustomersOrders" 的主从关系，连接了 "Customers" 表的 "CustomerID" 列和 "Orders" 表的 "CustomerID" 列。然后，通过 `GetChildRows` 方法可以获取与指定主表行相关联的从表行。

这些概念和类的使用方式可以根据具体的项目需求和数据库设计来调整和扩展。数据库应用程序的设计通常需要结合具体业务逻辑和性能考虑，选择合适的连接方式和设计数据源的结构。

### 常用控件及其常用属性：

1. **Window（窗口）：**
    - 常用属性：
        - `Title`：窗口标题。
        - `Width`、`Height`：窗口的宽度和高度。
        - `Background`：窗口的背景颜色。
        - `WindowState`：窗口的状态（最大化、最小化等）。
2. **TextBlock：**
    - 常用属性：
        - `Text`：显示的文本内容。
        - `Foreground`：文本的前景色（文字颜色）。
        - `FontFamily`、`FontSize`：字体族和字体大小。
3. **Label：**
    - 常用属性：
        - `Content`：标签显示的内容。
        - `Foreground`：前景色，即文字颜色。
4. **TextBox：**
    - 常用属性：
        - `Text`：文本框中的文本内容。
        - `MaxLength`：输入的最大长度。
        - `IsReadOnly`：是否为只读。
5. **Button：**
    - 常用属性：
        - `Content`：按钮上显示的文本或内容。
6. **ListView：**
    - 常用属性：
        - `Items`：列表项的集合。
        - `View`：显示方式（Details、LargeIcon、SmallIcon 等）。
        - `Columns`：列的集合，用于自定义列。

### 常用事件的使用：

1. **Window 的 Loaded 事件：**
    - 当窗口加载完成时触发，通常用于在窗口加载时执行一些初始化操作。
2. **Window 的 Closing 事件：**
    - 当窗口关闭时触发，可以用于处理窗口关闭前的逻辑。
3. **Button 的 Click 事件：**
    - 当按钮被点击时触发，用于处理按钮点击后的逻辑。
4. **Mouse 事件：**
    - `MouseLeftButtonDown`、`MouseLeftButtonUp`：鼠标左键按下和释放。
    - `MouseMove`：鼠标移动。
5. **TextBox 的 TextChanged 事件：**
    
    - 当文本框的文本内容发生变化时触发，常用于实时处理用户输入。
    
    ```Plain
    <TextBox TextChanged="TextBox_TextChanged"/>
    ```
    
    ```C#
    private void TextBox_TextChanged(object sender, TextChangedEventArgs e)
    {
        // 处理文本框内容变化的逻辑
    }
    ```
    
6. **ComboBox、ListBox 的 SelectionChanged 事件：**
    
    - 当选择项发生变化时触发，用于处理选择项变化后的逻辑。
    
    ```Plain
    <ComboBox SelectionChanged="ComboBox_SelectionChanged"/>
    ```
    
    ```C#
    private void ComboBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
    {
        // 处理选择项变化的逻辑
    }
    ```
    

这些事件和属性只是 WPF 中常用的一部分，实际应用中可能还会涉及到更多的控件、属性和事件。根据具体的需求和场景，你可以选择合适的控件和事件来构建界面和处理用户交互。

![[Untitled 144.png]]