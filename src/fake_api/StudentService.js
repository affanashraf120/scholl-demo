class StudentService {
  getStudents = (selectedPageSize, currentPage, selectedOrderOption) =>
    new Promise((resolve, reject) => {
      const data = {
        currentPage: 1,
        data: [
          {
            id: "12d3",
            roll_no: "",
            full_name: "",
            parent: "",
            street_address: "",
            phone: "",
            action: "",
            img:''
          },
        ],
      };
    });
}
