import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify';


function Card(props) {

    const course = props.course;
    const likedCourses = props.likedCourses;
    const setlikedcourses = props.setlikedcourses;
    function clickhandler() {
        if (likedCourses.includes(course.id)) {
            setlikedcourses((prev) => prev.filter((cid) => ( cid !== course.id )));
            toast.warning("Like Removed")
        }

        else {

            if (likedCourses.length === 0) {
                setlikedcourses([course.id]);
            }
            else {
                setlikedcourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }

    }

    return (
        <div className='relative w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url}></img>

                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                    <button onClick={clickhandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"></FcLike>):(<FcLikePlaceholder fontSize='1.75rem'></FcLikePlaceholder>) 
                           }
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className='mt-2 text-white'>{
                    course.description.length > 100 ? (course.description.substr(0, 100) + '...') : (course.description)
                }</p>
            </div>
        </div>
    );
}

export default Card;