class song{
    songTitle:string;
    songSinger:string;
    albumName:string;


    constructor(title,singer,name:string){
        this.songTitle=title;
        this.songSinger=singer;
        this.albumName=name;
    }
  
}
var songs:string[]=['song1','song2','song3','song4'];
console.log('${this.songTitle}')