/* fecth ("url")*/

/*    (           base url                )( end point ) */
/*    !protocol!   subdomain  ! domain     ! endpoint !*/
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error)
    });

/* function fetchToDos() {} */


// Async await
const fetchToDos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const data = await response.json();
    return data;    
};    

console.log(await fetchToDos());


const fetchAlbums = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums")
    const data = await response.json();
    return data;    
};    

console.log(await fetchAlbums());

    /* teenus - praktika
    1) õpilane - sais
    2) ettevõte - inforegister
    3) auto reg. nr. - mnt.ee
    */