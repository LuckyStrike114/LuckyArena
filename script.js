document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('search-box');
    const tournamentsList = document.getElementById('tournaments-list');
  
    // Example tournament data
    const tournaments = [
      { name: 'Lucky\'s Turnir 1', participants: '50', mode: 'R', rank: 'Gold', prizePool: '€1000', entryFee: '€10' },
      { name: 'Mjesečni CUP', participants: '32', mode: 'R', rank: 'Platinum', prizePool: '€1500', entryFee: '€15' },
      { name: 'Lucky\'s Turnir 2', participants: '64', mode: 'R', rank: 'Diamond', prizePool: '€2000', entryFee: '€20' },
      { name: 'Turnir za Freebies', participants: '98', mode: 'R', rank: 'Emerald', prizePool: '€100', entryFee: '€0' },
    ];
  
    // Populate the tournaments table with the example data
    function populateTournamentsList() {
      tournaments.forEach((tournament) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${tournament.name}</td>
          <td>${tournament.participants}</td>
          <td>${tournament.mode}</td>
          <td>${tournament.rank}</td>
          <td>${tournament.prizePool}</td>
          <td>${tournament.entryFee}</td>
        `;
        tournamentsList.appendChild(tr);
      });
    }
  
    // Filter the tournaments table based on the search query
    function filterTournaments() {
      const query = searchBox.value.toLowerCase();
      tournamentsList.innerHTML = '';
      tournaments.forEach((tournament) => {
        if (tournament.name.toLowerCase().includes(query)) {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${tournament.name}</td>
            <td>${tournament.participants}</td>
            <td>${tournament.mode}</td>
            <td>${tournament.rank}</td>
            <td>${tournament.prizePool}</td>
            <td>${tournament.entryFee}</td>
          `;
          tournamentsList.appendChild(tr);
        }
      });
    }
  
    // Initialize the tournaments table with the example data
    populateTournamentsList();
  
    // Update the tournaments table when the search query changes
    searchBox.addEventListener('input', filterTournaments);
  });
