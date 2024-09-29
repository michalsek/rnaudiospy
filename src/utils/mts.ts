export default function mts(
  inStrs: TemplateStringsArray,
  ...strArgs: (string | number)[]
): string {
  let outStr = '';

  for (let i = 0; i < inStrs.length; i++) {
    outStr += inStrs[i] + (strArgs[i]?.toString() || '');
  }

  return outStr;
}
