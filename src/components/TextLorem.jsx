import { useEffect, useState } from "react";

const TextLorem = ({ desc }) => {
  const [show, setShow] = useState(null);

  useEffect(() => {
    if (desc) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [desc]);

  return (
    <div>
      {show ? (
        desc
      ) : (
        <div className="flex gap-5 "> ≡
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            exercitationem, rerum natus, odio atque sit quas doloribus excepturi
            eligendi ab, a velit aspernatur magni at ipsum et accusantium
            provident. Quidem.
          </p>
        </div>
      )}
    </div>
  );
};
export default TextLorem;
