const addButton = document.getElementById('add-button');
const nameInput = document.getElementById('name');
const genderInput = document.getElementById('gender');
const nameList = document.getElementById('name-list');

function addName() {
  const name = nameInput.value;
  const gender = genderInput.value;

  if (name.trim() === '') {
    alert('Please enter a name.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = `${name} (${gender})`;
  nameList.appendChild(li);

  nameInput.value = '';
  genderInput.value = 'male';
}

addButton.addEventListener('click', addName);
