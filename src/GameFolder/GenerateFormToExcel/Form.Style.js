export default theme => ({
    container: () => ({
        maxWidth: "500px",
        height: "455px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "5px",
    }),
    formGroup: () => ({
        marginBottom: "20px",
    }),
    label: () => ({
        display: "block",
        fontWeight: "bold",
    }),
    select: () => ({
        width: "27%",
        padding: "10px",
        border: "1px solid #ccc",
        bordeRadius: "5px",
    }),
    button: () => ({
        backgroundColor: "#007BFF",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#0056b3"
        }
    }),

})