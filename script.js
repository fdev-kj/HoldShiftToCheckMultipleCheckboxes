const item = document.querySelectorAll('.card__input');
let elIndexFirstChecked = 0;
let elIndexWithShift = 0;

item.forEach((el, key) => {
  el.addEventListener('click', function (e) {
    if (e.shiftKey) {
      elIndexWithShift = key;
      checkCheckboxes(elIndexFirstChecked, elIndexWithShift)
      elIndexFirstChecked = key;
    } else {
      elIndexFirstChecked = key;
    }
  })
})

const sortIndex = (firstIndex, secondIndex) => {
  const x = secondIndex;
  if (firstIndex > secondIndex) {
    secondIndex = firstIndex;
    firstIndex = x;
  }
  return {
    lower: firstIndex,
    bigger: secondIndex
  }
}

const checkCheckboxes = (firstIndex, secondIndex) => {
  const value = sortIndex(firstIndex, secondIndex);

  item.forEach((el, key) => {
    if (key > value.lower && key < value.bigger) {
      el.checked = true;
    }
  })
} 