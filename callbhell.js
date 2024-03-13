const cart = ["shirt" , "rings" , "pants"]

api.createOrder(function(){
    api.proceedToPayment(function(){
        api.Summary(function(){
            api.walletUpdated()
        })
    })
})

//pyramid of doom

function fetchApiData(callback1){
    setTimeout(function(){
        console.log("fetching api data")
        var data = ("Some data from API is present")
        callback1(data)
    },1000)
}

function processApiData(data , callback2){
    setTimeout(function(){
        console.log("processing data!")
        var processedData = data.d1.toUpperCase()
        callback2(processedData)
    },1000)
}

function displayData(processedData){
    setTimeout(function(){
        console.log("Data is being displayed")
        processedData();  
    },1000)
}

fetchApiData(function(data){
    processApiData(data,function(processedData){
        displayData(processedData)
    })
})
//callback hell created


