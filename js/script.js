"use strict";

const localToken = window.localStorage.getItem("token");

if(!localToken){
    window.location.replace(".login.html");
}

logoutBtn.addEventListener("click", function() {
    window.localStorage.removeItem("token");

    window.location.replace("login.html");
})



let elList = document.querySelector(".book-list");
let elBookmarkList = document.querySelector(".bookmark-list");
let elInfo = document.querySelector(".info");
let elOverlay = document.querySelector(".overlay");
let elResultNumber = document.querySelector(".hero-desc");
let elOrderby = document.querySelector('hero-order-section');





const bookmarks = [];

const renderBookmark = function(arr, element) {
    arr.forEach(item => {
        const newBookmarkItem = document.createElement('li');
        let newBopkmarkNameSection = document.createElement('div')
        let newBookmarkTitle = document.createElement('h3')
        let newBookmarkDesc = document.createElement('p')
        let newBookmarkLink = document.createElement('a')
        let newBookmarkImg = document.createElement('img')
        // let newBookmarkDelete = document.createElement('button')
        let newBookmarkDeleteImg = document.createElement('img')

        newBookmarkItem.classList.add("bookmark__item");
        newBopkmarkNameSection.classList.add("bookmark__name-section")
        newBookmarkTitle.classList.add("books_hero_title")
        newBookmarkDesc.classList.add("books_hero_desc")
        newBookmarkImg.classList.add("bookmark__images")
        newBookmarkImg.setAttribute("src", './images/read.png')
        // newBookmarkDelete.classList.add("bookmark__delete")
        newBookmarkDeleteImg.classList.add("bookmark__delete-img")
        newBookmarkDeleteImg.setAttribute("src", './images/bookmarkdelete.png')

        newBookmarkTitle.textContent = item.volumeInfo.title
        newBookmarkDesc.textContent = item.volumeInfo.authors

        newBookmarkLink.addEventListener('click', function() {
            newBookmarkLink.href = item.volumeInfo.previewLink
            newBookmarkLink.target = "_blank"
        })
        // newBookmarkDelete.textContent = "Delete"

        newBookmarkDeleteImg.dataset.deleteBtnId = item.id;

        element.appendChild(newBookmarkItem)
        newBookmarkItem.appendChild(newBopkmarkNameSection)
        newBopkmarkNameSection.appendChild(newBookmarkTitle)
        newBopkmarkNameSection.appendChild(newBookmarkDesc)
        newBookmarkItem.appendChild(newBookmarkLink)
        newBookmarkLink.appendChild(newBookmarkImg)
        // newBookmarkItem.appendChild(newBookmarkDelete)
        newBookmarkItem.appendChild(newBookmarkDeleteImg)
    })
}

elBookmarkList.addEventListener('click', function(evt){
    if(evt.target.matches(".bookmark__delete-img")){
        const bookmarkItemDeleteBtn = evt.target.dataset.deleteBtnId;

        const foundBookmark = bookmarks.findIndex((bookmark) => bookmark.id === bookmarkItemDeleteBtn);


        bookmarks.splice(foundBookmark, 1);

        elBookmarkList.innerHTML = null;
        renderBookmark(bookmarks, elBookmarkList)
    }
})

const renderBookmarks = function(data) {
elList.addEventListener('click', function(evt){
    const isBookmarkBtn = evt.target.matches(".book_btn_bookmark")

    if(isBookmarkBtn){
        const bookmarkBtnId = evt.target.dataset.bookmarkBtnIdData;
        const thing = data[0].items

        const foundIndex = thing.find(((things) => things.id === bookmarkBtnId));

        if(!bookmarks.includes(foundIndex)){
            bookmarks.push(foundIndex)

            elBookmarkList.innerHTML = null;
            renderBookmark(bookmarks, elBookmarkList)
        }
    }

    })
}

let search = "python";
// let olderby = "orderBy=newest";

const renderBooks = function(data, element, infoElement) {
    elResultNumber.textContent = `Showing ${data[0].totalItems}`
    const items = data[0].items
    console.log(items)
    element.innerHTML = null;

    items.forEach(book => {
        let newSection = document.createElement('li')
        let newHeroImg = document.createElement('img')
        let newHeroName = document.createElement('div')
        let newHeroTitle = document.createElement('h3')
        let newHeroAuthors = document.createElement('p')
        let newPublishedDate = document.createElement('p')
        let newHeroBtnSection = document.createElement('div')
        let newHeroBtnBookmark = document.createElement('button')
        let newHeroBtnInfo = document.createElement('button')
        let newHeroBtnRead = document.createElement('a')

        newSection.setAttribute('class', 'books_section')
        newHeroImg.setAttribute('class', 'books_hero_img')
        newHeroImg.setAttribute('src', `${book.volumeInfo.imageLinks.smallThumbnail}`)
        newHeroName.setAttribute('class', 'books_name_section')
        newHeroTitle.setAttribute('class', 'books_hero_title')
        newHeroAuthors.setAttribute('class', 'authors')
        newPublishedDate.setAttribute('class', 'publishedDate')
        newHeroBtnSection.setAttribute('class', 'book_btn_section')
        newHeroBtnBookmark.setAttribute('class', 'book_btn_bookmark')
        newHeroBtnInfo.setAttribute('class', 'book_btn_info')
        newHeroBtnRead.setAttribute('class', 'book_btn_read')

        newHeroTitle.textContent = book.volumeInfo.title
        newHeroAuthors.textContent = book.volumeInfo.authors
        newPublishedDate.textContent = book.volumeInfo.publishedDate
        newHeroBtnBookmark.textContent = "Bookmark"
        newHeroBtnInfo.textContent = "More Info"
        newHeroBtnRead.textContent = "Read"

        newHeroBtnRead.addEventListener('click', function() {
            newHeroBtnRead.href = book.volumeInfo.previewLink
            newHeroBtnRead.target = "_blank"
        })


        elInfo.classList.add('hidden')
        elOverlay.classList.add('hidden-overlay')


        newHeroBtnInfo.onclick = function() {


            elInfo.classList.remove('hidden')
            elOverlay.classList.remove('hidden-overlay')
            elInfo.innerHTML = null;

            let newInfoHeaderSection = document.createElement('div');
            let newHeaderInfoTitle = document.createElement('h3');
            let newHeaderInfoDelete = document.createElement('img');
            let newInfoImg = document.createElement('img');
            let newInfoDesc = document.createElement('p')
            let newInformationSection = document.createElement('div');
            let newInfoAuthorText = document.createElement('p');
            let newInfoAuthor = document.createElement('p');
            let newInformationPublishSection = document.createElement('div');
            let newInfoPublishText = document.createElement('p');
            let newInfoPublish = document.createElement('p');
            let newInformationPublisherSection = document.createElement('div');
            let newInfoPublisherText = document.createElement('p');
            let newInfoPublisher = document.createElement('p');
            let newCategorySection = document.createElement('div');
            let newCategoryText = document.createElement('p');
            let newCategory = document.createElement('p');
            let newCountSection = document.createElement('div');
            let newCountText = document.createElement('p');
            let newCount = document.createElement('p');

            newInfoHeaderSection.setAttribute('class', 'info_header');
            newHeaderInfoTitle.setAttribute('class', 'info_title');
            newHeaderInfoDelete.setAttribute('class', 'info_delete');
            newHeaderInfoDelete.setAttribute('src', './images/delete.png');
            newInfoImg.setAttribute('class', 'info_img');
            newInfoImg.setAttribute('src', `${book.volumeInfo.imageLinks.thumbnail}`);
            newInfoDesc.setAttribute('class', 'informent_desc');
            newInformationSection.setAttribute('class', 'informention_section');
            newInfoAuthorText.setAttribute('class', 'informention_text');
            newInfoAuthor.setAttribute('class', 'informent_author');
            newInformationPublishSection.setAttribute('class', 'informention_section');
            newInfoPublishText.setAttribute('class', 'informention_text');
            newInfoPublish.setAttribute('class', 'informent_author');
            newInformationPublisherSection.setAttribute('class', 'informention_section');
            newInfoPublisherText.setAttribute('class', 'informention_text');
            newInfoPublisher.setAttribute('class', 'informent_author');
            newCategorySection.setAttribute('class', 'informention_section');
            newCategoryText.setAttribute('class', 'informention_text');
            newCategory.setAttribute('class', 'informent_author');
            newCountSection.setAttribute('class', 'informention_section');
            newCountText.setAttribute('class', 'informention_text');
            newCount.setAttribute('class', 'informent_author');

            newHeaderInfoTitle.textContent = book.volumeInfo.title
            newInfoDesc.textContent = book.volumeInfo.description
            newInfoAuthorText.textContent = 'Author :'
            newInfoAuthor.textContent = `${book.volumeInfo.authors}`
            newInfoPublish.textContent = book.volumeInfo.publishedDate
            newInfoPublishText.textContent = 'Published : '
            newInfoPublisherText.textContent = 'Publishers:';
            newInfoPublisher.textContent = book.volumeInfo.publisher
            newCategoryText.textContent = 'Categories:';
            newCategory.textContent = book.volumeInfo.categories;
            newCountText.textContent = 'Pages Count:';
            newCount.textContent = book.volumeInfo.pageCount;

            newHeaderInfoDelete.addEventListener('click', () => {
                elInfo.classList.add('hidden')
                elOverlay.classList.add('hidden-overlay')
            })

            infoElement.appendChild(newInfoHeaderSection);
            newInfoHeaderSection.appendChild(newHeaderInfoTitle);
            newInfoHeaderSection.appendChild(newHeaderInfoDelete);
            infoElement.appendChild(newInfoImg);
            infoElement.appendChild(newInfoDesc);
            infoElement.appendChild(newInformationSection);
            newInformationSection.appendChild(newInfoAuthorText);
            newInformationSection.appendChild(newInfoAuthor);
            infoElement.appendChild(newInformationPublishSection);
            newInformationPublishSection.appendChild(newInfoPublishText);
            newInformationPublishSection.appendChild(newInfoPublish);
            infoElement.appendChild(newInformationPublisherSection);
            newInformationPublisherSection.appendChild(newInfoPublisherText);
            newInformationPublisherSection.appendChild(newInfoPublisher);
            infoElement.appendChild(newCategorySection);
            newCategorySection.appendChild(newCategoryText);
            newCategorySection.appendChild(newCategory);
            infoElement.appendChild(newCountSection);
            newCountSection.appendChild(newCountText);
            newCountSection.appendChild(newCount);
        }


        // ORDERBY
        // elOrderby.addEventListener('click', function() {
        //     orderby = 'orderBy=newest'
        // })

        // DATASET
        newHeroBtnBookmark.dataset.bookmarkBtnIdData = book.id

        element.appendChild(newSection);
        newSection.appendChild(newHeroImg);
        newSection.appendChild(newHeroName)
        newHeroName.appendChild(newHeroTitle);
        newHeroName.appendChild(newHeroAuthors);
        newHeroName.appendChild(newPublishedDate);
        newSection.appendChild(newHeroBtnSection);
        newHeroBtnSection.appendChild(newHeroBtnBookmark);
        newHeroBtnSection.appendChild(newHeroBtnInfo);
        newSection.appendChild(newHeroBtnRead);
    })
}

let startIndex = 0


const getUsers = async function(){
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${startIndex}`)
    const data = await response.json();
    const dataTwo = [data]
    renderBookmarks(dataTwo)
    renderBooks(dataTwo, elList, elInfo)
    renderBtn(data.totalItems)
}

getUsers();


input.addEventListener("change", function(evt) {
    search = input.value
    // renderBookmarks(dataTwo)
    getUsers();
})




elOverlay.addEventListener('click', function(evt){
    evt.preventDefault();
    elOverlay.classList.add('hidden-overlay')
    elInfo.classList.add('hidden')
  })


  document.addEventListener('keydown', function(evt){
    if(evt.key === "Escape"){
      elOverlay.classList.add('hidden-overlay')
      elInfo.classList.add('hidden')
    }
  })

  const centerBtns = document.querySelector(".center-btns")
  const rightBtn = document.querySelector(".right-btn")
  const leftBtn = document.querySelector(".left-btn")

  function renderBtn(numbers) {
    centerBtns.innerHTML = null

    let number = (numbers % 10 == 0) ? parseInt(numbers / 10) : parseInt(numbers / 10) + 1

    for (let num = 0; num < number; num++) {
        const button = document.createElement("div")
        button.innerText = String(num + 1)
        centerBtns.appendChild(button)

        // button.id = btn-${num + 1}
        button.classList.add("btn")
    }

    const tugmalar = document.querySelectorAll(".btn")
    console.log(tugmalar)

    tugmalar.forEach(tugma => {

        tugma.addEventListener("click", function () {
            startIndex = (Number(tugma.textContent)-1)*10

            getUsers()
        })
    })



    tugmalar.forEach(tugma => {
        if ((Number(tugma.textContent)-1)*10 == startIndex) tugma.classList.add("active")
    })

  }