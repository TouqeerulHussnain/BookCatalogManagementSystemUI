import { Chapter } from "./Chapter";



export interface Book {
    Id: string,
    Title: string,
    AuthorName: string,
    PublicationDate: string,
    ISBN: string,
    Genre: string,
    Tag: [],
    Chapter: []
    PageCount: number,

}