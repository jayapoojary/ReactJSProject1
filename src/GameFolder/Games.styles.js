export default theme => ({
    image1Stye: () => ({
        height: '75px',
        width: '75px',
        borderRadius: '45px',
        '&:hover': {
            opacity: 0.3
        },
        
    }),
    rockButton: () => ({
        height: '99px',
        width: '99px',
        borderRadius: '55px',
        '&:active': {
            opacity: 1,
            boxShadow: '1px 1px 15px black'
        }
    })
})