# create-excel-by-js

## 使用graphviz生成状态图

### 安装
```bash
brew install graphviz
```

### 检查是否安装成功
```bash
dot -v
```

### 命令行中使用
[reference](https://graphviz.gitlab.io/_pages/doc/info/command.html)
#### 语法
```bash
<cmd> <flags> <input files>
```

cmd
- dot 渲染的图具有明确方向性（最常用，一般都使用这个）。 
- neato 渲染的图缺乏方向性。 
- twopi 渲染的图采用放射性布局。 
- circo 渲染的图采用环型布局。 
- fdp 渲染的图缺乏方向性。 
- sfdp 渲染大型的图，图片缺乏方向性。

#### example
```bash
dot input.dot -T png -o output.png
```
