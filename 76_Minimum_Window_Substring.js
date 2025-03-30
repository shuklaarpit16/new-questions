var minWindow = function (s, t) {
  if (!s || !t) return "";

  let tCount = new Map();
  for (let char of t) {
    tCount.set(char, (tCount.get(char) || 0) + 1);
  }

  let requiredChars = tCount.size;
  let left = 0,
    right = 0;
  let formed = 0;
  let windowCount = new Map();
  let minLen = Infinity;
  let minWindow = "";

  while (right < s.length) {
    let char = s[right];
    windowCount.set(char, (windowCount.get(char) || 0) + 1);

    if (tCount.has(char) && windowCount.get(char) === tCount.get(char)) {
      formed++;
    }

    while (left <= right && formed === requiredChars) {
      let windowSize = right - left + 1;
      if (windowSize < minLen) {
        minLen = windowSize;
        minWindow = s.substring(left, right + 1);
      }

      let leftChar = s[left];
      windowCount.set(leftChar, windowCount.get(leftChar) - 1);
      if (
        tCount.has(leftChar) &&
        windowCount.get(leftChar) < tCount.get(leftChar)
      ) {
        formed--;
      }

      left++;
    }

    right++;
  }

  return minWindow;
};
