import Profile from "./Profile";
import { useEffect, useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <h3>{title}</h3>
      {isVisible ? (
        <div>
          <button
            className="underline cursor-pointer"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Hide
          </button>
          <p>{description}</p>
        </div>
      ) : (
        <button
          className="underline cursor-pointer"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
      {/* {isVisible && <p>{description}</p>} */}
    </div>
  );
};

const About = () => {
  const [visibleItem, setVisibleItem] = useState(" aboutme");
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("Use effect render");
  //   }, 1000);
  //   return () => {
  //     console.log("Unmounting the useEffect");
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <div className="text-center font-bold text-xl">
      <h1>About Section</h1>
      <p>This is the about page</p>
      <Profile name={"Prashant Timilsina"} grade="Bachelor" />
      <Section
        title={"Hi I am Prashant Timilsina"}
        description={"This is a practice website for learning react js"}
        isVisible={visibleItem == "aboutme"}
        setIsVisible={() => {
          setVisibleItem("aboutme");
        }}
      />
      <Section
        title={"About my qualification"}
        description={"Currently studying bachelor degree in Computer Science"}
        isVisible={visibleItem == "qualification"}
        setIsVisible={() => {
          setVisibleItem("qualification");
        }}
      />
      <Section
        title={"About Hometown"}
        description={"My hometown is Sarangkot.It is popular for paragliding."}
        isVisible={visibleItem == "hometown"}
        setIsVisible={() => {
          setVisibleItem("hometown");
        }}
      />
    </div>
  );
};
export default About;
