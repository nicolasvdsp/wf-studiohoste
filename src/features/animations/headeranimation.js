function animateHeader() {
  const heading = document.querySelector(".heading-animation");
  if (!heading) return;
  const firstWords = ["Verfijnd", "Esthetische"]
  const secondWords = ["interieur", "architectuur"]

  const headingText = heading.textContent.trim();
  const words = headingText.split(' ');

  if (words.length >= 2) {
    const firstWord = words[0]
    const secondWord = words[1]

    const firstSpan = document.createElement('span');
    const secondSpan = document.createElement('span');
    const spanContainer = document.createElement('div');

    firstSpan.textContent = `${firstWord}`;
    secondSpan.textContent = `${secondWord}`;

    firstSpan.classList.add('word1');
    secondSpan.classList.add('word2');
    spanContainer.classList.add('span-container');

    const remainingText = words.slice(2).join(' ');
    heading.textContent = '';

    heading.appendChild(spanContainer);
    spanContainer.appendChild(firstSpan);
    spanContainer.appendChild(document.createTextNode(' '));
    spanContainer.appendChild(secondSpan);
    heading.appendChild(document.createTextNode(remainingText));

    let firstIndex = 0;
    let secondIndex = 0;

    setTimeout(() => {
      firstSpan.classList.add('cycle');
      setTimeout(() => {
        secondSpan.classList.add('cycle');
      }, 300);

      setInterval(() => {
        firstIndex = (firstIndex + 1) % firstWords.length;
        firstSpan.textContent = firstWords[firstIndex];

        setTimeout(() => {
          secondIndex = (secondIndex + 1) % secondWords.length;
          secondSpan.textContent = secondWords[secondIndex];
        }, 300);

      }, 6000);
    }, 3000);

  }
}

export default animateHeader;