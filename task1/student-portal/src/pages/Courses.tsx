interface Course{
    id:number;
    title:string;
}

const courses: Course[]=[
    {id:1, title:"Web development"},
    {id:2, title:"Data science"},
    {id:3, title:"Math"},
];

function Courses(){
    return(
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map((course)=>(
                    <li key={course.id}>
                        {course.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Courses;