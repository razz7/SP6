const person = {
    firstName: "Kurt",
    lastName: "Wonnegut",
    gender : "Male",
    email: "kurt@wonnegut.dk"
}
export default person;

export const males = ["Peter","Jan"];
export const females = ["Janne","Sarah"];
const all = [...males, ...females];

//Personv2 Excersize 6
const personV2 = {...person, phone: '123456', all};
console.log(personV2)

//Props-2 A
export const persons = [
    {firstName:"Kurt",lastName:"Wonnegut",gender: "Male",email: "k@wonnegut.dk", phone: "12345"},
    {firstName:"Jane",lastName:"Wonnegut",gender:"female",email:"j@wonnegut.dk", phone: "12345"},
    {firstName:"ib",lastName: "Wonnegut",gender : "Male",email: "i@wonnegut.dk", phone: "12345"},
    ];
    