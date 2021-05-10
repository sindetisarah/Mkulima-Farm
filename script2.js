class Mkulima{
    
    constructor(){
     this.product=[] ;
     this.vendor=[]; 
     this.farms=[];
    };
    //A method used to add a farm to the list of farms 
    addFarm(name,id,farmName,phoneNumber,address){
        let myfarm={
            name:name,
            id:id,
            farmName:farmName,
            phoneNumber:phoneNumber,
            address:address }
        this.farms.push(myfarm);
    }
    //A method used to remove a farm that already exists in the list of farms 
    //Loop through the list of farms by the given id of the farm
    removeFarm(farmId){
        let farmR=this.farms.find(farmR=>farmR.farmId==farmId)
        return  delete this.farms[farmR]
        
    }
    //A method to update a farm by lloping throught the list of farms using the farmId
    update(farmId,farmer,phoneNumber,Address){
       
      var  updated=this.farms.find(updated=>updated.farmId==3)
       
        updated={
            farmId:farmId,
            farmer:farmer,
            phoneNumber:phoneNumber,
            Address:Address
        }
        return updated
    }
    //A method to get a farm
    getFarm(farmId){
        let findFarm=this.farms.find(findFarm=>findFarm.id==farmId)
        return findFarm

        }

    ;
    
    //A method to add new product to the list
    addProduct(name,productId,price){
        let newProduct={
            name:name,
            productId:productId,
            price:price
        }
        this.product.push(newProduct)

    }
    //removing a product
    removeProduct(productId){
        var removeP=this.product.find(removeP=>removeP.productId==productId)
        return removeP


    }
    //updating a product
    updateProduct(productId,name,price){
        var  updatedP=this.product.find(updated=>updated.productId==3)
       
        updatedP={
            productId:productId,
            name:name,
            price:price,
            
        }
        return updatedP
    }
    //fetching a particular product by its id

    
    getProduct(productId){
        let findProduct=this.product.find(findProduct=>findProduct.productId==productId)
        return findProduct

    }
    //accessing all the products in the list
    printProducts(){
        for (var item of this.product)
        console.log([`${item.name}:${item.price}`])

    }
    //calculating  the order cost of a given product
    calculateOrderCost(productId,quantity){
    let product=this.product.find(product=>product.productId==productId)
    return product.price*quantity
    


    }
}

    
//instance of an object

var mkulima=new Mkulima()
//instance invocation on  farm_list
mkulima.addFarm("Solia",1,"Juliet","0743566890","10")
mkulima.addFarm("Lenana",2,"Sindet","07435424290","11")
mkulima.addFarm("Fahari",3,"Constant","07435424290","12")
mkulima.addFarm("Kajiado",4,"Shadya","07435424290","13")



console.log(mkulima.removeFarm(1))
console.log(mkulima.update(1,"Mitchel","0700","14"))
console.log(mkulima.getFarm(2))

console.log(mkulima.farms)
//instance invocations on product_list
mkulima.addProduct("Groceries",1,20.00)
mkulima.addProduct("Vegetable",2,30.00)
mkulima.addProduct("Fruits",3,50.00)
mkulima.addProduct("Salads",4,60.00)

//accessing the list of products
console.log(mkulima.product)

//mehods iterating through the list of products
console.log(mkulima.getProduct(1))
console.log(mkulima.removeProduct(2))
console.log(mkulima.updateProduct( "Mangoes",3,70.00))
console.log(mkulima.getProduct(1))
mkulima.printProducts()
console.log(mkulima.calculateOrderCost(4,2))



 //console.log(mkulima.farms)