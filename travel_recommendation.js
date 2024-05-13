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
           console.log("entrada:"+input)
           console.log("pais:"+data[input][1].name)
           console.log(data[input][1])
           
           if(input==="countries")
           {
              result1Div.innerHTML = data[input][0].name;
              result1Div.innerHTML += `<img src="${data[input][0].cities[0].imageUrl}" alt="imagen">`;

              var options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };;
              switch(data[input][1].name)
               {
                case "Australia":
                    options = { timeZone: 'Australia/Sydney', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
                  break;
                case "Brazil":
                    options = { timeZone: 'America/Sao_Paulo', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
                  break;
                case "Japan":
                    options = { timeZone: "Japan", hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
                  break;
                default:
                    options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
              } 
              
              console.log("Timezone: "+options.timeZone);
              const countryTime = new Date().toLocaleTimeString('en-US', options);
              console.log("Current time in "+data[input][1].name+" : ", countryTime);
           }
           else
           {
               result1Div.innerHTML = data[input][0].name;
              result1Div.innerHTML += `<img src="${data[input][0].imageUrl}" alt="imagen">`;
           }

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


const btnReset = document.getElementById('btnReset');

function botonBorrar()
{
    const result1Div = document.getElementById('result1');
    result1Div.innerHTML = '';

    const result2Div = document.getElementById('result2');
    result1Div.innerHTML = '';

}

btnReset.addEventListener("click", botonBorrar);
