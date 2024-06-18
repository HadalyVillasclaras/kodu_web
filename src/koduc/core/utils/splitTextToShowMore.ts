export const splitTextToShowMore = (text: string, limit: number): [string, string] => {
  if (text.length <= limit) {
    return [text, ''];
  }

  let cutOff = limit;
  while (cutOff < text.length && text[cutOff] !== '.') {
    cutOff++;
  }

  if (cutOff < text.length) {
    cutOff++;
  }

  const visibleText = text.slice(0, cutOff).trim();
  const hiddenText = text.slice(cutOff).trim();

  return [visibleText, hiddenText];
};
