import React from "react";

interface Props {
  className?: string;
}

export const About: React.FC<Props> = ({ className }) => {
  return (
    <div className="text-lg mt-5">
      <h1 className="text-xl">Home -{">"} About</h1>
      <p className="mt-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis,
        illum ipsa veritatis dolorum iste placeat facere reprehenderit
        aspernatur totam at. Aperiam eius dignissimos error pariatur
        exercitationem mollitia fugit, debitis laborum. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Perspiciatis, illum ipsa veritatis
        dolorum iste placeat facere reprehenderit aspernatur totam at. Aperiam
        eius dignissimos error pariatur exercitationem mollitia fugit, debitis
        laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Perspiciatis, illum ipsa veritatis dolorum iste placeat facere
        reprehenderit aspernatur totam at. Aperiam eius dignissimos error
        pariatur exercitationem mollitia fugit, debitis laborum. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Perspiciatis, illum ipsa
        veritatis dolorum iste placeat facere reprehenderit aspernatur totam at.
        Aperiam eius dignissimos error pariatur exercitationem mollitia fugit,
        debitis laborum. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Perspiciatis, illum ipsa veritatis dolorum iste placeat facere
        reprehenderit aspernatur totam at. Aperiam eius dignissimos error
        pariatur exercitationem mollitia fugit, debitis laborum.
      </p>
    </div>
  );
};
