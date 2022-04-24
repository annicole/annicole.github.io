import React, { useEffect,  useState } from "react";
import arrowDown from "../../assets/arrowDown.svg";
import languageIcon from "../../assets/languageIcon.svg";
import { getTracks } from "../../api/api";
import RowLanguage from "./RowLanguage";
import allLanguages from "../../assets/allLanguages.svg";

export default function DropDownLanguage({
  tracks,
  selectedTrack,
  onTrackChange,
  dropdown,
  setDropdown,
  all
}) {
  const toggleOpen = () => setDropdown(!dropdown);
  const [errorState, setErrorState] = useState({ hasError: false });
  const [tracksApi, setTracksApi] = useState([]);
  const [totalCount,setTotalcount]= useState(0)

  useEffect(() => {
    getTracks()
      .then((data) => {
        let res = data
          .filter((track) => {
            return tracks.hasOwnProperty(track.slug);
          })
          .map((track) => {
            return { ...track, counter: tracks[track.slug] };
          });
        setTracksApi(res);

        let total = res.reduce((sum,i)=>{
          return sum + i.counter;
        },0);
        setTotalcount(total)
      })
      .catch(handleError);
  }, [tracks.length]);

  const handleError = (err) => {
    console.error(err);
    setErrorState({ hasError: true, message: err.message });
  };

  return (
    <>
      <div className="mr-3">
        <button
          onClick={toggleOpen}
          id="dropdownDefault"
          className="flex flex-row justify-center items-center "
        >
          <img src={languageIcon} />
          <img className="mx-2" src={arrowDown} />
        </button>
      </div>
      <div
        id="dropdown"
        className={`${
          dropdown ? "show" : "hidden"
        } z-10 absolute mt-12 w-80 h-72 p-2 bg-white rounded-lg divide-y divide-gray-100 shadow`}
      >
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 overflow-y-scroll max-h-64 ">
          <RowLanguage
            language={"All"}
            icon={allLanguages}
            value={totalCount}
            slug={'All'}
            selectedTrack={selectedTrack}
            onTrackChange={onTrackChange}
          />
          {tracksApi.map((track) => {
            return (
              <RowLanguage
                key={track.slug}
                language={track.title}
                slug={track.slug}
                icon={track.icon_url}
                value={track.counter}
                selectedTrack={selectedTrack}
                onTrackChange={onTrackChange}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
