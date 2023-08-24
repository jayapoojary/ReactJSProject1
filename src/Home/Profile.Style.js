export default theme => ({
  mainDiv: () => ({
      backgroundColor: 'lightGray',
      height: '559px'
  }),
  sizing: () => ({
    height: "210px",
    borderRadius: "147.5px",
    marginTop: '25px',
    width: "219px",
  }),
  buttonStyle: () => ({
      color: 'white',
      backgroundColor: 'blue',
      border: '0px',
      height: '35px',
      width: '55px',
      marginTop: '15px',
      borderRadius: '5px',
      boxShadow: '2px 2px 5px black',
      '&:hover': {
          opacity: 0.3
      },
      '&:active': {
          opacity: 1
      },
  }),
  dialogStyles: () => ({
    height: '250px',
    width: '250px',
    backgroundColor: '#fff7e6',
    })
});
