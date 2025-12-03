const cardSection = document.getElementById("cardListContainer")
const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchButton")
const defaultSort = document.getElementById("defaultSort")
const azSort = document.getElementById("azSort")
const zaSort = document.getElementById("zaSort")

const cards = [
    ["HTML", "Mēs veidojam vienkāršas mājaslapas. Tās ir lieliski piemērotas tiem, kam nav budžeta sarežģītam projektam. Viss būs pārskatāms un funkcionāls."],
    ["CSS", "Ar CSS mēs padarām jūsu mājaslapu glītu un kārtīgu. Varam pielāgot krāsas, formas un izkārtojumu. Viss izskatīsies profesionāli."],
    ["JavaScript", "Ar JavaScript mēs pievienojam jūsu mājaslapai funkcijas. Tās kļūst ātrākas, ērtākas un daudz lietojamākas. Varam pievienot arī interaktīvus elementus."],
    ["ReactJS", "Mēs specializējamies darbā ar ReactJS. Tas ļauj veidot modernas un ātras mājaslapas. Risinājumi būs stabili un viegli uzturami."],
    ["Tailwind CSS", "Mēs izmantojam Tailwind CSS, lai radītu precīzu un vizuāli tīru dizainu. Tas palīdz ātri pielāgot stilu. Rezultāts būs vienkāršs, bet ļoti izsmalcināts."]
]

let filteredSortedCards = [...cards]

function renderCards(cardArray) {
    cardSection.innerHTML = ""

    for (let i = 0; i < cardArray.length; i++) {
        const [title, description] = cardArray[i]

        const cardHTML = `
            <div class="card">
                <div class="card-content">
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <a href="#" class="card-button">Uzzināt vairāk</a>
                </div>
            </div>
        `

        cardSection.innerHTML += cardHTML
    }
}

function searchCards() {
    const searchValue = searchInput.value.toLowerCase().trim()

    filteredSortedCards = cards.filter(card => {
        return card[0].toLowerCase().includes(searchValue) || card[1].toLowerCase().includes(searchValue)
    })

    if (filteredSortedCards.length === 0) {
        cardSection.innerHTML = `
        <div class="no-results">
            <p>Mēs nepiedāvājam šādas tehnoloģijas :(</p>
            <img src="/src/images/sad.jpg" alt="john pork">
        </div>
        `
    } else {
        renderCards(filteredSortedCards)
    }
}

function sortDefault() {
    filteredSortedCards = [...cards]
    renderCards(filteredSortedCards)
}

function sortAZ() {
    filteredSortedCards.sort((a, b) => a[0].localeCompare(b[0]))
    renderCards(filteredSortedCards)
}

function sortZA() {
    filteredSortedCards.sort((a, b) => b[0].localeCompare(a[0]))
    renderCards(filteredSortedCards)
}

searchBtn.addEventListener("click", searchCards)
defaultSort.addEventListener("click", sortDefault)
azSort.addEventListener("click", sortAZ)
zaSort.addEventListener("click", sortZA)

renderCards(cards)