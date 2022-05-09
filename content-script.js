window.addEventListener('load', e => {
  disableSendButton()
})

function disableSendButton() {
  const candidates = document.querySelectorAll('div[role="button"][aria-label^="送信"]');
  if (candidates && candidates.length === 1) {
    const button = candidates.item(0);
    button.style["pointerEvents"] = 'none';
  }
  setTimeout(disableSendButton, 500)
}

