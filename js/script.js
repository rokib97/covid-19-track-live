const loadWorldWide = () => {
  fetch("https://disease.sh/v3/covid-19/all")
    .then((res) => res.json())
    .then((data) => displayWorldWide(data));
};

const displayWorldWide = (data) => {
  // console.log(data);
  document.getElementById("total-cases").innerHTML = `
      <h3 class="text-center">Total Cases</h3>
      <h1  class="text-center text-primary">+${data.cases / 1000}k</h1>
      <h3 class="text-center">Today: +${data.todayCases / 1000}k</h3>
  `;
  document.getElementById("total-recover").innerHTML = `
      <h3 class="text-center">Total Recovered</h3>
      <h1 id="total" class="text-center text-success">+${
        data.recovered / 1000
      }k</h1>
      <h3 class="text-center">Today: +${data.todayRecovered / 1000}k</h3>
  `;
  document.getElementById("total-death").innerHTML = `
      <h3 class="text-center">Total Deaths</h3>
      <h1 id="total" class="text-center text-danger">+${
        data.deaths / 1000
      }k</h1>
      <h3 class="text-center">Today: +${data.todayDeaths / 1000}k</h3>
  `;
};

const loadBangladesh = () => {
  fetch("https://disease.sh/v3/covid-19/countries/bangladesh")
    .then((res) => res.json())
    .then((data) => displayBangladesh(data));
};
loadBangladesh();

const displayBangladesh = (data) => {
  // console.log(data);
  document.getElementById("total-cases").innerHTML = `
      <h3 class="text-center">Total Cases</h3>
      <h1  class="text-center text-primary">+${data.cases / 1000}k</h1>
      <h3 class="text-center">Today: +${data.todayCases / 1000}k</h3>
  `;
  document.getElementById("total-recover").innerHTML = `
      <h3 class="text-center">Total Recovered</h3>
      <h1 id="total" class="text-center text-success">+${
        data.recovered / 1000
      }k</h1>
      <h3 class="text-center">Today: +${data.todayRecovered / 1000}k</h3>
  `;
  document.getElementById("total-death").innerHTML = `
      <h3 class="text-center">Total Deaths</h3>
      <h1 id="total" class="text-center text-danger">+${
        data.deaths / 1000
      }k</h1>
      <h3 class="text-center">Today: +${data.todayDeaths / 1000}k</h3>
  `;
};

const loadAllCountry = () => {
  const inputElement = document.getElementById("input-field");
  const inputValue = inputElement.value;
  inputElement.value = "";
  if (inputValue == "" || !isNaN(inputValue)) {
    return alert("Input is not that much valid");
  } else {
    const url = `https://disease.sh/v3/covid-19/countries/${inputValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayAllCountry(data));
  }
};

const displayAllCountry = (data) => {
  console.log(data);
  document.getElementById("total-cases").innerHTML = `
  <h3 class="text-center">Total Cases</h3>
  <h1  class="text-center text-primary">+${data.cases / 1000}k</h1>
  <h3 class="text-center">Today: +${data.todayCases / 1000}k</h3>
`;
  document.getElementById("total-recover").innerHTML = `
  <h3 class="text-center">Total Recovered</h3>
  <h1 id="total" class="text-center text-success">+${
    data.recovered / 1000
  }k</h1>
  <h3 class="text-center">Today: +${data.todayRecovered / 1000}k</h3>
`;
  document.getElementById("total-death").innerHTML = `
  <h3 class="text-center">Total Deaths</h3>
  <h1 id="total" class="text-center text-danger">+${data.deaths / 1000}k</h1>
  <h3 class="text-center">Today: +${data.todayDeaths / 1000}k</h3>
`;
};
