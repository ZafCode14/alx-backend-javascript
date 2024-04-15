export default function cleanSet(set, startString) {
  let result = '';
  if (startString === '') {
    return '';
  }
  for (const item of set) {
    if (item.startsWith(startString)) {
      result += (result.length > 0 ? '-' : '') + item.substring(startString.length);
    }
  }
  return result;
}
