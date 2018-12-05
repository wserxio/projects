function TEAM_SPRINT(data) {
  this.data = data;

  // template
  const app             = document.querySelector('._team-list'),
        newTeamTemplate = document.querySelector('._team').cloneNode(true);
  // team title
  newTeamTemplate.querySelector('h2').innerText = this.data.name;

  // Export team to app
  app.appendChild(newTeamTemplate);
  // markers
  _data = this.data;

  newTeamTemplate.querySelector('._psi').style.height = _data.markers.psi + '%';
  newTeamTemplate.querySelector('._psi').dataset.height = _data.markers.psi + '%';

  newTeamTemplate.querySelector('._done').style.height = _data.markers.done + '%';
  newTeamTemplate.querySelector('._done').dataset.height = _data.markers.done + '%';

  // changePSiColor
  function changePsiColor(object) {
    (object.style.height < '90%') ? object.style.background = 'red' : 
    object.style.height >= '90%' ? object.style.background = 'linear-gradient(#fff700 0%, #c1b000 100%)' :
    object.style.background = 'transparent';
  }
  // changeDoneColor
  function changeDoneColor(object) {
    ( (object.style.height > '0%') && (object.style.height < '50%') ) ? object.style.background = 'linear-gradient(#ff002f 0%, #b30021 100%)' : 
    ( (object.style.height > '50%') && (object.style.height < '75%') ) ? object.style.background = 'linear-gradient(#fff700 0%, #c1b000 100%)' :
    object.style.height >= '75%' ? object.style.background = 'linear-gradient(#00ff43 0%, #009828 100%)' :
    object.style.background = 'transparent';
  }

  document.addEventListener('DOMContentLoaded', () => {
    // psi
    _psiColumns = document.querySelectorAll('._psi');
    _psiColumns.forEach(_element => {
      changePsiColor(_element);
    });
    // psi
    _doneColumns = document.querySelectorAll('._done');
    _doneColumns.forEach(_element => {
      changeDoneColor(_element);
    });
  })
  
}