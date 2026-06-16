async function testAPI(){
    try{
        let result = await Promise.reject(" 503 Reject ");
    }
    catch(error){
        console.error("Error:", error);
    }
    finally{
        console.log("Clean up ");
    }
}
testAPI();