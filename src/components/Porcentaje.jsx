import React from "react";
import {Progress} from "@nextui-org/react";

const Porcentaje = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 94 ? 94 : v + 1));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <Progress
      aria-label="Downloading..."
      size="md"
      value={value}
      color="success"
      showValueLabel={true}
      className="max-w-md"
    />
  );
}

export default Porcentaje;