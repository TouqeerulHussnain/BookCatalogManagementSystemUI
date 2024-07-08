import { Chapter } from "./Chapter";



export interface Book {
    Title: string,
    AuthorName: string,
    ISBN: string,
    Genre: string,
    Tag: [Tag],
    Chapter: [Chapter]

}