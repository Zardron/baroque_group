export default function getBorder(
  isSelected,
  isSelectedStartOrEnd,
  isWithinHoverRange,
  isDisabled
) {
  return ({
    selectedFirst,
    selectedLast,
    normalColor,
    selectedColor,
    rangeHoverColor,
    disabledColor,
  }) => {
    if (isSelectedStartOrEnd) {
      return selectedFirst, selectedLast;
    } else if (isSelected) {
      return selectedColor;
    } else if (isWithinHoverRange) {
      return rangeHoverColor;
    } else if (isDisabled) {
      return disabledColor;
    } else {
      return normalColor;
    }
  };
}
