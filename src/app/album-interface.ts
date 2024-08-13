export interface AlbumInterface {
    id:string,
    ref:string,
    name:string,
    title: string,
    description: string,
      duration: number,
    url:string,
    tags?:string[],
    like?:string,
    status: string,
    list:string[]
}
