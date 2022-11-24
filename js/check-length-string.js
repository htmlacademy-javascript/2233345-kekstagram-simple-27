function isAllowedLength(string, maxValue) {
  return String(string).length <= maxValue;
}
isAllowedLength('keks', 9);

export { isAllowedLength };
