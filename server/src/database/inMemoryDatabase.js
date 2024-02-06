export class DatabaseMemory {
    items = new Array();

    refresh(){
        this.items = []
    }

    save(content){
        this.items = this.items.concat(content)
        return this.items;
    }

    list(){
        return this.items;
    }

}