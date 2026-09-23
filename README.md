# @vvi/pen

[![version](<https://img.shields.io/npm/v/@vvi/pen.svg?logo=npm&logoColor=rgb(0,0,0)&label=版本号&labelColor=rgb(73,73,228)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/@vvi/pen) [![issues 提交](<https://img.shields.io/badge/issues-提交-rgb(255,0,63)?logo=github>)](https://github.com/gleanings/pen/issues)

## 颜色模块

现在添加了 `colorText` 方法，可创建一个在浏览器可用的彩色文本（浏览器支持的样式比终端要多得多，譬如光标样式、圆角、外边框、阴影。。。。。）。

> [**广子**]
>
> 如果有需要在控制台或终端绘制彩色表格的需求，可以使用 [colored-table](https://www.npmjs.com/package/@vvi/table)

## ANSI 模块相关

- `strInTerminalLength` 获取字符串在终端显示的长度
- `truncateStringWithChar` 以在终端的长度截断字符串
- `strInOneLineOnTerminal` 在终端中以一行的形式展示字符串（不影响单行内的换行符）
- `colorText` 一个可用与浏览器环境的简单的文本色

### `strInTerminalLength` 字符串在终端显示的长度

暂时没有示例展示

### `colorText`

在浏览器中可用的彩色文本，但是为了兼容原有的 `pen` 的属性，仅支持设置文本色、背景色、下划线、粗体、斜体、隐藏文本。暂不支持边框、光标样式、内外边距。。。等属性设置

```ts
import { pen, colorText } from '@vvi/pen';

const colorTextArr = colorText(pen.red`红色的文本`.concat('默认文本'));

console.log(...colorTextArr);
```

## pen 静态属性

|  颜色类型的属性   |   对应的 RGB 色值    | ｜ 对应的 16 进制色值 |
| :---------------: | :------------------: | :-------------------: |
|       `hex`       |         ---          |          ---          |
|       `rgb`       |         ---          |          ---          |
|     `random`      |         ---          |          ---          |
|      `color`      |         ---          |          ---          |
|     `number`      |         ---          |          ---          |
|      `black`      |  `rgb(86 ,86 ,86)`   |       `#565656`       |
|       `red`       |  `rgb(181 ,40 ,29)`  |       `#b5281d`       |
|      `green`      |  `rgb(50 ,181 ,32)`  |       `#32b520`       |
|     `yellow`      | `rgb(160 ,160 ,29)`  |       `#a0a01d`       |
|      `blue`       |  `rgb(64 ,10 ,217)`  |       `#400ad9`       |
|     `magenta`     | `rgb(201 ,24 ,201)`  |       `#c918c9`       |
|      `cyan`       | `rgb(45 ,174 ,187)`  |       `#2daebb`       |
|      `white`      | `rgb(193 ,193 ,193)` |       `#c1c1c1`       |
|   `brightBlack`   | `rgb(111 ,111 ,111)` |       `#6f6f6f`       |
|    `brightRed`    |  `rgb(252 ,33 ,25)`  |       `#fc2119`       |
|   `brightGreen`   |  `rgb(47 ,232 ,26)`  |       `#2fe81a`       |
|  `brightYellow`   | `rgb(232 ,236 ,20)`  |       `#e8ec14`       |
|   `brightBlue`    |  `rgb(74 ,3 ,254)`   |       `#4a03fe`       |
|  `brightMagenta`  |  `rgb(251 ,0 ,253)`  |       `#fb00fa`       |
|   `brightCyan`    |                      |                       |
|   `brightWhite`   | `rgb(255 ,255 ,255)` |       `#ffffff`       |
|      `bgRgb`      |         ---          |          ---          |
|      `bgHex`      |         ---          |          ---          |
|    `bgRandom`     |         ---          |          ---          |
|     `bgColor`     |         ---          |          ---          |
|    `bgNumber`     |         ---          |          ---          |
|     `bgBlack`     |  `rgb(86 ,86 ,86)`   |       `#565656`       |
|      `bgRed`      |  `rgb(181 ,40 ,29)`  |       `#b5281d`       |
|     `bgGreen`     |  `rgb(50 ,181 ,32)`  |       `#32b520`       |
|    `bgYellow`     | `rgb(160 ,160 ,29)`  |       `#a0a01d`       |
|     `bgBlue`      |  `rgb(64 ,10 ,217)`  |       `#400ad9`       |
|    `bgMagenta`    | `rgb(201 ,24 ,201)`  |       `#c918c9`       |
|     `bgCyan`      | `rgb(45 ,174 ,187)`  |       `#2daebb`       |
|     `bgWhite`     | `rgb(193 ,193 ,193)` |       `#c1c1c1`       |
|  `bgBrightBlack`  | `rgb(111 ,111 ,111)` |       `#6f6f6f`       |
|   `bgBrightRed`   |  `rgb(252 ,33 ,25)`  |       `#fc2119`       |
|  `bgBrightGreen`  |  `rgb(47 ,232 ,26)`  |       `#2fe81a`       |
| `bgBrightYellow`  | `rgb(232 ,236 ,20)`  |       `#e8ec14`       |
|  `bgBrightBlue`   |  `rgb(74 ,3 ,254)`   |       `#4a03fe`       |
| `bgBrightMagenta` |  `rgb(251 ,0 ,253)`  |       `#fb00fa`       |
|  `bgBrightCyan`   |                      |                       |
|  `bgBrightWhite`  | `rgb(255 ,255 ,255)` |       `#ffffff`       |

### pen 方法

- `bg` 开头的是配置背景色
- `hex` 以 16 进制值配置文本色
- `rgb` 以 rgb 值配置文本色
- `color` 以 16 进制或 rgb 配置文本色
- `number` 以终端色值数值配置文本色
- `random` 随机颜色
- `bgRandom` 随机背景色
- `bgHex` 以 16 进制值配置背景色
- `bgRgb` 以 RGB 值配置背景色
- `bgColor` 以 16 进制或 rgb 配置背景色
- `bgNumber` 以终端色值数值配置背景色

| 非颜色色值其他属性 | 说明                                                   |
| :----------------- | :----------------------------------------------------- |
| `bold`             | 粗体文本                                               |
| `dim`              | 细体文本                                               |
| `italic`           | 斜体文本                                               |
| `underline`        | 带下划线的文本                                         |
| `blink`            | 闪烁文本（在某些终端上可能无效，譬如 vscode 自带终端） |
| `reversed`         | Reversed text and background                           |
| `hide`             | Hide text                                              |

注意，在使用 `hex` 或是 `color` 进行使用色值时，尽量不要使用十六进制的数值，可能会产生歧义。例如：

```ts
import { pen } from '@vvi/pen';

pen.hex(0x000000)`期待是黑色文本`; // 其实输出的是任意色的文本

pen.color(0x0000ff)`期待是蓝色文本`; // 其实输出的是任意色的文本
```

## 使用 `pen`

注意 _从 v1.0.0 版本开始，pen 正式接受模版函数调用方式_

```ts
import { pen } from '@vvi/pen';
import { Dog } from '@vvi/log';

const dog = new Dog({
  name: 'color pen',
  type: 'error',
});

// 简单用法
dog(pen.red('红色文本')); // 输出红色文本
dog(pen.red`红色${pen.italic`内嵌默认色斜体文本`}文本`); // 输出红色文本
dog(pen.green('绿色文本')); // 输出绿色文本
dog(pen.green`绿色文本`); // 输出绿色文本
dog(pen.blue('蓝色文本')); // 输出蓝色文本
dog(pen.blue`蓝色文本`); // 输出蓝色文本
dog(pen.yellow('黄色文本')); // 输出黄色文本
dog(pen.yellow`黄色文`); // 输出黄色文本
dog(pen.magenta('洋红文本')); // 输出洋红文本
dog(pen.magenta`洋红文本`); // 输出洋红文本
dog(pen.cyan('青色文本')); // 输出青色文本
dog(pen.cyan`青色文本`); // 输出青色文本
dog(pen.white('白色文本')); // 输出白色文本
dog(pen.white`白色文本`); // 输出白色文本
dog(pen.bold('粗体文本')); // 输出粗体文本
dog(pen.bold`粗体文本`); // 输出粗体文本
dog(pen.italic('斜体文本')); // 输出斜体文本
dog(pen.italic`斜体文本`); // 输出斜体文本
dog(pen.underline('下划线文本')); // 输出下划线文本
dog(pen.underline`下划线文本`); // 输出下划线文本
dog(pen.inverse('反转文本')); // 输出反转文本
dog(pen.inverse`反转文本`); // 输出反转文本
dog(pen.bold.italic.cyan('粗斜体青色文本')); // 输出粗斜体青色文本
dog(pen.bold.italic.cyan`粗斜体${pen.red`内嵌红色字`}青色文本`); // 输出粗斜体青色文本

dog(`${pen.red(`红色开头${pen.yellow('中间是黄色')}与结尾`)}`);
dog(`${pen.red`红色开头${pen.yellow`中间是黄色`}与结尾`}`);

dog(pen.random('随机打印一个色值的字符串'));
dog(pen.random`随机打印一个${pen.bgRandom('设置')}的字符串`);

/// 创建带样式的 🖊️
const redBoldPen = pen.red.bold;

dog(redBoldPen('红色粗体文本')); // 输出红色粗体文本

dog(redBoldPen.italic('红色粗体斜体文本')); // 输出红色粗体斜体文本
```

## 笔柜

v2 版本导出了简单样式的笔。在同一个项目中，重复使用同一个由 [pen](#使用-pen) 构建的同样式 🖊️ 有助于性能优化。
因为每一次使用 `pen` 构建一个样式的笔就将创建一个闭包。

```ts
import { redPen, bluePen } from '@vvi/pen';
import { Dog } from '@vvi/log';

const dog = new Dog({
  name: 'color pen',
  type: 'error',
});

dog(redPen`红色的文本`);
dog(bluePen`蓝色的文本`);

... // 其他色文本的笔皆单独导出
```

当然，你也可以创建自己的独有样式的 🖊️。例如，若想创建红色的粗体 🖊️：

```ts
import { pen, redPen, boldPen } from '@vvi/pen';

const redBoldPen1 = pen.red.bold;
const redBoldPen2 = redPen.bold;
const redBoldPen3 = boldPen.red;

console.log(redBoldPen1`红色文本`);
console.log(redBoldPen2`红色文本`);
console.log(redBoldPen3`红色文本`);
```

尽管可以使用三种方式创建，但他们不相等

- `redPen` 初始化的红色笔
- `bluePen` 初始化的蓝色 🖊️
- `greenPen` 初始化的绿色 🖊️
- `yellowPen` 初始化的黄色 🖊️
- `magentaPen` 初始化的洋红 🖊️
- `cyanPen` 初始化的青 🖊️
- `whitePen` 初始化的白 🖊️
- `brightBlackPen` 初始化的亮黑 🖊️
- `brightRedPen` 初始化的亮红 🖊️
- `brightGreenPen` 初始化的亮绿 🖊️
- `brightYellowPen` 初始化的亮黄 🖊️
- `brightBluePen` 初始化的亮蓝 🖊️
- `brightMagentaPen` 初始化的亮杨红 🖊️
- `brightCyanPen` 初始化的青 🖊️
- `brightWhitePen` 初始化的亮白 🖊️
- `bgBlackPen` 初始化的黑色背景 🖊️
- `bgRedPen` 初始化的红色背景 🖊️
- `bgGreenPen` 初始化的绿色背景 🖊️
- `bgYellowPen` 初始化的黄色背景 🖊️
- `bgBluePen` 初始化的蓝色背景 🖊️
- `bgMagentaPen` 初始化的杨红色背景 🖊️
- `bgCyanPen` 初始化的青色背景 🖊️
- `bgWhitePen` 初始化的白色背景 🖊️
- `bgBrightBlackPen` 初始化的亮黑色背景 🖊️
- `bgBrightRedPen` 初始化的色亮红背景 🖊️
- `bgBrightGreenPen` 初始化的色亮绿背景 🖊️
- `bgBrightYellowPen` 初始化的色亮黄背景 🖊️
- `bgBrightBluePen` 初始化的亮蓝色背景 🖊️
- `bgBrightMagentaPen` 初始化的亮杨红色背景 🖊️
- `bgBrightCyanPen` 初始化的亮青色背景 🖊️
- `bgBrightWhitePen` 初始化的亮白色背景 🖊️
- `boldPen` 初始化的粗体 🖊️
- `italicPen` 初始化的斜体 🖊️
- `underlinePen` 初始化的带下划线 🖊️
- `hidePen` 初始化的隐藏文本 🖊️
- `rgbPen` 初始化的使用 rgb 创建色值的 🖊️
- `hexPen` 初始化的使用 hex 创建色值的 🖊️
- `colorPen` 初始化的使用 rgb 或 hex 创建色值的 🖊️
- `bgRgbPen` 初始化的使用 rgb 创建背景色的 🖊️
- `bgHexPen` 初始化的使用 hex 创建背景色的 🖊️
- `bgColorPen` 初始化的使用 rgb 或 hex 创建背景色 🖊️
- `randomPen` 初始化的随机文本色的 🖊️
- `bgRandomPen` 初始化的随机背景色的 🖊️
- `numberPen` 初始化的使用 ANSI 转义的 🖊️
- `bgNumberPen` 初始化的使用 ANSI 转义的背景色的 🖊️
- `dimPen` 初始化细体的 🖊️
- `blinkPen` 初始化闪烁的 🖊️
- `reversedPen` 初始化文本色和前景色反转的 🖊️

## 文档地址

- [ANSI] 转义相关

## 状态

此软件包是 `@mudbean` 生态系统的一部分。
它使用严格的 TypeScript 编写，并通过 Rollup 构建进行验证。
虽然单元测试较少，但 API 稳定，并在生产环境中大量使用。

[ANSI]: https://mudbean.cn/建站日志/2025/4/22/ANSI%20转义码
