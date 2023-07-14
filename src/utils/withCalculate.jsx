import React, { useState } from "react";

function withCalculate(OriginalComponent) {
  return (props) => {
    console.log(props);
    const [nomor, setNomor] = useState(0);

    const handleNomor = () => {
      setNomor(nomor + props.counter);
    };

    return (
      <OriginalComponent nomor={nomor} handleNomor={handleNomor} {...props} />
    );
  };
}

export default withCalculate;
