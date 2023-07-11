import { useState, useEffect } from "react";

const useCustomFetch = (url) => {
  const [datas, setDatas] = useState(null);
  const [isFetchPending, setIsFetchPending] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((responses) => {
          console.log(responses);
          if (!responses.ok) {
            throw Error(
              "Error Message: Could not fetch the data from the resources!"
            );
          }
          return responses.json();
        })
        .then((data) => {
          console.log(data);
          setDatas(data);
          setIsFetchPending(false);
          setIsError(null);
        })
        .catch((err) => {
          setIsFetchPending(false);
          setIsError(err.message);
          console.log(err.message);
        });
    }, 2000);
  }, [url]);

  return { datas, isFetchPending, isError };
};

export default useCustomFetch;
