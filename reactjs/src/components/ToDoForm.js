import React from 'react';

class ToDoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toDoWork: ''
		}
	}
	handelSubmit = (e) => {
		e.preventDefault();
		if (this.state.toDoWork === '') {
			alert('please input some text first');
			return false;
		}
		this.props.addNewWork(this.state.toDoWork);
		this.setState({
			toDoWork: '',
		})
	}
	handelChange = (e) => {
		let target = e.target;
		let value = target.value;
		this.setState({
			toDoWork: value
		})
	}
	render() {
		return (
			<div className="card">
				<div className="card-header">
					To Do Form
      </div>
				<div className="card-body">
					<form onSubmit={this.handelSubmit}>
						<div className="form-group row">
							<label htmlFor="todoWork" className="col-sm-2 col-form-label">To do work:</label>
							<div className="col-sm-10">
								<input value={this.state.toDoWork} onChange={this.handelChange} type="text" className="form-control" id="todoWork" placeholder="To do work" />
							</div>
						</div>
						<br />
						<div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
							<button type="submit" className="btn btn-primary">submit</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default ToDoForm;