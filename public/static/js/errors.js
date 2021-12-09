function handleErrors() {
  const urlParams = new URLSearchParams(window.location.search);
  const errors_json = urlParams.get('errors');
  const errors = JSON.parse(errors_json);
  const errors_div = document.body.querySelector('.errors');
  for (const error of errors) {
    const error_div = document.createElement('div');
    errors_div.append(error_div);
    error_div.append(error);
  }
}
document.addEventListener("DOMContentLoaded", handleErrors);
