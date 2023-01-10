
let form = document.forms[0];
console.log(form);

console.log(form.elements[0])
console.log(form.elements[1])
console.log(form.elements[2])

console.log(form.elements.fname)
console.log(form.elements.lname)
console.log(form.elements.submit)

    document.getElementById('submit').addEventListener('click', (event) => {
        event.preventDefault();
      
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
      
        if (fname === '' || lname === '') {
            return false
        } else {
          const fnameItem = document.createElement('li');
          fnameItem.textContent = fname;
          const lnameItem = document.createElement('li');
          lnameItem.textContent = lname;
      
          const userList = document.querySelector('.usersAnswer');
          userList.appendChild(fnameItem);
          userList.appendChild(lnameItem);
        }
      });