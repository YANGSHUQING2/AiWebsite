function searchWebsite() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const websiteCards = document.querySelectorAll('.website-card');

    websiteCards.forEach(card => {
        const websiteName = card.querySelector('h2').textContent.toLowerCase();
        if (websiteName.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
