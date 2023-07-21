import { useState } from 'react';
import Card from './Card'

function Cards(props) {
    const courses = props.courses;
    const category=props.category;
    const [likedCourses, setlikedcourses] = useState([]);

    function getcourses() {
        if(category=="All"){

            let allcourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allcourses.push(courseData);
                })
            })
            return allcourses;
        }

        else{
           return courses[category];
        }
    }




    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getcourses().map((course) => (

                    <Card key={course.id} course={course} likedCourses={likedCourses} setlikedcourses={setlikedcourses}></Card>
                ))
            }
        </div>
    );
}

export default Cards;