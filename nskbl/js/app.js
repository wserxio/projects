'use strict';

function getRand() {
  return (Math.random() * 100).toFixed(0);
}

// request example
const request = [
  {
    name: 'РКО/Депозиты',
    markers: {
      psi: getRand(),
      done: getRand()
    }
  },
  {
    name: 'Ядро',
    markers: {
      psi: getRand(),
      done: getRand()
    }
  },
  {
    name: 'Кредиты',
    markers: {
      psi: getRand(),
      done: getRand()
    }
  },
  {
    name: 'Карты',
    markers: {
      psi: getRand(),
      done: getRand()
    }
  }
]

request.forEach((team) => {
  new TEAM_SPRINT({
    name: team.name,
    markers: {
      psi: team.markers.psi,
      done: team.markers.done
    }
  })
})