class hashTable{
    constructor(size){
        this.size=size
        this.table=new Array(size)
    }


    hash(key)
    {
        let total=0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){
        const index=this.hash(key)
        // this.table[index]=value
        let bucket =this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let sameKey=bucket.find(item=>item[0]===key)
            if(sameKey){
                sameKey[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        const index=this.hash(key)
        // return this.table[index]
        let bucket=this.table[index]
        if(bucket){
            let sameKey=bucket.find(item=>item[0]===key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
    }


    remove(key){
        const index=this.hash(key)
        // this.table[index]=undefined
        let bucket=this.table[index]

        let sameKey=bucket.find(item=>item[0]===key)
        if(sameKey){
            bucket.splice(bucket.indexOf(sameKey),1)
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log("index:",i,"value:",this.table[i]);
            }
        }
    }
}


const hash=new hashTable(50)
hash.set("name","salman")
hash.set("age",21)
hash.set("place","mathilakam")
// hash.remove("age")
// hash.remove("name")
hash.display()
console.log(hash.get("name"));
