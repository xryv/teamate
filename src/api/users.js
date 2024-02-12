async function fetchPlayers() {
    try {
        const response = await fetch('/api/users?role=player');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const players = await response.json();
        displayPlayers(players);
    } catch (error) {
        console.error('Error fetching players:', error);
        // Handle errors, e.g., show a message to the user
    }
}
