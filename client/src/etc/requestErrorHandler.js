


export default function requestErrorHandler(message, code){
    switch (code) {
        case 403:
            console.log(message)
            return(<div>Must be logged in</div>)
            break;
    
        default:
            break;
    }
}