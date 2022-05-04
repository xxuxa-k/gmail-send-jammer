window.addEventListener('load', e => {
  const candidates = document.querySelectorAll('div[role="button"][aria-label^="送信"]');
  if (candidates.length === 1) {
    const button = candidates.item(0);
    button.style["pointerEvents"] = 'none';
  }
})
