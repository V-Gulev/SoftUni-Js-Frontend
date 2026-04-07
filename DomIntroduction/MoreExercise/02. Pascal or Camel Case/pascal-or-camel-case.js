function solve() {
  const textEl = document.getElementById('text');
  const namingConvention = document.getElementById('naming-convention');
  const resultEl = document.getElementById('result');

  switch (namingConvention.value) {
    case "Camel Case":
      resultEl.textContent = toCamelCase(textEl.value);
      break;
    case "Pascal Case":
      resultEl.textContent = toPascalCase(textEl.value);
      break;
    default:
        resultEl.textContent = 'Error!';
      break;
  }


  function toCamelCase(text) {
    const words = text.split(' ');
    const result = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
    return result;
  }

  function toPascalCase(text) {
    const words = text.split(' ');
    const result = words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join('');
    return result;
  }

}