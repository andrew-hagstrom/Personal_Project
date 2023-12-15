export const WordBank = () => {
    return (
      <div id="home-page">
        <h2>Word Bank</h2>
        <div>
          <p>
           You have no words to display. Add to your word bank to populate this page. 
          </p>
        </div>
      </div>
    );
  };
  
  export default WordBank;


// const FavoritesPage = () => {
//   const { favorites, setFavorites } = useOutletContext();
//   // name, image, id, favorites, setFavorites
//   return (
//     <>
//       <h2>Favorites</h2>
//       {favorites.map((favorite) => (
//         <CharCard
//           key={favorite.id}
//           id={favorite.id}
//           name={favorite.name}
//           image={favorite.image}
//           favorites={favorites}
//           setFavorites={setFavorites}
//         />
//       ))}
//     </>
//   );
// };

// export default FavoritesPage;