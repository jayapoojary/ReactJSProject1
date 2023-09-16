export default theme => ({
    footerHeight: () => ({
        height: '50px',
        backgroundColor:'gray'
    }),
    ImageStyle: () => ({
        height: '100%',
        width: '100%',
        border: '0px',
        borderRadius: '15px',
    }),
    buttonStyle: () => ({
        height: '39px',
        width: '49px',
        border: '0px',
        marginTop: '10px',
        '&:hover': {
            opacity: 1,
            backgroundColor: 'transparent',
            boxShadow: '1px 2px 5px black'
        },
        borderRadius: '15px',
    })
})