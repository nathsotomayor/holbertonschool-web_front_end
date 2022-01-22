const createClassRoom = numbersOfStudents => {
  let students = [];


  const studentSeat = seat => {
    return () => {
      return seat;
    };
  }

  for (let i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }

  return students;
}

let classRoom = createClassRoom(10);