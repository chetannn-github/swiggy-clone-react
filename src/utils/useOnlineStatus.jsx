// import { useState } from 'react';

// function useOnlineStatus() {
//   const [isOnline, setIsOnline] = useState(navigator.onLine);
// // glt tarkia event handle krne kaa tumne jo mess create kriii hh ussse cleanup bhii krna hogaaa
//   function handleOnline() {
//     setIsOnline(true);
//     console.log("online");
//   }

//   function handleOffline() {
//     setIsOnline(false);
//     console.log("off");
//   }

//   window.addEventListener('online', handleOnline);
//   window.addEventListener('offline', handleOffline);

//   return isOnline;
// }

// export default useOnlineStatus;


import { useState, useEffect } from 'react';

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
// console.log(navigator);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
      // console.log("online");
    }

    function handleOffline() {
      setIsOnline(false);
      // console.log("offline");
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      // here you have to clear your all mesh..
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

export default useOnlineStatus;
