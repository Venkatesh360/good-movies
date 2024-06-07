import MovieGenres from "./MovieGenres";
import "./CSS/Genre.css";

interface GenreProps {
  onGenreChange: (id: string) => void;
}

function Genre({ onGenreChange }: GenreProps) {
  const handleGenreClick = (id: string) => {
    onGenreChange(id); // Pass the selected genre ID to the onGenreChange function
  };

  return (
    <div className="scroll-container mt-[12vh]" role="group">
      <div className="flex gap-x-2">
        <button
          type="button"
          onClick={() => handleGenreClick("28")} // Pass the genre ID when clicked
          className=" group flex items-center justify-center  h-[30px] p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className="w-[50px] group-hover:opacity-0"> {MovieGenres[28]}</span>
          <span className="w-[50px] ml-[-50px] flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="25" src="https://img.icons8.com/ios-filled/50/stick-fighting.png" alt="stick-fighting" /></span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("12")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className=" w-[80px]  group-hover:opacity-0"> {MovieGenres[12]}</span>
          <span className="w-[80px] ml-[-80px]  flex items-center justify-center opacity-0 group-hover:opacity-100 " >
            <img width="22" src="https://img.icons8.com/ios-filled/50/sword.png" alt="sword" />
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("16")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className="group w-[80px] group-hover:opacity-0"> {MovieGenres[16]}</span>
          <span className=" flex w-[80px] ml-[-80px] items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="30" height="" src="https://img.icons8.com/external-flat-icons-inmotus-design/67/external-cartoon-monsters-collection-flat-icons-inmotus-design-2.png" alt="external-cartoon-monsters-collection-flat-icons-inmotus-design-2" /></span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("35")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className="w-[80px] group-hover:opacity-0"> {MovieGenres[35]}</span>
          <span className="w-[80px] ml-[-80px] flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="25" src="https://img.icons8.com/ios-filled/50/smiling.png" alt="smiling" /></span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("80")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className=" w-[50px] group-hover:opacity-0"> {MovieGenres[80]}</span>
          <span className="w-[50px] ml-[-50px]  flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="25" src="https://img.icons8.com/ios-filled/50/spy-male.png" alt="spy-male" /></span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("99")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className="w-[100px] group-hover:opacity-0"> {MovieGenres[99]}</span>
          <span className="w-[100px] ml-[-100px]  flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="25" src="https://img.icons8.com/ios/50/globe-earth.png" alt="globe-earth" /></span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("18")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className="w-[50px] group-hover:opacity-0"> {MovieGenres[18]}</span>
          <span className="w-[50px] ml-[-50px] flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="35" src="https://img.icons8.com/external-goofy-solid-kerismaker/96/external-Drama-movie-cinema-goofy-solid-kerismaker.png" alt="external-Drama-movie-cinema-goofy-solid-kerismaker" /></span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("10751")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className="w-[50px] group-hover:opacity-0"> {MovieGenres[10751]}</span>
          <span className="w-[50px] ml-[-50px] flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="25" src="https://img.icons8.com/fluency-systems-filled/48/family.png" alt="family" /></span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("36")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className="w-[60px] group-hover:opacity-0"> {MovieGenres[36]}</span>
          <span className="w-[60px] ml-[-60px] flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="25" src="https://img.icons8.com/ios-filled/50/ankh.png" alt="ankh" /></span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("27")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className="w-[50px] group-hover:opacity-0"> {MovieGenres[27]}</span>
          <span className="w-[50px] ml-[-50px] flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="25" src="https://img.icons8.com/ios-filled/50/ghost.png" alt="ghost" /></span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("10402")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className="w-[50px] group-hover:opacity-0"> {MovieGenres[10402]}</span>
          <span className="w-[50px] ml-[-50px] flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="25" src="https://img.icons8.com/ios-filled/50/musical.png" alt="musical" /></span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("9648")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2  rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className=" w-[70px] group-hover:opacity-0"> {MovieGenres[9648]}</span>
          <span className="w-[70px] ml-[-70px] flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="25" src="https://img.icons8.com/ios-glyphs/90/search--v1.png" alt="search--v1" /></span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("10749")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className="w-[80px] group-hover:opacity-0"> {MovieGenres[10749]}</span>
          <span className="w-[80px] ml-[-80px] flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="25" src="https://img.icons8.com/ios-glyphs/90/novel--v1.png" alt="novel--v1" /> </span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("878")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className="w-[50px] group-hover:opacity-0"> {MovieGenres[878]}</span>
          <span className="w-[50px] ml-[-50px] flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="25" src="https://img.icons8.com/external-basicons-line-edtgraphics/50/external-space-space-basicons-line-edtgraphics-9.png" alt="external-space-space-basicons-line-edtgraphics-9" /></span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("53")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className="w-[60px] group-hover:opacity-0"> {MovieGenres[53]}</span>
          <span className="w-[60px] ml-[-60px] flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="25" src="https://img.icons8.com/glyph-neue/64/horror.png" alt="horror" /></span>
        </button>


        <button
          type="button"
          onClick={() => handleGenreClick("10752")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className="w-[50px] group-hover:opacity-0"> {MovieGenres[10752]}</span>
          <span className="w-[50px] ml-[-50px] flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="30" src="https://img.icons8.com/external-others-maxicons/62/external-spartan-greek-mythology-others-maxicons-2.png" alt="external-spartan-greek-mythology-others-maxicons-2" /></span>
        </button>

        <button
          type="button"
          onClick={() => handleGenreClick("37")} // Pass the genre ID when clicked
          className="group h-[30px] flex items-center justify-center p-4 px-2 rounded-lg text-sm font-medium text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 focus:ring-2 focus:ring-gray-500 focus:bg-white focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <span className=" w-[90px] group-hover:opacity-0"> {MovieGenres[37]}</span>
          <span className="w-[90px] ml-[-90px] flex items-center justify-center opacity-0 group-hover:opacity-100 " ><img width="25" src="https://img.icons8.com/ios-filled/50/bandit.png" alt="bandit" /></span>
        </button>

      </div>

    </div>
  );
}

export default Genre;
