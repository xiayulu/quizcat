// 通知组件
export interface Notification {
    title?: string,
    type?: string,
    detail: string,
}

//////////////////////////////// token
export interface Token {
    value: string,
    expiredAt: string,
    isAdmin: boolean,
}

export interface SigninRes {
    id: number,
    avatar: string,
    name: string,
    token: string,
    expiredAt: string,
    isAdmin: boolean,
}

// user
export interface User {
    id: number,
    name: string,
    avatar: string,
}

////////////////////////////////

// 评论与动态
export interface Reply {
    id: number,
    likeNum: number,
    content: string,
    commentId: number,
    updatedAt: string,
    userId: number,
    username: string,
    avatar: string
}

export interface Comment {
    id: number,
    likeNum: number,
    content: string,
    articleId: number,
    updatedAt: string,
    userId: number,
    username: string,
    avatar: string
}

// books
export interface Book {
    id: number,
    name: string,
    cover: string,
    about: string,
    hard: number,
    category: string
}

export interface BookForm {
    name: string,
    about: string,
    category: string
    hard: number,
    cover: string,
}

export interface UpdateBookForm {
    id: number,
    name: string | null,
    about: string | null,
    category: string | null,
    hard: number | null,
    cover: string | null,
}

export interface Manager {
    userId: number,
    job: string,
    name: string,
    avatar: string
}

export interface Chapter {
    id: number,
    bookId: number,
    name: string,
    part: string,
    nextId: null | number,
    status: number,
    updatedAt: string
}

export interface ChapterForm {
    name: string,
    part: string,
    content: string,
    bookId: number,
    currentId: number | null,
}

export interface UpdateChapterForm {
    id: number,
    name: string | null,
    part: string | null,
    content: string | null,
}

export interface Exercise {
    id: number,
    title: string,
    tags: string,
    hard: number,
    bookId: number,
    updatedAt: string,
}

export interface ExerciseForm {
    bookId: number,
    title: string,
    content: string,
    solution: string,
    tags: string,
    hard: number
}

export interface UpdateExerciseForm {
    id: number,
    title: string | null,
    content: string | null,
    solution: string | null,
    tags: string | null,
    hard: number | null
}


// exercise -------------------
export interface Exercise {
    id: number,
    title: string,
    quizNum: number,
    createdAt: string,
    updatedAt: string,
}

export interface Quiz {
    id: number,
    kind: number,
    level: number,
    content: string,
    solution: string,
    createdAt: string,
    updatedAt: string,
    exerciseID: number,
}

export interface Solution {
    id: number,
    score: number,
    content: string,
    quizID: number,
    updatedAt: string,
    userid: number,
    username: string,
    avatar: string
}

// interview--面试喵
export interface InterviewBook {
    id: number,
    name: string,
    cover: string,
    updatedAt: string,
}

export interface IQuestion {
    id: number,
    body: string,
    solution: string,
    bookID: number,
    updatedAt: string,
}

export interface ICommentWithUser {
    id: number,
    voteNum: number,
    content: string,
    iQuestionID: number,
    updatedAt: string,
    userid: number,
    username: string,
    avatar: string
}

export interface PostArticle {
    kind: string,
    content: string,
    link: string,
}

export type PostDetail = PostArticle;

export interface Post {
    id: number,
    likeNum: number,
    detail: PostDetail,
    updatedAt: string,
    userid: number,
    username: string,
    avatar: string
}


export interface IComment {
    id: number,
    voteNum: number,
    content: string,
    iQuestionID: number,
    updatedAt: string,
}

// words ---------------
export interface WordSet {
    id: number,
    title: string,
    cover: string,
    createdAt: string,
    updatedAt: string,
}

export interface Word {
    id: number,
    en: string,
    cn: string,
    wordSetID: number,
}