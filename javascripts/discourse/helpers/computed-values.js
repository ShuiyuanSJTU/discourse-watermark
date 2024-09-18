export function getComputedColor(element, color) {
  element.style.color = color;
  return window.getComputedStyle(element, null).getPropertyValue("color");
}

export function getComputedFont(element, font) {
  element.style.font = font;

  const computedStyle = window.getComputedStyle(element, null);

  const fontSize = computedStyle.getPropertyValue("font-size");
  const fontFamily = computedStyle.getPropertyValue("font-family");
  const fontStyle = computedStyle.getPropertyValue("font-style");
  const fontVariant = computedStyle.getPropertyValue("font-variant");
  const fontWeight = computedStyle.getPropertyValue("font-weight");

  return `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize} ${fontFamily}`.trim();
}
