

const studentattendancedata = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch('http://localhost:5008/api/student/attendance', {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.json();
};

export default studentattendancedata;