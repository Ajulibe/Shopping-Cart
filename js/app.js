//eventlisteners

EventFunction();


function EventFunction() {

    //adding event listeners to the cart button
    document.querySelector('#courses-list').addEventListener('click', myClick);
    //add local storage to the cart on load
    document.addEventListener('DOMContentLoaded', localStorageCart);
}






function myClick(event) {
    event.preventDefault();
    let cartContent = event.target.parentElement.parentElement;
    const Target = event.target
        //add the price
    let price = Target.parentElement.querySelector('span').textContent;

    //add the image to the image side
    let Image = Target.parentElement.parentElement.querySelector('img').src;


    //add the name
    let Name = Target.parentElement.querySelector('h4').textContent;

    let cartTable = document.querySelector('#cart-content').children;

    let tableBody = document.querySelector('tbody')
        //create a table row element
    let Row = document.createElement('tr')
        //append the table row to the table body
    tableBody.appendChild(Row)
        //creating a remove button
        //create an anchor element first
    let ID = Target.parentElement.querySelector('a').getAttribute('data-id')


    let anchor = document.createElement('a');
    anchor.textContent = 'x';
    anchor.className = 'remove';
    anchor.setAttribute('data-id', ID)



    //create a table data tag
    dataImage = document.createElement('td');
    dataImage.classList = 'ImageClass';
    dataName = document.createElement('td');
    dataName.classList = 'NameClass';
    dataprice = document.createElement('td');
    dataprice.classList = 'priceClass'
    dataAnchor = document.createElement('td')
    dataAnchor.classList = 'anchorClass'
        //create an image tag
    ImageTag = document.createElement('img');
    ImageTag.classList = 'course-image u-full-width'
    ImageTag.src = Image;
    //append the image tag to the td for image
    dataImage.appendChild(ImageTag)

    // //add the tabble data to the table Row
    Row.appendChild(dataImage);

    Row.appendChild(dataName);
    Row.appendChild(dataprice);
    Row.appendChild(dataAnchor)

    //append the elements to the table data
    //this method removes a child from its parents
    // dataImage.appendChild(Image);
    // dataName.appendChild(Name);
    // dataprice.appendChild(price);
    dataAnchor.appendChild(anchor)
        //Using textContent approach
    dataName.textContent = Name;
    dataprice.textContent = price;





    addstoreLocal();
    //add content to local storage//we need text content,price,name
    function addstoreLocal() {

        let cartContent = event.target.parentElement.parentElement;
        const Target = event.target
        let price = Target.parentElement.querySelector('span').textContent;

        //add the image to the image side
        let Image = Target.parentElement.parentElement.querySelector('img').src;

        let ID = Target.parentElement.querySelector('a').getAttribute('data-id')


        //add the name
        let Name = Target.parentElement.querySelector('h4').textContent;

        myCart = getstoreLocal();


        let Products = {
            Course: Image,
            Name: Name,
            Price: price,
            id: ID,


        };

        myCart.push(Products);


        localStorage.setItem('myCart', JSON.stringify(myCart))


    }

}

//get local storage content
function getstoreLocal() {
    //     //working with Local Storage
    const LocalStorageItem = localStorage.getItem('myCart');
    let myCart;

    if (LocalStorageItem === null) {
        myCart = []
    } else {
        myCart = JSON.parse(LocalStorageItem);
    }

    return myCart;

}







function localStorageCart(LocalStorageItem) {
    let myCart = getstoreLocal();
    //     //get the elements stored in the local storage
    //     let Row = document.createElement('tr')
    // let productName = JSON.parse(localStorage.getItem('myCart'))
    // console.log(typeof productName)
    // console.log(myCart)
    //create a table data for each element in the array




    // let Course = myCart.map(function(item) { return item.Course });
    // console.log(Course)
    // let Name = myCart.map(function(item) { return item.Name });
    // console.log(Name)
    // let Price = myCart.map(function(item) { return item.Price });
    // console.log(Price)



    //working on just the image
    myCart.forEach(element => {
        //create an anchor element first
        let anchor = document.createElement('a');
        anchor.textContent = 'x';
        anchor.className = 'remove';

        //creare image row
        let ImageRow = document.createElement('tr')
        ImageRow.classList = 'course-image u-full-width'
        ImageRow.innerHTML = `<td> <img src = ${element.Course} class = 'course-image u-full-width'> </td> 
         <td> ${element.Name} </td>
         <td> ${element.Price} </td> 
         <td> <a class='remove' data-id = ${element.id} >x</a></td>`






        let tableBody = document.querySelector('tbody')
        tableBody.appendChild(ImageRow)


    });

    // //working on the Names
    // Name.forEach(element => {
    //     let NameStore = document.createElement('td');
    //     NameStore.classList = 'namestore'
    //     NameStore.textContent = element


    //     //create name row
    //     appendableimage = document.querySelector('.appendableimage')
    //     appendableimage.appendChild(NameStore)






    // });

    // //working on the price
    // //working on the Names
    // Price.forEach(element => {
    //     let PriceStore = document.createElement('td');
    //     PriceStore.classList = 'priceestore'
    //     PriceStore.textContent = element


    //     //create name row
    //     let PriceRow = document.createElement('tr')
    //     PriceRow.appendChild(PriceStore)
    //     PriceRow.classList = 'appendablePrice'
    //     console.log(PriceRow)



    // });







}


// let Image = productName.Name;
//     let Name = productName[1];
//     let Price = productName[2];


//     dataImage = document.createElement('td');

//     dataName = document.createElement('td');

//     dataprice = document.createElement('td');

//     dataAnchor = document.createElement('td')

//     ImageTag = document.createElement('img');
//     dataImage.appendChild(ImageTag)

//     ImageTag.src = ImageTag;
//     dataName.textContent = Name;
//     dataprice.textContent = Price;
//     // console.log(dataImage)
//     // console.log(dataName)
//     // console.log(dataprice)
//     console.log(myCart)






//  myCart.forEach(cartFunction);

// // function cartFunction(item) {

// //     let data = document.createElement('td')
// //     data.appendChild(item);




















//remove item from cart
removeFromCart();

function removeFromCart() {
    //select the shopping cart
    let shoppingCart = document.querySelector('#shopping-cart')

    //adding an event listener in the shoppin cart
    shoppingCart.addEventListener('click', myClick);

    function myClick(event) {
        let courseId, course;

        if (event.target.classList.contains('remove')) {
            let cartContent = event.target.parentElement.parentElement;

            event.target.parentElement.parentElement.remove()
            course = event.target.parentElement.parentElement;
            courseId = course.querySelector('a').getAttribute('data-id')

        }



        //remove from local storage
        removeEachLocal(courseId);
    }

}

function removeEachLocal(id) {

    let myCart = getstoreLocal();
    console.log(myCart)

    // //we need to find the index of the element to be able to use splice method

    // //let index = i
    // for (var i = 0; i < myCart.length; i++) {
    //     if (myCart[i].id === id) {
    //         let newCart = myCart.splice(i, 1);

    //         console.log(myCart)
    //         localStorage.setItem('myCart', JSON.stringify(myCart))
    //     }


    // }

    //using the foreach method//note foreach fins the index of elements too
    //#endregion
    myCart.forEach(function(element, index) {
        if (element.id === id) {
            myCart.splice(index, 1)
            console.log(myCart)
            localStorage.setItem('myCart', JSON.stringify(myCart))
        }
    })








}

clearCart();

function clearCart() {
    //clear cart button
    let clearCart = document.querySelector('#clear-cart');
    clearCart.addEventListener('click', myClick)


    function myClick(event) {

        // if (event.target.id.contains("clear-cart")) {
        //     let cartContent = event.target.parentElement.;

        //     // event.target.parentElement.parentElement.remove();
        // }
        let mainBody = document.querySelector('tbody')

        mainBody.innerHTML = '';
        // clear from local storage
        clearLocalStorage();

        function clearLocalStorage() {
            localStorage.clear();
        }



    }


}