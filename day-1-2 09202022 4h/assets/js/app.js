var countries = [
    { id: 0 , name:"Tunisia" },
    { id: 1 , name:"France" },
    { id: 2 , name:"Germany" },
    { id: 3 , name:"USA" },
    { id: 4 , name:"Canada" }
    
]

var vols = [
    { name:"Tunisair" , prix:450, start: 0, destination: 1 },
    { name:"Tunisair" , prix:520, start: 1, destination: 0 },
    { name:"Turkish" ,  prix:1200, start: 1, destination: 2 },
    { name:"Air dubai" , prix:950, start: 1, destination: 4 },
    { name:"Air france" , prix:350, start: 4, destination: 3 },
    
]


var searchByKeywordsElement = document.getElementById('key-search');
var countriesElement = document.getElementById('countries');
var priceElement = document.getElementById('price-range');
var selectedPriceElement = document.getElementById('selected-price');
var dataElement = document.getElementById('data');



var keyWordsValue='';
var countryValue = 0;
var SelectedPrice = getMaxPrice();



searchByKeywordsElement.addEventListener('keyup',function(event){
    const value = event.target.value;

    keyWordsValue = value;

    showDATA();



})


countriesElement.addEventListener('change',function(event){
    const value = event.target.value;

    console.log(value);

    countryValue = value;

    showDATA();
    

})



function getMaxPrice(){
    let max = 0;

    vols.map( (v)=>{  if( v.prix > max ) { max = v.prix } } );
    
    return max;
}


priceElement.addEventListener('change',function(event){
    const value = Number(event.target.value);


    console.log(value);

    let max = getMaxPrice();

  
    // 100  max
    // val  ? 

    let res = (  (value * max)  /100 );

    console.log(res);

    selectedPriceElement.innerHTML=res+'$';

    SelectedPrice = res;

    showDATA();
    
})


function initDATA(){
    let blocHTML='';

    countries.map( ( country )=>{
        blocHTML = blocHTML + `<option value="${ country.id }">${country.name}</option>`;
    })

    countriesElement.innerHTML = blocHTML;

}




initDATA();


function getCountryByID(id){
    let country = null;


    country = countries.filter( (c)=> c.id == id )[0].name;

    return country;

}


function  showDATA(){

    let blocHTML = '';

    vols.filter( v =>

        (  v.name.toLowerCase().indexOf( keyWordsValue.toLowerCase() ) != -1   )

        &&

        ( v.start == countryValue )

        &&

        ( v.prix <= SelectedPrice )

    )  .map( (vol)=>{
        blocHTML = blocHTML + `
        <div class="row mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h3>${vol.name}</h3>
                            <p>
                                <strong>${ getCountryByID(vol.start) }</strong> -  <strong>${ getCountryByID(vol.destination) }</strong>
                            </p>

                            <h3 class="text-success">${vol.prix}$</h3>
                        </div>
                    </div>
                </div>
                `;
    })


    dataElement.innerHTML = blocHTML;



} 


showDATA();
