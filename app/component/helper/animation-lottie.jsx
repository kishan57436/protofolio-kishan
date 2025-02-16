// "use client"

// import Lottie from "lottie-react";

// const AnimationLottie = ({ animationPath, width }) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationPath,
//     style: {
//       width: '95%',
//     }
//   };

//   return (
//     <Lottie {...defaultOptions} />
//   );
// };

// export default AnimationLottie;


// "use client";

// import { useEffect, useState } from "react";
// import Lottie from "lottie-react";

// const AnimationLottie = ({ animationPath }) => {
//   const [animationData, setAnimationData] = useState(null);

//   useEffect(() => {
//     fetch(animationPath)
//       .then((response) => response.json())
//       .then((data) => setAnimationData(data))
//       .catch((error) => console.error("Error loading animation:", error));
//   }, [animationPath]);

//   if (!animationData) return <p>Loading...</p>;

//   return <Lottie animationData={animationData} loop autoplay style={{ width: "95%" }} />;
// };

// export default AnimationLottie;
