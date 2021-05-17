//Fetching data using url
url = 'https://v6.exchangerate-api.com/v6/a129bbb3815a36f557c59003/latest/USD'

let fetchfromUrl = async () => {
    let dataFetch = await fetch(url);
    let jsonData = await dataFetch.json();

    let displayData = (data) => {
        let trData = document.querySelector('#rowData')
        let i = 1;
        for (let element in data.conversion_rates) {
            
            let tr = domMachine('tr')
            

            let th = domMachine('th','text-center');
            th.setAttribute('scope','row');
            th.innerHTML = i++; 

            let td1 = domMachine('td','text-center');
            td1.innerHTML = `1 USD`

            let td2 = domMachine('td','text-end');
            td2.innerHTML = `${data.conversion_rates[element]}`

            let td3 = domMachine('td','text-center');
            td3.innerHTML = `${element}`



            trData.append(tr)
            tr.append(th)
            tr.append(td1)
            tr.append(td2)
            tr.append(td3)
            


        }
    }
    displayData(jsonData);
}


fetchfromUrl();

//DomMachine function 
let domMachine = ((element, className = "", elementId = "") => {
    let domMachineElement = document.createElement(element)
    domMachineElement.setAttribute('class',className)
    domMachineElement.setAttribute('id',elementId)
    return domMachineElement;
})

