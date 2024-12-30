


const useClearStateOnRefresh = () => {


    if (window.performance) {
        if (performance.navigation.type == 1) {
            alert("This page is reloaded");
        } else {
            alert("This page is not reloaded");
        }
    }



};



export default useClearStateOnRefresh;