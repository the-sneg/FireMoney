const refs = {
  input: document.querySelector('#input_sum'),
  span: document.querySelector('#change_sum'),
};

refs.input.addEventListener('input', onInputRangeChange);

function onInputRangeChange() {
  const result = refs.input.value;
  refs.span.textContent = result;
}
