import { useEffect, useRef, useState } from "react";
import Button from "./components/Button";
import FormatTime from "./components/FormatTime";

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timeRef = useRef();

  const handleClick = () => {
    if (!isRunning) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  };
  const handleClear = () => {
    setTime(0);
    setIsRunning(false);
    setLaps([]);
  };
  const handleLap = () => {
    if (laps.indexOf(time) === -1) {
      if (laps.length > 0) {
        let newLaps = laps;
        newLaps.unshift(time);
        console.log(newLaps);
        setLaps(newLaps);
      } else {
        setLaps((laps) => [...laps, time]);
      }
    }
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => setTime((time) => time + 1), 1000);
    }

    if (!isRunning) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="bg-slate-950 h-screen w-screen flex flex-col justify-center items-center gap-8 font-gabarito p-8 overflow-hidden">
      <div className="text-slate-50 text-5xl md:text-7xl" ref={timeRef}>
        <FormatTime time={time} />
      </div>
      <div className="text-slate-50 text-xl space-x-4">
        <Button handler={handleClick} disabled={isRunning} type="success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        {isRunning && (
          <>
            <Button handler={handleClick} disabled={!isRunning} type="warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
            <Button handler={handleLap} disabled={!isRunning} type="primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </>
        )}
        {!isRunning && time > 0 && (
          <Button handler={handleClear} type="danger" disabled={false}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        )}
      </div>
      <div className="text-slate-50 text-lg md:text-xl flex flex-col h-1/2 md:h-1/4 gap-3 overflow-y-auto p-4">
        {laps.map((lap, index) => (
          <div key={lap + "" + index} className="inline-flex gap-4 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 inline-block"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              <FormatTime time={lap} />
            </div>
            <div className=" text-green-500 ml-4">
              {index !== laps.length - 1 ? lap - laps[index + 1] : 0}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
