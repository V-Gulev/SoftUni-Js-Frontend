function solve() {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');

  const sentances = input.split('.').filter(sentance => sentance.trim() !== '');

  const paragraph = [];
  for (let sentance of sentances) {
    paragraph.push(sentance);

    if (paragraph.length >= 3) {
      appendParagraph(paragraph.join('.'));
      paragraph = [];
    }

  }

  if (paragraph.length > 0) {
    appendParagraph(paragraph.join('.'));
  }


  function appendParagraph(text){
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = text;
    output.appendChild(paragraphElement);
  }
}