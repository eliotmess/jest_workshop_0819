import { add, avg, selectIsTimeLeft, selectLessonChapter, reducer } from '../functions';

describe('tests for functions.ts', () => {
//1.1
    it('should add numbers', () => {
        expect(add(1, 2)).toEqual(3);
    });
//1.2
    it('should return average of numeric array or null if empty', () => {
        expect(avg([1, 2, 3])).toEqual(2);
        expect(avg([])).toEqual(null);
    });
//1.3
    it('should return true if time left', () => {
        const now = new Date('2019-07-08');
        const endDate = new Date('2019-07-12');
        const store = {
            time: {
                endDate
            } 
        };
        expect(  selectIsTimeLeft(now)(store)  ).toEqual(true);
    });

    it('should return false if no time left', () => {
        const now = new Date('2019-07-05');
        const endDate = new Date('2019-07-04');
        const store = {
            time: {
                endDate
            } 
        };
        expect(  selectIsTimeLeft(now)(store)  ).toEqual(false);
    });
//1.4
    it('should find a chapter in store based on lesson id', () => {
        const lesson = {
            id: 'lessonId',
            content: 'lessonContent'
        };
        const chapter = {
            id: 'chapterId',
            lessons: [lesson]
        };
        const store = {
            chapterStore: [chapter]
        };

        expect( selectLessonChapter(lesson.id)(store) ).toBe(chapter)
    });
//1.5
    it('should return new state if action type is add answer', () => {
        const action = {
            type: 'add answer',
            payload: {
                id: 'payloadId',
                content: 'payloadContent'
            }
        };
        const state = {};
        const newState = { ...state, [action.payload.id]: action.payload };
        expect( reducer( action, state ) ).toMatchObject(newState);
        
    });

    it('should return state if action type is not specified', () => {
        const action = {
            type: ''
        };
        const state = {};
        expect( reducer( action, state ) ).toBe(state);
    });
})