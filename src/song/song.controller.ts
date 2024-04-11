import { Controller, Get, Put, Delete, Post, Body } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongsDTO } from './dto/create-song';

@Controller('song')
export class SongController {

    constructor(private ServiceSongs:SongService){}
    @Post()
    create(@Body() createSong: CreateSongsDTO){
        return this.ServiceSongs.createSongs(createSong)
    }
    
    @Get()
    findAll(){
        return this.ServiceSongs.findAll()
    }

    @Get(':id')
    findOne(){
        return "Just find one"
    }
    @Put(":id")
    update() {
    return "update song on the based on id";
    }

    @Delete(":id")
    delete() {
    return "delete a song on the based on id";
    }
}
