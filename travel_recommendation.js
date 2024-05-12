const btnSearch = document.getElementById('btnSearch');

function botonBusqueda()
{
    const input = document.getElementById('searchBarInput').value.toLowerCase();
    //const resultDiv = document.getElementById('recomendation1-description');
    //resultDiv.innerHTML = '';
    const resultDescriptionDiv = document.getElementById('recomendation1-description');
    resultDescriptionDiv.innerHTML = 'HOLA MUNDO';

    

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => 
      {
        console.log(data.countries)
        alert(input);

        const destino = data.countries.find(item => item.name.toLowerCase() === input);
        if (destino)
        {
            resultDescriptionDiv.innerHTML = destino.name;
            resultDescriptionDiv.innerHTML += `<img src="${destino.cities[0].imageUrl}" alt="hjh">`;

        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDescriptionDiv.innerHTML = 'An error occurred while fetching data.';
      });

}

btnSearch.addEventListener("click", botonBusqueda);

