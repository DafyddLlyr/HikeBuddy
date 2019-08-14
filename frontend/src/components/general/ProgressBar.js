import React from 'react'

const ProgressBar = ({progress, total}) => {

  const progressPercentage = () => parseInt((progress / total) * 100)

  const progressContainer = {
    width: "25vw",
    height: "5vh",
    borderRadius: "50px",
    backgroundColor: 'white',
    display: "flex",
    alignItems: "center"
  }

  const progressBar = {
    width: `${progressPercentage()}%`,
    backgroundColor: "green",
    height: "5vh",
    borderRadius: "50px 0px 0px 50px"
  }

  const text = {
    textAlign: "center",
    fontSize: "1rem"
  }

  return(
    <>
      <div style={progressContainer}>
        <div style={progressBar}></div>
      </div>
    <h2 style={text}>{progressPercentage()}% of the Scottish National Trail completed</h2>
    <h2 style={text}>{parseInt(progress)}km walked, only {parseInt(total - progress)}km to go!</h2>
    </>
  )
}

export default ProgressBar;
