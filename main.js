const url = 'https://dog.ceo/api/breeds/image/random';
const dogImg = document.querySelector('[data-js="dog-img"]');
// console.log(dogImg);

const validateHTTPStatus = (dogData) => {
    if (!dogData.ok) {   //dogData.ok value here is TRUE
        throw new Error(`Image not found! HTTP error status ${dogData.status}`)
    }
    return dogData.json();
}

const setDogImg = ( { message:url } ) => {
    // the setAttribute() method will inject the url we fetched on the "src" attribute of the HTML
    dogImg.setAttribute('src', url);
}

const handleRequestError = (error) => {
    alert(error.message)
}


// the fetch() method makes a HTTP request and returns the data from the url that was passed as an argument. The fetch() method returns a promise.
fetch(url)
    .then( validateHTTPStatus )
    .then( setDogImg )
    .catch( handleRequestError )