const refsDate = {
  input: document.querySelector('#input_date'),
  span: document.querySelector('#change_date'),
};

refsDate.input.addEventListener('input', onInputRangeChange);

function onInputRangeChange() {
  const result = refsDate.input.value;
  refsDate.span.textContent = result;
}
