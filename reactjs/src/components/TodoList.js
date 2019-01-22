import React from 'react';

const ListItem = (props) => {
	let { item, deleteWorkItem } = props;
	return (
		<li className="list-group-item" onClick={() => deleteWorkItem(item.id)}>{item.content}</li>
	)
}

const TodoList = (props) => {
	let { listToDoWork, deleteWorkItem } = props;
	let listItem = 'No Work To Do';
	if (listToDoWork.length) {
		listItem = listToDoWork.map(item => {
			return <ListItem key={item.id} item={item} deleteWorkItem={deleteWorkItem} />
		})
	}
	return (
		<div className="card">
			<div className="card-header">
				List Work
      </div>
			<div className="card-body">
				<ul className="list-group">
					{listItem}
				</ul>
			</div>
		</div>
	)
}

export default TodoList;