export default theme => ({
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
})