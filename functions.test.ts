const {shuffleArray} = require('./utils')

const chara =['Agzok','Khaldoon','Yusraa','Khamul','Shagrat']

const chara2 = ['The Shadow', 'Aldo','Fienne','Ragnaros','Gorbat']

describe('shuffleArray should return array', () => {
    test('return chara array', () => {
        expect(Array.isArray(shuffleArray(chara))).toBe(true)
    })

    test('arrayContaining',() => {
        expect(['Agzok','Khaldoon','Yusraa','Khamul','Shagrat']).toEqual(expect.arrayContaining(chara))
    })

    test('Chara2 list contains Fienne', () => {
        expect(chara2).toContain('Fienne')
    })
    // CODE HERE
})