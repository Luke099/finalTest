
const arrayNumber = [1, 2, 3, 54, 9, 2];
const arrayObj = [{ id: "id1", name: "obj1" }, { id: "id2", name: "obj2" },
{ id: "id3", name: "obj3" }, { id: "id4", name: "obj4" }, { id: "id5", name: "obj5" }];

class FindIndexHelper {
	findIndexNumber(array, number) {
		for (let i = 0; i < array.length; i++) {
			if (array[i] === number) {
				return i;
			}
		}
		return -1;
	}
	findIndexObjById(array, id) {
		for (let i = 0; i < array.length; i++) {
			if (array[i].id === id) {
				return i;
			}
		}
		return -1;
	}
}


const findIndex = new FindIndexHelper();

let indexNumber = findIndex.findIndexNumber(arrayNumber, 3);
let indexObj = findIndex.findIndexObjById(arrayObj, 'id2');
console.log({ indexNumber, indexObj });