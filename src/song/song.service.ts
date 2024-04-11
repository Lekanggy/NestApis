import { Injectable } from '@nestjs/common';

@Injectable()
export class SongService {

    //Create new arr
    private readonly songs = []

    createSongs(k){
        this.songs.push(k)
        return this.songs
    }

    findAll(){
        return this.songs
    }
}
