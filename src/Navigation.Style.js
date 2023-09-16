export default (theme) => ({
  gap: () => ({
    display: "flex",
    alignItems: "right", // Change this to 'flex-end' to align content to the right
    justifyContent: "spaceBetween",
    color: "blue",
    marginLeft:'1000px'
  }),
  contentGap: () => ({
      marginLeft:'10px',
      color: "black",
      paddingTop:'10px'
  }),
  mainDiv: () => ({
    backgroundColor:'lightBlue',
    height:'45px'
  })
});
