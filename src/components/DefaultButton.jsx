import { Button } from 'flowbite-react';
import { Link } from "react-router-dom";


function defaultButton({ buttonText, className }) {
  return (
    <>

      <Link to="/contact" >
        <Button className={`${className} text-lg font-bold `}>  {buttonText} </Button>
      </Link>

    </>
  );
}

export default defaultButton;