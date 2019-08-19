// 1.1
export const add = (x: number, y: number) => x + y;

// 1.2
export const avg = (nums: Array<number>) => {
    if (nums.length === 0) return null;
    return nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
}

// 1.3
interface RootStore1 {
    time: { endDate: Date };
}
export const selectIsTimeLeft = (now: Date) => (store: RootStore1): boolean => {
    return store.time.endDate > now;
}


// 1.4
interface Lesson {
    id: string;
    content: string;
}
interface Chapter {
    id: string;
    lessons: Array<Lesson>;
}
interface RootStore2 {
    chapterStore: Array<Chapter>;
}
export const selectLessonChapter = (lessonId: string) => (store: RootStore2) => {
    const chapters = store.chapterStore;

    return chapters.find(({ lessons }) => lessons.map(({ id }) => id).includes(lessonId));
};

// 1.5
export const reducer = (action, state = {}) => {
    if (action.type === 'add answer') {
        return {
            ...state,
            [action.payload.id]: action.payload,
        }
    }
    return state;
}
