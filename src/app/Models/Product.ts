export class Product {
    public name: string 
    public description: string | undefined
    public price: number | undefined
    public taxes: number | undefined
    public imgUrl: string | undefined


    constructor(name: string, description: string = 'default', price=0.0, taxes=6.0, imgUrl: string ='') {
        this.name = name
        this.description = description
        this.price = price
        this.taxes = taxes
        this.imgUrl = imgUrl
    }

}