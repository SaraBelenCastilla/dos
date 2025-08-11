import React from 'react'
import Fullpage from "@fullpage/react-fullpage";
const anchors = ["primera", "segunda", "tercera"];

function Home() {
  return (
   <Fullpage
    anchors={anchors}
    navigation
    scrollingSpeed={1000}
    render={({  }) => {
      return (
        <div>
          <div className="section">Sección 1</div>
          <div className="section">Sección 2</div>
          <div className="section">Sección 3</div>
        </div>
      );
    }}
  />
  )
}

export default Home