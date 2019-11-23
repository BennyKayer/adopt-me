// const [animal, setAnimal] = useState("dog");
// const [breed, setBreed] = useState("");
//         <label htmlFor="animal">
//           Animal
//           <select
//             id="animal"
//             value={animal}
//             onChange={e => setAnimal(e.target.value)}
//             onBlur={e => setAnimal(e.target.value)}
//           >
//             <option>All</option>
//             {ANIMALS.map(animal => {
//               return (
//                 <option key={animal} value={animal}>
//                   {animal}
//                 </option>
//               );
//             })}
//           </select>
//         </label>

//         <label htmlFor="breed">
//           Breed
//           <select
//             id="breed"
//             value={breed}
//             onChange={e => {
//               return setBreed(e.target.value);
//             }}
//             onBlur={e => {
//               return setBreed(e.target.value);
//             }}
//             disabled={!breeds.length}
//           >
//             <option>All</option>
//             {breeds.map(breedStr => {
//               return (
//                 <option key={breedStr} value={breedStr}>
//                   {breedStr}
//                 </option>
//               );
//             })}
//           </select>
//         </label>
