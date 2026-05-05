// NAVIGATION LOGIC
function showSection(sectionId, btn) {
    // Hide all sections
    document.getElementById('emails-section').classList.add('hidden');
    document.getElementById('bodycam-section').classList.add('hidden');
    document.getElementById('logs-section').classList.add('hidden');

    // Show selected section
    document.getElementById(sectionId + '-section').classList.remove('hidden');

    // Update button styles
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Scroll to top of content area
    document.getElementById('content-area').scrollTop = 0;
}

// SECURITY: Disable Right-Click
document.addEventListener('contextmenu', event => event.preventDefault());

// SECURITY: Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.onkeydown = function(e) {
    if (e.keyCode == 123) { return false; } // F12
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; } // View Source
};
