import React from 'react'

export default function CardList() {
 
  fetch ("https://randomuser.me/api/?results=5&gender=male").then(loadResolve).then(logData).catch(loadReject);
 
  function loadResolve(response){return response.json()};
  function logData    (data)    {console.log(...data)};
  function logData    (data)    {console.log(data.results)};
  function loadReject (reject)  {console.log(reject)};
  
  return (
    <div>index</div>
  )
}

const opt = {
  result: 10,
  page: 1,
  seed: 'user-seed'
}


function loadUsers {

  fetch('https://randomuser.me/api/?results=${opt.result}&seed=${opt.seed}&page=${opt.page}')
  .then(data => data.json())
  .then(makeCards(result))
  .caych(error => console.error(error))
}

function makeCards(data){
  const list = querySelector('ul');
  for (let i = 0; i < data.length; i++) {
    list.append(makeCard(list[i]))
  }
}

function makeCard(user){
  const li = document.createElement('li');
  return li;
};
