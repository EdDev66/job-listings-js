let data = [
    {
      id: 1,
      company: "Photosnap",
      logo: "./images/photosnap.svg",
      new: true,
      featured: true,
      position: "Senior Frontend Developer",
      role: "Frontend",
      level: "Senior",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["HTML", "CSS", "JavaScript"],
      tools: []
    },
    {
      id: 2,
      company: "Manage",
      logo: "./images/manage.svg",
      new: true,
      featured: true,
      position: "Fullstack Developer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1d ago",
      contract: "Part Time",
      location: "Remote",
      languages: ["Python"],
      tools: ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]

  

const listFilters = (type, div) => {
    if(type) {
        let tag = document.createElement('div')
        tag.innerText = type
        tag.classList.add('tags')
        tag.setAttribute('id', 'tag-item')
        div.appendChild(tag)
    }
}

const newFeaturedTags = (isNew, isFeatured, tagContainer, card) => {
    tagContainer.classList.add('row-container')
    tagContainer.classList.add('card-align')

    if (isNew) {
        let newTag = document.createElement('div');
        newTag.classList.add('new-tag')
        newTag.innerText = 'NEW!'
        tagContainer.appendChild(newTag);
    }

    if (isFeatured) {
        let featuredTag = document.createElement('div');
        featuredTag.classList.add('featured-tag')
        featuredTag.innerText = 'FEATURED'
        tagContainer.appendChild(featuredTag)
        card.classList.add('card-featured')
    }
}

const cardCreateHandler = (logoImg, company, position, postedAt, contract, location, tags, role, level, tools, isNew, isFeatured) => {
    let container = document.querySelector('.container')
    
    let card = document.createElement('div')
    card.classList.add('card')

    let cardWrapper = document.createElement('div')
    cardWrapper.classList.add('row-container')
    cardWrapper.classList.add('space-between')
    cardWrapper.classList.add('card-align')

    let firstCardHalf = document.createElement('div')
    firstCardHalf.classList.add('row-container')
    firstCardHalf.classList.add('card-align')
    let logo = document.createElement('img')
    logo.src = logoImg

    let firstCardHalfDetails = document.createElement('div')
    firstCardHalfDetails.classList.add('flex-container')

    let tagContainer = document.createElement('div')
    let companyName = document.createElement('div')
    companyName.classList.add('company-name')
    companyName.innerText = company
    tagContainer.appendChild(companyName)

    if(isNew || isFeatured) {
        newFeaturedTags(isNew, isFeatured, tagContainer, card)
    }

    let jobTitle = document.createElement('div')
    jobTitle.innerText = position
    jobTitle.classList.add('job-title')

    let rowDetails = document.createElement('div')
    rowDetails.classList.add('row-container')

    let jobDetails = document.createElement('div')
    jobDetails.innerText = `${postedAt} • ${contract} • ${location}`
    jobDetails.classList.add('job-details')

    let secondCardHalf = document.createElement('div')
    secondCardHalf.classList.add('row-container')
    secondCardHalf.setAttribute('id', 'tag-container')

    listFilters(level, secondCardHalf)
    listFilters(role, secondCardHalf)

    tags.forEach(el => {
        let tag = document.createElement('div')
        tag.innerText = el
        tag.classList.add('tags')
        tag.setAttribute('id', 'tag-item')
        secondCardHalf.appendChild(tag)
    }) 
    
    tools.forEach(el => {
        let tag = document.createElement('div')
        tag.innerText = el
        tag.classList.add('tags')
        tag.setAttribute('id', 'tag-item')
        secondCardHalf.appendChild(tag)
    })

    card.appendChild(cardWrapper)
    cardWrapper.appendChild(firstCardHalf)
    cardWrapper.appendChild(secondCardHalf)

    firstCardHalf.appendChild(logo)
    firstCardHalf.appendChild(firstCardHalfDetails)

    firstCardHalfDetails.appendChild(tagContainer)
    firstCardHalfDetails.appendChild(jobTitle)
    firstCardHalfDetails.appendChild(rowDetails)

    rowDetails.appendChild(jobDetails)
    container.appendChild(card)
}

let activeFilters = 0;
let languageArray = [];

let filters = {
  role: '',
  level: ''
}

// const filterCardsLanguage = (arr) => {
//   const filterByLanguage = data.filter( item => arr.every( filter => item.languages.includes(filter) ))
// }

const applyFilter = () => {
  let container = document.querySelectorAll('#tag-container')
  container.forEach((el) => {
    for(let i=0; i<el.children.length; i++) {
      if(languageArray.includes(el.children[i].innerText)) {
        el.classList.add('included')
      } 
    }

    if(!el.classList.contains('included')) {
      el.parentElement.parentElement.style.display = 'none'
    } else {
      el.parentElement.parentElement.style.display = 'flex'
    }
  })
}


const clearActiveFilters = () => {
  let container = document.querySelectorAll('#tag-container')
  let tagContainer = document.querySelector('#active-tag-container')
  let filterBox = document.querySelector('.active-filters')
  let filterDivider = document.querySelector('.filter-divider')

  container.forEach((el) => {
    el.classList.remove('included')
    el.parentElement.parentElement.style.display = 'flex'

    for(let i=0; i<el.children.length; i++) {
      el.children[i].classList.remove('clicked')
    }
  })

  tagContainer.innerHTML = ''

  filterBox.classList.remove('show')
  filterBox.classList.add('hide')
  filterDivider.classList.remove('show')
  filterDivider.classList.add('hide')

  languageArray = [];
  activeFilters = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    
   data.forEach((el) => {
    cardCreateHandler(
        el.logo, el.company, 
        el.position, el.postedAt, 
        el.contract, el.location, 
        el.languages, el.role, 
        el.level, el.tools, el.new, el.featured
    )
   })
   
    let tags = document.querySelectorAll('.tags')
    let filterBox = document.querySelector('.active-filters')
    let filterDivider = document.querySelector('.filter-divider')
    let tagContainer = document.querySelector('#active-tag-container')
    let clearBtn = document.querySelector('.clear-btn')

    clearBtn.addEventListener('click', () => {
      clearActiveFilters()
    })

    tags.forEach(el => {
      el.addEventListener('click', () => {
        let text = el.innerText
        filterBox.classList.add('show')
        filterBox.classList.remove('hide')
        filterDivider.classList.add('show')
        filterDivider.classList.remove('hide')

        let filterItem = el.cloneNode(true)
        if(filterItem.classList.contains('clicked') || activeFilters >= 6) {
          return;
        } 

        activeFilters++

        if(text === 'JavaScript' || text === 'Python' || text === 'HTML' || text === 'Ruby' || text === 'CSS') {
          languageArray.push(text)
          // filterCardsLanguage(languageArray)

        } else if (text === 'Junior' || text === 'Senior' || text === 'Midweight') {
          languageArray.push(text)

        } else if (text === 'Fullstack' || text === 'Backend' || text === 'Frontend') {
          languageArray.push(text)
        } else {
          languageArray.push(text)
        }

        
        el.classList.add('clicked')
        filterItem.classList.add('active-tags')
        filterItem.classList.remove('tags')

        let clearFilter = document.createElement('div')
        clearFilter.classList.add('remove-filter')
        clearFilter.innerText = 'X'
        clearFilter.addEventListener('click', () => {
          
          filterItem.remove()
          clearFilter.remove()
          el.classList.remove('clicked')

          if(tagContainer.innerHTML.trim().length == 0) {
            clearActiveFilters()
          }
          
        })

      
          

        tagContainer.appendChild(filterItem)
        tagContainer.appendChild(clearFilter)

        applyFilter();
      })
    })
    
})

