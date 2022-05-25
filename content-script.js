window.addEventListener('load', e => {
  disableSendButton()
})

function disableSendButton() {
  const candidates = document.querySelectorAll('div[role="button"][aria-label^="送信"]');
  if (candidates && candidates.length === 1) {
    const button = candidates.item(0);
    const parent = button.parentElement;
    button.style["pointerEvents"] = 'none';
    parent.style["cursor"] = 'not-allowed';
    parent.classList.add('gmail-send-jammer-tooltip');
    parent.setAttribute('data-tooltip', 'Gmail Draft Checkerから送信してください');
  }
  setTimeout(disableSendButton, 500)
}

