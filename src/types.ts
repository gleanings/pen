/**
 * # 使用 RGB 设置背景色
 *
 * @param r 构建的 RGB 颜色的 r 值或 RGB 文本值
 * - `r`  为 `string` 时，为 `rgb(r ,g ,b)` 格式，且第二参数和第三参数应为 `undefined`
 * - `r` 为 `number` 时，搭配 `g` 和 `b` 构建三色
 * @param g 当第一参数为 string 时，该值应为 `undefined`；第一参数为数值时，该值表示 `g` 值
 * @param b 当第一参数为 string 时，该值应为 `undefined`；第一参数为数值时，该值表示 `b` 值
 * @returns 返回 ANSI 颜色文本
 * @example
 * ```ts
 * import { pen } from '@vvi/pen';
 *
 * const redPen = pen.bgRgb(255, 0, 0); // 构建红色背景
 * const bluePen = pen.bgRgb('rgb(0, 0, 255)'); // 构建蓝色背景
 *
 * // 第二参数在第一参数为字符串时不为 undefined 将抛出 `TypeError`
 * pen.bgRgb('rgb(0, 0, 255)', 1);
 * // 三个参数中有值超出范围则会抛出 `TypeError`
 * pen.bgRgb(1,2, 256); // => TypeError
 * pen.bgRgb('rgb(0, 0, 258)');  // => TypeError
 * pen.bgRgb(-100,2, 125);  // => TypeError
 * pen.bgRgb('rgb(-100, 0, 258)');  // => TypeError
 * // 三个参数中有浮点数则抛出 `TypeError`
 * pen.bgRgb('rgb(0, 0 ,125.5)'); // => TypeError
 *
 * ```
 */
export type RGBFunctionWithThreeNumbers = (
  r: number,
  g: number,
  b: number,
) => Pen;

export type RGBFunctionWithOnlyString = (rgb: string) => Pen;
/**
 * # 使用 RGB 设置背景色
 *
 * @param r 构建的 RGB 颜色的 r 值或 RGB 文本值
 * - `r`  为 `string` 时，为 `rgb(r ,g ,b)` 格式，且第二参数和第三参数应为 `undefined`
 * - `r` 为 `number` 时，搭配 `g` 和 `b` 构建三色
 * @param g 当第一参数为 string 时，该值应为 `undefined`；第一参数为数值时，该值表示 `g` 值
 * @param b 当第一参数为 string 时，该值应为 `undefined`；第一参数为数值时，该值表示 `b` 值
 * @returns 返回 ANSI 颜色文本
 * @example
 * ```ts
 * import { pen } from '@vvi/pen';
 *
 * const redPen = pen.bgRgb(255, 0, 0); // 构建红色背景
 * const bluePen = pen.bgRgb('rgb(0, 0, 255)'); // 构建蓝色背景
 *
 * // 第二参数在第一参数为字符串时不为 undefined 将抛出 `TypeError`
 * pen.bgRgb('rgb(0, 0, 255)', 1);
 * // 三个参数中有值超出范围则会抛出 `TypeError`
 * pen.bgRgb(1,2, 256); // => TypeError
 * pen.bgRgb('rgb(0, 0, 258)');  // => TypeError
 * pen.bgRgb(-100,2, 125);  // => TypeError
 * pen.bgRgb('rgb(-100, 0, 258)');  // => TypeError
 * // 三个参数中有浮点数则抛出 `TypeError`
 * pen.bgRgb('rgb(0, 0 ,125.5)'); // => TypeError
 *
 * ```
 */
export type RGBFunction = RGBFunctionWithThreeNumbers &
  RGBFunctionWithOnlyString;

export type penText =
  | string
  | number
  | boolean
  | undefined
  | null
  | bigint
  | symbol;

/**
 * # 🖌️
 */
export type Pen = {
  [key in keyof StringKindList]: Pen;
} & {
  [key in keyof FunctionKindList]: key extends 'rgb' | 'bgRgb' // 使用 rgb 色值
    ? RGBFunction
    : // 使用十六进制色值
      key extends 'hex' | 'bgHex'
      ? (hex: string) => Pen
      : // 直接指定色值
        key extends 'color' | 'bgColor'
        ? /**  12  */
          ((r: number, g: number, b: number) => Pen) &
            /**  23  */
            ((rgb: string) => Pen)
        : // 使用数值设置色值
          key extends 'number' | 'bgNumber'
          ? (n: number) => Pen
          : key extends 'random' | 'bgRandom'
            ? Pen
            : Pen;
} & {
  (strList: TemplateStringsArray, ...paramsList: penText[]): string;
} & { (text: penText): string };
/**
 * # 属性列表
 */
export type StringKindList = {
  /**
   * <span style="color:#565656;">黑前景色</span>
   *
   * 16 进制色值：   <span style="color:#565656;">#565656</span>
   *
   * RGB 色值：    <span style="color:#565656;">rgb(86 ,86 ,86)</span>
   */
  black: string;
  /**
   * <span style="color:#b5281d;">红前景色</span>
   *
   * 16 进制色值：   <span style="color:#b5281d;">#b5281d</span>
   *
   * RGB 色值：    <span style="color:#b5281d;">rgb(181 ,40 ,29)</span>
   */
  red: string;
  /**
   * <span style="color:#32b520;">绿前景色</span>
   *
   * 16 进制色值：   <span style="color:#32b520;">#32b520</span>
   *
   * RGB 色值：    <span style="color:#32b520;">rgb(50 ,181 ,32)</span>
   */
  green: string;
  /**
   * <span style="color:#a0a01d;">黄前景色</span>
   *
   * 16 进制色值：   <span style="color:#a0a01d;">#a0a01d</span>
   *
   * RGB 色值：    <span style="color:#a0a01d;">rgb(160 ,160 ,29)</span>
   */
  yellow: string;
  /**
   * <span style="color:#400ad9;">蓝前景色</span>
   *
   * 16 进制色值：   <span style="color:#400ad9;">#400ad9</span>
   *
   * RGB 色值：    <span style="color:#400ad9;">rgb(64 ,10 ,217)</span>
   */
  blue: string;
  /**
   * <span style="color:#c918c9;">杨红前景色</span>
   *
   * 16 进制色值： <span style="color:#c918c9;">#c918c9</span>
   *
   * RGB 色值：  <span style="color:#c918c9;">rgb(201 ,24 ,201)</span>
   */
  magenta: string;
  /**
   * <span style="color:#2daebb;">青前景色</span>
   *
   * 16 进制色值： <span style="color:#2daebb;">#2daebb</span>
   *
   * RGB 色值：  <span style="color:#2daebb;">rgb(45 ,174 ,187)</span>
   */
  cyan: string;
  /**
   * <span style="color:#c1c1c1;">白前景色</span>
   *
   * 16 进制色值： <span style="color:#c1c1c1;">#c1c1c1</span>
   *
   * RGB 色值：  <span style="color:#c1c1c1;">rgb(193 ,193 ,193)</span>
   */
  white: string;
  /**
   * <span style="color:#6f6f6f;">高亮黑前景色</span>
   *
   * 16 进制色值： <span style="color:#6f6f6f;">#6f6f6f</span>
   *
   * RGB 色值：  <span style="color:#6f6f6f;">rgb(111 ,111 ,111)</span>
   */
  brightBlack: string;
  /**
   * <span style="color:#fc2119;">高亮红前景色</span>
   *
   * 16 进制色值： <span style="color:#fc2119;">#fc2119</span>
   *
   * RGB 色值：  <span style="color:#fc2119;">rgb(252 ,33 ,25)</span>
   */
  brightRed: string;
  /**
   * <span style="color:#2fe81a;">高亮绿前景色</span>
   *
   * 16 进制色值： <span style="color:#2fe81a;">#2fe81a</span>
   *
   * RGB 色值：  <span style="color:#2fe81a;">rgb(47 ,232 ,26)</span>
   */
  brightGreen: string;
  /**
   * <span style="color:#e8ec14;">高亮黄前景色</span>
   *
   * 16 进制色值： <span style="color:#e8ec14;">#e8ec14</span>
   *
   * RGB 色值：  <span style="color:#e8ec14;">rgb(232 ,236 ,20)</span>
   */
  brightYellow: string;
  /**
   * <span style="color:#4a03fe;">高亮蓝前景色</span>
   *
   * 16 进制色值： <span style="color:#4a03fe;">#4a03fe</span>
   *
   * RGB 色值：  <span style="color:#4a03fe;">rgb(74 ,3 ,254)</span>
   */
  brightBlue: string;
  /**
   * <span style="color:#fb00fa;">高亮杨红前景色</span>
   *
   * 16 进制色值： <span style="color:#fb00fa;">#fb00fa</span>
   *
   * RGB 色值：  <span style="color:#fb00fa;">rgb(251 ,0 ,253)</span>
   */
  brightMagenta: string;
  /**
   * <span style="color:#2ceeec;">高亮青前景色</span>
   *
   * 16 进制色值： <span style="color:#2ceeec;">#2ceeec</span>
   *
   * RGB 色值：  <span style="color:#2ceeec;">rgb(44 ,238 ,236)</span>
   */
  brightCyan: string;
  /**
   * <span style="color:#ffffff;">高亮白前景色</span>
   *
   * 16 进制色值： <span style="color:#ffffff;">#ffffff</span>
   *
   * RGB 色值：  <span style="color:#ffffff;">rgb(255 ,255 ,255)</span>
   */
  brightWhite: string;
  /**
   * <span style="color:#565656;">黑背景色</span>
   *
   * 16 进制色值：   <span style="color:#565656;">#565656</span>
   *
   * RGB 色值：    <span style="color:#565656;">rgb(86 ,86 ,86)</span>
   */
  bgBlack: string;
  /**
   * <span style="color:#b5281d;">红背景色</span>
   *
   * 16 进制色值：   <span style="color:#b5281d;">#b5281d</span>
   *
   * RGB 色值：    <span style="color:#b5281d;">rgb(181 ,40 ,29)</span>
   */
  bgRed: string;
  /**
   * <span style="color:#32b520;">绿背景色</span>
   *
   * 16 进制色值：   <span style="color:#32b520;">#32b520</span>
   *
   * RGB 色值：    <span style="color:#32b520;">rgb(50 ,181 ,32)</span>
   */
  bgGreen: string;
  /**
   * <span style="color:#a0a01d;">黄背景色</span>
   *
   * 16 进制色值：   <span style="color:#a0a01d;">#a0a01d</span>
   *
   * RGB 色值：    <span style="color:#a0a01d;">rgb(160 ,160 ,29)</span>
   */
  bgYellow: string;
  /**
   * <span style="color:#400ad9;">蓝背景色</span>
   *
   * 16 进制色值：   <span style="color:#400ad9;">#400ad9</span>
   *
   * RGB 色值：    <span style="color:#400ad9;">rgb(64 ,10 ,217)</span>
   */
  bgBlue: string;
  /**
   * <span style="color:#c918c9;">杨红背景色</span>
   *
   * 16 进制色值： <span style="color:#c918c9;">#c918c9</span>
   *
   * RGB 色值：  <span style="color:#c918c9;">rgb(201 ,24 ,201)</span>
   */
  bgMagenta: string;
  /**
   * <span style="color:#2daebb;">青背景色</span>
   *
   * 16 进制色值： <span style="color:#2daebb;">#2daebb</span>
   *
   * RGB 色值：  <span style="color:#2daebb;">rgb(45 ,174 ,187)</span>
   */
  bgCyan: string;
  /**
   * <span style="color:#c1c1c1;">白背景色</span>
   *
   * 16 进制色值： <span style="color:#c1c1c1;">#c1c1c1</span>
   *
   * RGB 色值：  <span style="color:#c1c1c1;">rgb(193 ,193 ,193)</span>
   */
  bgWhite: string;
  /**
   * <span style="color:#6f6f6f;">高亮黑背景色</span>
   *
   * 16 进制色值： <span style="color:#6f6f6f;">#6f6f6f</span>
   *
   * RGB 色值：  <span style="color:#6f6f6f;">rgb(111 ,111 ,111)</span>
   */
  bgBrightBlack: string;
  /**
   * <span style="color:#fc2119;">高亮红背景色</span>
   *
   * 16 进制色值： <span style="color:#fc2119;">#fc2119</span>
   *
   * RGB 色值：  <span style="color:#fc2119;">rgb(252 ,33 ,25)</span>
   */
  bgBrightRed: string;
  /**
   * <span style="color:#2fe81a;">高亮绿背景色</span>
   *
   * 16 进制色值： <span style="color:#2fe81a;">#2fe81a</span>
   *
   * RGB 色值：  <span style="color:#2fe81a;">rgb(47 ,232 ,26)</span>
   */
  bgBrightGreen: string;
  /**
   * <span style="color:#e8ec14;">高亮黄背景色</span>
   *
   * 16 进制色值： <span style="color:#e8ec14;">#e8ec14</span>
   *
   * RGB 色值：  <span style="color:#e8ec14;">rgb(232 ,236 ,20)</span>
   */
  bgBrightYellow: string;
  /**
   * <span style="color:#4a03fe;">高亮蓝背景色</span>
   *
   * 16 进制色值： <span style="color:#4a03fe;">#4a03fe</span>
   *
   * RGB 色值：  <span style="color:#4a03fe;">rgb(74 ,3 ,254)</span>
   */
  bgBrightBlue: string;
  /**
   * <span style="color:#fb00fa;">高亮杨红背景色</span>
   *
   * 16 进制色值： <span style="color:#fb00fa;">#fb00fa</span>
   *
   * RGB 色值：  <span style="color:#fb00fa;">rgb(251 ,0 ,253)</span>
   */
  bgBrightMagenta: string;
  /**
   * <span style="color:#2ceeec;">高亮青背景色</span>
   *
   * 16 进制色值： <span style="color:#2ceeec;">#2ceeec</span>
   *
   * RGB 色值：  <span style="color:#2ceeec;">rgb(44 ,238 ,236)</span>
   */
  bgBrightCyan: string;
  /**
   * <span style="color:#ffffff;">高亮白背景色</span>
   *
   * 16 进制色值： <span style="color:#ffffff;">#ffffff</span>
   *
   * RGB 色值：  <span style="color:#ffffff;">rgb(255 ,255 ,255)</span>
   */
  bgBrightWhite: string;
  /**  粗文本 */
  bold: string;
  /**   细文本 */
  dim: string;
  /**  斜体文本  */
  italic: string;
  /** 带下划线的文本 */
  underline: string;
  /**
   *
   * 一闪一闪亮晶晶的文本
   *
   * 但是在某些终端上可能无效，譬如 vsCode 内嵌的终端
   *
   * */
  blink: string;
  /**  反转前景色和背景色  */
  reversed: string;
  /**  隐藏文本，用于创建等宽文本很爽  */
  hide: string;
  /**  随机色  */
  random: 'random';
  /**  随机背景色  */
  bgRandom: 'bgRandom';
};
/**
 *
 * 函数式调用
 *
 *
 * - `random`、`bgRandom` 既不是严格属性掉用也不是严格的函数式调用
 */
export interface FunctionKindList {
  /**
   * 使用 RGB 设置前景色
   * @param rgb 构建的 RGB 颜色的 r 值或 RGB 文本值
   * @returns 返回构建的 ANSI 的转义色值
   *
   */
  rgb(rgb: string): string;
  /**
   * 使用 RGB 设置前景色
   *
   * @param r 构建的 RGB 颜色的 r 值或 RGB 文本值
   * @param g 构建的 RGB 颜色的 g 值
   * @param b 构建的 RGB 颜色的 b 值
   * @returns 返回的 ANSI 转义色值
   *
   */
  rgb(r: number, g: number, b: number): string;
  /**
   * # 使用 16 进制设置前景色
   * @param hex 构建使用 16 进制色值 `0x000000`、`#000000`
   * @returns  返回构建的 ANSI 转义 色值
   */
  hex(hex: string): string;
  /**
   *  使用 RGB 或 hex 设置前景色
   *
   * @param rgbOrHex  构建的 rgb 或 hex 文本色值
   * @returns 返回构建的 ANSI 转义后的色值
   *
   */
  color(rgbOrHex: string): string;
  /**
   *  使用 RGB 或 hex 设置前景色
   *
   * @param r 构建色值的红色部分
   * @param g 构建色值的绿色部分
   * @param b 构建色值的蓝色部分
   * @returns 构建的 ANSI 转义色值
   *
   */
  color(r: number, g: number, b: number): string;

  /**
   * #  使用 RGB 设置背景色
   *
   * @param rgb 构建的 RGB 颜色的 RGB 文本值
   * @returns 返回 ANSI 颜色文本
   * @example
   * ```ts
   * import { pen } from '@vvi/pen';
   *
   * const redPen = pen.bgRgb(255, 0, 0); // 构建红色背景
   * const bluePen = pen.bgRgb('rgb(0, 0, 255)'); // 构建蓝色背景
   *
   * // 第二参数在第一参数为字符串时不为 undefined 将抛出 `TypeError`
   * pen.bgRgb('rgb(0, 0, 255)', 1);
   * // 三个参数中有值超出范围则会抛出 `TypeError`
   * pen.bgRgb(1,2, 256); // => TypeError
   * pen.bgRgb('rgb(0, 0, 258)');  // => TypeError
   * pen.bgRgb(-100,2, 125);  // => TypeError
   * pen.bgRgb('rgb(-100, 0, 258)');  // => TypeError
   * // 三个参数中有浮点数则抛出 `TypeError`
   * pen.bgRgb('rgb(0, 0 ,125.5)'); // => TypeError
   *
   * ```
   */
  bgRgb(rgb: string): string;
  /**
   *
   * ###  使用 RGB 设置背景色
   *
   * @param r   构建的 RGB 颜色的 r 值
   * @param g   构建的 RGB 颜色的 g 值
   * @param b   构建的 RGB 颜色的 b 值
   * @returns 返回 ANSI 颜色文本
   * @example
   * ```ts
   * import { pen } from '@vvi/pen';
   *
   * const redPen = pen.bgRgb(255, 0, 0); // 构建红色背景
   * const bluePen = pen.bgRgb('rgb(0, 0, 255)'); // 构建蓝色背景
   *
   * // 第二参数在第一参数为字符串时不为 undefined 将抛出 `TypeError`
   * pen.bgRgb('rgb(0, 0, 255)', 1);
   * // 三个参数中有值超出范围则会抛出 `TypeError`
   * pen.bgRgb(1,2, 256); // => TypeError
   * pen.bgRgb('rgb(0, 0, 258)');  // => TypeError
   * pen.bgRgb(-100,2, 125);  // => TypeError
   * pen.bgRgb('rgb(-100, 0, 258)');  // => TypeError
   * // 三个参数中有浮点数则抛出 `TypeError`
   * pen.bgRgb('rgb(0, 0 ,125.5)'); // => TypeError
   *
   * ```
   */
  bgRgb(r: number, g: number, b: number): string;
  /**
   *   使用 16 进制设置背景色
   *
   * @param hex  构建色值中的 16 进制色值 `0xffffff` 或 `#ffffff` 格式
   * @returns 构建的 ANSI 转义色值
   *
   */
  bgHex(hex: string): string;
  /**
   * 使用 RGB 或 hex 设置背景色
   *
   * @param rgbOrHex 构建的 rgb 或是 hex 色值
   * @returns 返回的 ANSI 转义色值
   *
   */
  bgColor(rgbOrHex: string): string;
  /**
   * 使用 RGB 或 hex 设置背景色
   *
   * @param r 构建色值的红色
   * @param g 构建色值的绿色
   * @param b 构建色值的蓝色
   * @returns 返回构建的 ANSI 转义色值
   *
   */
  bgColor(r: number, g: number, b: number): string;
  /**
   *  ## 直接使用数值指定终端前景色颜色
   *
   * 后期有时间会出一个数值与色值的对照表
   *
   * @param n 终端颜色值，取值范围 `0 - 255`
   * @returns 返回 ANSI 颜色文本
   * @example
   *
   * ```ts
   * import { pen } from '@vvi/pen';
   *
   * pen.number(0)`黑色文本`;
   * pen.number(1)`红色文本`;
   * pen.number(2)`绿色文本`;
   * pen.number(3)`黄色文本`;
   * pen.number(4)`蓝草绿色文本`;
   * pen.number(5)`杨红色文本`;
   * pen.number(6)`青色文本`;
   * pen.number(7)`白色文本`;
   * pen.number(8)`亮黑色文本`;
   * pen.number(9)`亮红色文本`;
   * pen.number(10)`亮绿色文本`;
   * pen.number(11)`亮黄色文本`;
   * pen.number(12)`亮蓝草绿色文本`;
   * pen.number(13)`亮杨红色文本`;
   * pen.number(14)`亮青色文本`;
   * pen.number(15)`亮白色文本`;
   * // 数值再高就涉及到计算了。后期将计算公式贴出
   *
   * ```
   */
  number(n: number): string;
  /**
   *  ## 直接使用数值指定终端背景色颜色
   *
   * 后期有时间会出一个数值与色值的对照表
   *
   * @param n 终端颜色值，取值范围 `0 - 255`
   * @returns 返回 ANSI 颜色文本
   * @example
   *
   * ```ts
   * import { pen } from '@vvi/pen';
   *
   * pen.number(0)`黑色背景`;
   * pen.number(1)`红色背景`;
   * pen.number(2)`绿色背景`;
   * pen.number(3)`黄色背景`;
   * pen.number(4)`蓝草绿色背景`;
   * pen.number(5)`杨红色背景`;
   * pen.number(6)`青色背景`;
   * pen.number(7)`白色背景`;
   * pen.number(8)`亮黑色背景`;
   * pen.number(9)`亮红色背景`;
   * pen.number(10)`亮绿色背景`;
   * pen.number(11)`亮黄色背景`;
   * pen.number(12)`亮蓝草绿色背景`;
   * pen.number(13)`亮杨红色背景`;
   * pen.number(14)`亮青色背景`;
   * pen.number(15)`亮白色背景`;
   * // 数值再高就涉及到计算了。后期将计算公式贴出
   *
   * ```
   */
  bgNumber(n: number): string;
}

/**  所有可配置项  */
export type KindListKey = keyof FunctionKindList | keyof StringKindList;
