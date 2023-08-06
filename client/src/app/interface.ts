export type PostsInterface = PostInterface[]

export interface PostInterface {
    Posts: any
    _id: string
    title: string
    description: string
    tags: any[]
    author: string
    authorEmail: string
    avatar: string
    isFavourite: boolean
    likes: number
    date: string
    __v: number
}