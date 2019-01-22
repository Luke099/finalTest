import React from 'react';
import TodoList from './TodoList';
import ToDoForm from './ToDoForm';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listToDoWork: [],
		}
	}
	addNewWork = (value) => {
		let {listToDoWork} = this.state;
		let newWork = {
			id: listToDoWork.length + 1,
			content: value,
		}
		listToDoWork.push(newWork);
		this.setState({
			listToDoWork,
		})
	}
	findIndexById = (array, id) => {
		for (let i = 0; i < array.length; i++) {
			if (array[i].id === id) {
				return i;
			}
		}
		return -1;
	}
	deleteWorkItem = (id) => {
		let { listToDoWork } = this.state;
		let index = this.findIndexById(listToDoWork, id);
		if (index !== -1) {
			listToDoWork.splice(index, 1);
			listToDoWork.forEach((workItem, index) => {
				workItem.id = index;
			});
			this.setState({
				listToDoWork,
			});
		}
	}
	render() {
		return (
			<>
				<TodoList listToDoWork={this.state.listToDoWork} deleteWorkItem={this.deleteWorkItem} />
				<br />
				<ToDoForm addNewWork={this.addNewWork} />
			</>
		)
	}
}

export default HomePage;