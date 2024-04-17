interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome() {
		return 'Working from homw';
	}

	getCoffeeBreak() {
		return 'Getting a coffe break';
	}

	workDirectorTasks() {
		return 'Getting to director tasks';
	}
}

class Teacher implements TeacherInterface {
	workFromHome() {
		return 'Cannot work from home';
	}

	getCoffeeBreak() {
		return 'Cannot have a break';
	}

	workTeacherTasks() {
		return 'Getting to work';
	}
}

const createEmployee = (salary: (number | string)): (Director | Teacher) => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

const isDirector = (employee: (Director | Teacher)) => {
  return employee instanceof Director;
}

const executeWork = (employee: (Director | Teacher)) => {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

type Subjects = ('Math' | 'History');

const teachClass = (todayClass: Subjects): string => {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
