// class Album {
//     // Properties
//     artist: string;
//     title: string;
//     tracks?: number
//     constructor(artist: string, title: string, tracks?:number ) {
//         this.artist=artist
//         this.title=title
//         if (tracks !== undefined) {
//             this.tracks = tracks
//         }
//     }
// }
// function make_album(artist: string, title: string, tracks?: number): Album {
//     let album : Album = { artist, title };
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// console.log(make_album("Artist1", "First Album"));
// console.log(make_album("Artist2", "First Album", 12));
// console.log(make_album("Artist3", "Third Album", 15));
class Album {
    artist;
    title;
    tracks;
    constructor(artist, titile, tracks) {
        this.artist = artist,
            this.title = titile;
        if (tracks !== undefined) {
            this.tracks = tracks;
        }
    }
}
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Artist1", "First Album"));
console.log(make_album("Artist2", "Second Album"));
console.log(make_album("Artist3", "Third Album", 12));
export {};
