export class Project {
    public id?:number;
    public title?: string;
    public description?:string;
    public image?: string;
    public url?: string;

    public constructor(id:number,title: string, description:string,image: string, url: string) {
        this.id=id;
        this.title = title;
        this.description=description;
        this.image = image;
        this.url = url;
    }
}