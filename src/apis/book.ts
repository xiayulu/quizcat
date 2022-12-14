const API_BASE = import.meta.env.VITE_API_BASE;

import type {
    BookForm,
    UpdateBookForm,
    Book,
    ChapterForm,
    Chapter,
    UpdateChapterForm,
    Manager,
    Exercise,
    ExerciseForm,
    UpdateExerciseForm
} from '@/types';

import { useTokenStore } from '@/stores/token';


export async function createBook(book: BookForm): Promise<Book> {
    const { token } = useTokenStore();
    const resp = await fetch(`${API_BASE}/books`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token?.value}`,
        },
        body: JSON.stringify(book)
    });

    if (resp.status >= 200 && resp.status < 300) {
        return resp.json()
    }

    throw new Error(resp.statusText)
}

export async function updateBook<T>(form: UpdateBookForm): Promise<T> {
    const { token } = useTokenStore();
    const resp = await fetch(`${API_BASE}/books/${form.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token?.value}`,
        },
        body: JSON.stringify(form)
    });

    if (resp.status >= 200 && resp.status < 300) {
        return resp.json()
    }

    throw new Error(resp.statusText)
}

export async function getNewBooks<T>(): Promise<T> {
    const resp = await fetch(`${API_BASE}/books?new=1`);

    if (resp.status >= 200 && resp.status < 300) {
        return resp.json()
    }

    throw new Error(resp.statusText)
}

export async function getBooksByCategory<T>(cate: string): Promise<T> {
    const resp = await fetch(`${API_BASE}/books?category=${cate}`);

    if (resp.status >= 200 && resp.status < 300) {
        return resp.json()
    }

    throw new Error(resp.statusText)
}

export async function getBookById<T>(id: string | number): Promise<T> {
    const resp = await fetch(`${API_BASE}/books/${id}`);

    if (resp.status >= 200 && resp.status < 300) {
        return resp.json()
    }

    throw new Error(resp.statusText)
}

export async function getManagers(bookId: string | number): Promise<Manager[]> {
    const resp = await fetch(`${API_BASE}/managers?bookId=${bookId}`);

    if (resp.status >= 200 && resp.status < 300) {
        return resp.json()
    }

    throw new Error(resp.statusText)
}

export async function createChapter(chapter: ChapterForm): Promise<Chapter> {
    const { token } = useTokenStore();
    const resp = await fetch(`${API_BASE}/chapters`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token?.value}`,
        },
        body: JSON.stringify(chapter)
    });

    if (resp.status >= 200 && resp.status < 300) {
        return resp.json()
    }

    throw new Error(resp.statusText)
}

export async function updateChapter<T>(form: UpdateChapterForm, bookId: number): Promise<T> {
    const { token } = useTokenStore();
    const resp = await fetch(`${API_BASE}/chapters/${form.id}?bookId=${bookId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token?.value}`,
        },
        body: JSON.stringify(form)
    });

    if (resp.status >= 200 && resp.status < 300) {
        return resp.json()
    }

    throw new Error(resp.statusText)
}


export async function getChapters<T>(bookId: string | number): Promise<T> {
    const resp = await fetch(`${API_BASE}/chapters?bookId=${bookId}`);

    if (resp.status >= 200 && resp.status < 300) {
        return resp.json()
    }

    throw new Error(resp.statusText)
}

export async function getChapterContent<T>(chapterId: string | number): Promise<T> {
    const resp = await fetch(`${API_BASE}/chapters/${chapterId}/content`);

    if (resp.status >= 200 && resp.status < 300) {
        return resp.json()
    }

    throw new Error(resp.statusText)
}

export async function createExercise(exercise: ExerciseForm): Promise<Exercise> {
    const { token } = useTokenStore();
    const resp = await fetch(`${API_BASE}/exercises`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token?.value}`,
        },
        body: JSON.stringify(exercise)
    });

    if (resp.status >= 200 && resp.status < 300) {
        return resp.json()
    }

    throw new Error(resp.statusText)
}

export async function updateExercise<T>(form: UpdateExerciseForm, bookId: number): Promise<T> {
    const { token } = useTokenStore();
    const resp = await fetch(`${API_BASE}/exercises/${form.id}?bookId=${bookId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token?.value}`,
        },
        body: JSON.stringify(form)
    });

    if (resp.status >= 200 && resp.status < 300) {
        return resp.json()
    }

    throw new Error(resp.statusText)
}

export async function getExercises<T>(bookId: string | number): Promise<T> {
    const resp = await fetch(`${API_BASE}/exercises?bookId=${bookId}`);

    if (resp.status >= 200 && resp.status < 300) {
        return resp.json()
    }

    throw new Error(resp.statusText)
}

export async function getExerciseContent<T>(exerciseId: string | number): Promise<T> {
    const resp = await fetch(`${API_BASE}/exercises/${exerciseId}/content`);

    if (resp.status >= 200 && resp.status < 300) {
        return resp.json()
    }

    throw new Error(resp.statusText)
}