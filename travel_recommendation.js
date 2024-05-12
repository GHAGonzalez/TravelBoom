const btnSearch = document.getElementById('btnSearch');

function botonBusqueda()
{
    const input = document.getElementById('searchBarInput').value.toLowerCase();
    //const resultDiv = document.getElementById('recomendation1-description');
    //resultDiv.innerHTML = '';
    const result1Div = document.getElementById('result1');
    result1Div.innerHTML = 'input';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => 
      {
        
        //alert(input);

        //const destino = data[0].find(item => item[input].toLowerCase() === input);
        //console.log(destino)
        //console.log(data)


        if(data.hasOwnProperty(input))
        {
           alert("field existe");
           console.log(data[input][0])
 
           result1Div.innerHTML = data[input][0].name;
           result1Div.innerHTML += `<img src="${data[input][0].cities[0].imageUrl}" alt="imagen">`;
        }
        else
           alert("field no existe");
 
      })
      .catch(error => {
        console.error('Error:', error);
        result1Div.innerHTML = 'An error occurred while fetching data.';
      });

}

btnSearch.addEventListener("click", botonBusqueda);

