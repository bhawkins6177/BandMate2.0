import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },    
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '150px',
        height: '100%',
        position: 'relative',
    },
    overlay: {
        position: 'relative',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'relative',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    notes: {
        padding: '0 16px',
        border: 'groove',
        borderRadius: '10px',
        fontSize: '15px'
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
})