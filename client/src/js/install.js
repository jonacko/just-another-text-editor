const installBtn = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {

      // Store the triggered events
    window.deferredPrompt = event;

        // Remove the hidden class from the button.
    installBtn.classList.toggle('hidden', false);
});

installBtn.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }
      // Show prompt
    promptEvent.prompt();

      // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;

    installBtn.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  
    // Clear prompt
    window.deferredPrompt = null;
});
