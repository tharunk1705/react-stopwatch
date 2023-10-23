/* eslint-disable react/prop-types */

const FormatTime = ({ time }) => {
  return (
    <span className="cursor-pointer grid grid-cols-11 gap-2">
      <span title="Hours" className=" col-span-3">
        {Math.floor(time / 3600) < 10 ? "0" : ""}
        {Math.floor(time / 3600)}
      </span>
      <span className="col-span-1">:</span>
      <span title="Minutes" className="col-span-3">
        {Math.floor(time / 60) < 10 ? "0" : ""}
        {Math.floor(time / 60)}
      </span>
      <span className="col-span-1">:</span>
      <span title="Seconds" className=" col-span-3">
        {time % 60 < 10 ? "0" : ""}
        {time % 60}
      </span>
    </span>
  );
};

export default FormatTime;
