class Album {
    artist: string;
    title: string;
    tracks?: number

    constructor (artist:string, titile:string, tracks?:number) {
        this.artist = artist,
        this.title = titile
        if (tracks !== undefined) {
            this.tracks = tracks
        }
    }

}

function make_album(artist: string, title:string, tracks?:number): Album {
    let album : Album = {artist, title} 
    if (tracks !== undefined) {
        album.tracks = tracks
    }
    return album
}


console.log(make_album("Artist1", "First Album"));
console.log(make_album("Artist2", "Second Album"));
console.log(make_album("Artist3", "Third Album", 10));

