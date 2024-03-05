
import {useState, useEffect} from 'react';

function App() {

  const animals = ["Hund", "Katt", "Kanin", "Hamster", "Fugl", "Fisk"]
  
  const colors = ["Rød", "Blå", "Grønn", "Gul", "Lilla", "Hvit"]
  
  const traits = [
      "Vennlig", "Energisk", "Rolig", "Nysgjerrig", "Sky",
      "Leken", "Intelligent", "Trofast", "Uavhengig", "Sosial",
      "Snill", "Beskyttende", "Kjærlig", "Forsiktig", "Eventyrlysten",
      "Stille", "Lydig", "Utholdende", "Modig", "Tålmodig",
      "Morsom", "Aktiv", "Rolig", "Selvsikker", "Nervøs"
  ]


const [alledyra, setAlleDyra] = useState();

// finne en måte å lagre informasjonen om dyra i alleDyra
// setAlleDyra(pets); 
//setAlleDyra(pets);

  const pets = [];

  function randomNumber(arrayLength) {
  return Math.floor(Math.random() * arrayLength)
  }

  function makePets () {
  
    for (let i = 0; i < 4; i++) {
      let pet = {
        petAge: randomNumber(14)+1,
        petFurColor: colors[randomNumber(colors.length)],
        petRace: animals[randomNumber(animals.length)],
        petTraits: randomTraits(),
      }
      function randomTraits() { 
      const traitCount = randomNumber(4)+1;
      const setTraits = [];
        for(let ti = 0; ti < traitCount; ti++){
      setTraits.push(traits[randomNumber(traits.length)])
    }
      return (setTraits.filter((value, index, self) => {
        return self.indexOf(value) === index})
        )
    }
    pets.push(pet)
  }
  console.log("Gås", alledyra)
  }

// console.log(pets)



// - lagrer i DOM´ -> mappinga -> hvis den ikke blir endret direkte. 
  const ShowPets = alledyra.map(pet => 
  <div className="p-4 m-4 text-center w-96 h-36 bg-slate-300">
  <h1>{pet.petRace}</h1>
  <h1>{pet.petFurColor}</h1>
  <h1>{pet.petAge}</h1>
  <p>{pet.petTraits.join(", ")}.</p>
  </div>
  );


function sortPets() {  
  pets.sort((a, b) => a.petAge - b.petAge)
  
  setAlleDyra(pets)
  console.log("Kråke", alledyra)
  //setAlleDyra())
}

// useEffect kjør hver gang siden blir lasta ELLER det blir gjort en oppdatering
useEffect(() => {
  makePets()
  setAlleDyra(pets)
  console.log("Nebbdyr", alledyra )
  
  return () => {
    
  }
}, [])

  return (
    <main className="h-full bg-slate-200">
      <header className="h-24 bg-slate-400">
        <button onClick={sortPets}>Sort after Age</button>

      </header>
      <section className="flex flex-wrap justify-center bg-slate-200 h-5/6">{ShowPets}</section>     
    </main>
  );
}

  // Lag et tomt array kalt pets og fyll det med objekter. Hvert objekt skal inneholde:
  // Et dyrenavn (fra animals-arrayet).
  // En tilfeldig farge (fra colors-arrayet).
  // En tilfeldig alder, mellom 1 og 15 år.
  // En liste med traits: minst ett, men ikke mer enn 4 (uten duplikater). f.eks:
  // Sørg for at lengden på pets-arrayet tilsvarer animals-arrayet.
  
  // Oppgave 2: Implementer Filtreringsfunksjoner
  // Lag en funksjon for å finne et kjæledyr etter navn ved hjelp av find-metoden.
  // Implementer en funksjon for å finne indeksen til det første kjæledyret av en gitt farge ved hjelp av findIndex.
  // Skriv en funksjon for å finne det siste kjæledyret av en spesifikk alder ved hjelp av findLastIndex og findLast.
  // Utvikle en funksjon for å filtrere kjæledyr etter et spesifikt trekk ved hjelp av filter.
  // Bruk forEach eller map metoden for å console.logge (eller vise på nettsiden vha document.createElement()) detaljene til hvert kjæledyr.

export default App;
