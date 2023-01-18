import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="295" rx="10" ry="10" width="280" height="27" /> 
    <rect x="0" y="342" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="451" rx="10" ry="10" width="91" height="27" /> 
    <rect x="123" y="447" rx="20" ry="20" width="152" height="45" /> 
    <circle cx="142" cy="164" r="125" />
  </ContentLoader>
)

export default Skeleton;
