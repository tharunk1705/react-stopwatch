/* eslint-disable react/prop-types */

const FormatTime = ({ time }) => {
  return (
    <span className="cursor-pointer">
      <span title="Hours" className="mx-2">
        {Math.floor(time / 3600) < 10 ? "0" : ""}
        {Math.floor(time / 3600)}
      </span>
      :
      <span title="Minutes" className="mx-2">
        {Math.floor(time / 60) < 10 ? "0" : ""}
        {Math.floor(time / 60)}
      </span>
      :
      <span title="Seconds" className="mx-2">
        {time % 60 < 10 ? "0" : ""}
        {time % 60}
      </span>
    </span>
  );
};

export default FormatTime;
