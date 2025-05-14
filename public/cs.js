fetch('cvData.json')
  .then(response => response.json())
  .then(userData => {
    document.querySelector(".nimi").textContent = userData.Name;
    document.querySelector(".job").textContent = userData.Job;
    document.querySelector(".age").textContent = "Vanus: " + userData.Age;
    document.querySelector(".email-text").textContent = userData.Email;
    document.querySelector(".phone-text").textContent = userData.Number;
    document.querySelector(".address-text").textContent = userData.Address;
  })
  .catch(error => {
    console.error("Viga andmete laadimisel:", error);
  });
