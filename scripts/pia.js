// Datos del usuario de GitHub
const GITHUB_USERNAME = 'GonzalezPi'; // Reemplaza 'tu_usuario' con tu nombre de usuario real

// Obtener datos del perfil de GitHub
fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
  .then(response => response.json())
  .then(data => {
    document.getElementById('nombre').innerText = data.name;
    document.getElementById('bio').innerText = data.bio;
    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('github-link').href = data.html_url;
  })
  .catch(error => console.error('Error al obtener los datos del perfil:', error));

// Obtener repositorios del usuario
fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
  .then(response => response.json())
  .then(repos => {
    const repositoriosContainer = document.getElementById('repositorios');
    
    repos.forEach(repo => {
      const repoCard = document.createElement('div');
      repoCard.classList.add('card');
      
      repoCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'Sin descripción'}</p>
        <a href="${repo.html_url}" target="_blank">
          <button>Ver en GitHub</button>
        </a>
      `;
      
      repositoriosContainer.appendChild(repoCard);
    });
  })
  .catch(error => console.error('Error al obtener los repositorios:', error));
