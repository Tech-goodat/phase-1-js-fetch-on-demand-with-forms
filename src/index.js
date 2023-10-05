const init = () => {
  
}

document.addEventListener('DOMContentLoaded', init);
const inputForm=document.querySelector('form')
inputForm.addEventListener('submit', (e) => {   
    e.preventDefault()
    const input = document.querySelector('input#searchByID')
    console.log(input.value)
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(res => res.json())
    .then(data => {
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')
        title.innerText = data.title
        summary.innerText = data.summary
    })
    fetch(`http://localhost:3000/movies/${input.value}/reviews`)
    .then(res => res.json())
    .then(data => {
        const reviews = document.querySelector('div#reviews')
        reviews.innerHTML = ''
        data.forEach(review => {
            const li = document.createElement('li')
            li.innerText = review.content
            reviews.appendChild(li)
        })
    })  
    
})
    