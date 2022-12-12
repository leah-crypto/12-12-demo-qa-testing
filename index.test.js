 const {
    formatTitle, 
    shortenBio, 
    convertLength
   // formatTitle
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }
//checking to see if jest is set up
  test('test function', () => {
    expect(2).toBe(2)
  })
//check to see if we can access our data
  test('first name should be patten', () =>{
    expect(testData.firstName).toBe('Patten')
  })
//describe block to group tests
  describe('forrmatTitle tests', () =>{

    test('formatTitle should return a string', ()=>{
      let formattedTitle = formatTitle(testData.title)
      expect(typeof formattedTitle).toBe('string')
    })

    test('formatTitle should format title correcly', () => {
      let formattedTitle = formatTitle(testDate.title)
      expect(formattedTitle).toBe('Nulla Ac')
    })

  })

  describe('shortenBio tests', () =>{

    test('shortenBio will return a smaller bio string', () =>{
      let shortBio = shortenBio(testData.bio)
      expect(shortBio.length).toBeLessThan(testData.bio.length)
    })

    test('shortenBio should add ... to the end of the line', () => expect(shortBio).toContain('...'))
  })

  describe('convertLength tests', () =>{
    let result = convertLength(testData.length)
    let result2 = convertLength(30)

    test('convertLength should return an arry with 2 elements', () =>{
      expect(result.length().toHaveLength(2))

    test('convertLength can handle numbers less than 60', () =>{
      expect(result2[1].toEqual(30))
    })
  
    })

    describe('toBE vs toEqual', () =>{
      
      test('toBe vs toEqual', () =>{
        const myObj = {myNum:4}
        const myObjTwo = {myNum:4}
        expect(myObj).toEqual(myObjTwo)
      })

      test('toBe vs toEqual', () =>{
        const myObj = {myNum:4}
        const myObjTwo = {myNum:4}
        expect(myObj).toEqual(myObjTwo)
      })
    })
  })

  