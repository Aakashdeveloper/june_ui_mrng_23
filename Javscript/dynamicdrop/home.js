const url = "http://3.17.216.66:4000";

const getCity = async() => {
    let response = await fetch(`${url}/location`,{method:'GET'})
    let data = await response.json()
    for(i=0;i<data.length;i++){
        let element = document.createElement('option') // <option></option>
        let text = document.createTextNode(data[i].state) //delhi
        element.appendChild(text)//<option>delhi</option>
        element.value = data[i].state_id //<option value="1">delhi</option>
        document.getElementById('city').appendChild(element)
        //<select><option value="1">delhi</option></select>
    }
}


async function getRest(){
    let cityId = document.getElementById('city').value;
    let rest = document.getElementById('restSelect');
    while(rest.length > 0){
        rest.remove(0)
    }
    let response = await fetch(`${url}/restaurant?stateId=${cityId}`,{method:'GET'})
    let data = await response.json();
    for(i=0;i<data.length;i++){
        let element = document.createElement('option');
        let text = document.createTextNode(`${data[i].restaurant_name}-${data[i].address}`);
        element.appendChild(text)
        rest.appendChild(element);
    }

}

// const getCity = () => {
//     fetch(`${url}/location`,{method:'GET'})
//     .then((res) => res.json())
//     .then((data) => {
//        for(i=0;i<data.length;i++){
//            let element = document.createElement('option') // <option></option>
//            let text = document.createTextNode(data[i].state) //delhi
//            element.appendChild(text)//<option>delhi</option>
//            element.value = data[i].state_id //<option value="1">delhi</option>
//            document.getElementById('city').appendChild(element)
//            //<select><option value="1">delhi</option></select>
//        }
//     })
// }