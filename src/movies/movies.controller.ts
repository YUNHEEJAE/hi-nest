import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService : MoviesService) { }

    // @Get("search")
    // search(@Query("year") searchingYear : string){
    //     return `We are searching for a movie made after: ${searchingYear}`;
    // }

    @Get()
    getAll(): Movie[]{
        return this.moviesService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') movieId: string) {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData){
        return this.moviesService.create(movieData);
    }

    @Delete(':id')
    remove(@Param('id') movieId: string){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id')
    path(@Param('id') movieId: string, @Body() updateData){
        return this.moviesService.update(movieId, updateData);
    }



}
