// Example data. Replace with real data or fetch from an API if desired
const members = [
    { name: "SpeedRacer", wpm: 105 },
    { name: "NitroNinja", wpm: 99 },
    { name: "TypeMaster", wpm: 112 },
    { name: "QuickKey", wpm: 90 }
];

const stats = {
    races: 12845,
    avgWPM: 101.5,
    rank: 42
};

function renderMembers() {
    const ul = document.getElementById('team-members');
    ul.innerHTML = '';
    members.forEach(member => {
        const li = document.createElement('li');
        li.textContent = `${member.name} (${member.wpm} WPM)`;
        ul.appendChild(li);
    });
}

function renderStats() {
    const statsDiv = document.getElementById('team-stats');
    statsDiv.innerHTML = `
        <div><strong>Total Races:</strong> ${stats.races.toLocaleString()}</div>
        <div><strong>Avg WPM:</strong> ${stats.avgWPM}</div>
        <div><strong>Team Rank:</strong> #${stats.rank}</div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    renderMembers();
    renderStats();

    // Join form functionality
    const form = document.getElementById('join-form');
    const message = document.getElementById('form-message');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('nt-username').value.trim();
        if (username.length < 3) {
            message.style.color = 'red';
            message.textContent = "Please enter a valid Nitro Type username.";
            return;
        }
        message.style.color = 'gold';
        message.textContent = `Thanks, ${username}! Your request to join has been received.`;
        form.reset();
    });
});
