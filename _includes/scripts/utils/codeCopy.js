var highlightBlocks = document.querySelectorAll('pre.highlight');

highlightBlocks.forEach(function (codeBlock) {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    return;
  }

  var copyButton = document.createElement('button');
  copyButton.className = 'copy-code-button';
  copyButton.type = 'button';
  copyButton.ariaLabel = 'Copy code to clipboard';
  
  // clipboard icon
  var icon = document.createElement('i');
  icon.className = 'copy-code-icon'
  icon.classList.add('far')
  icon.classList.add('fa-clipboard')
  copyButton.appendChild(icon)

  codeBlock.prepend(copyButton);
  copyButton.addEventListener('click', function () {
    var code = codeBlock.querySelector('td.rouge-code').innerText.trim();
    window.navigator.clipboard.writeText(code);
    
    icon.style.display = 'none'
    copyButton.classList.add('copied');

    setTimeout(function () {
      icon.style.display = ''
      copyButton.classList.remove('copied');
    }, 1500);
  });
});