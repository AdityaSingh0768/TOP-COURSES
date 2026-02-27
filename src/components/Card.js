import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
export const Card = (props) => {
  let likedcourses = props.likedcourses;
  let setlikedcourses = props.setlikedcourses;
  let likedcoursesdata=props.likedcoursesdata
  let setlikedcorsesdata=props.setlikedcorsesdata;
  let course = props.course;
  function clickhandler() {
    if (likedcourses.includes(course.id)) {
      // if true mltb like  hua h phele se hi
      setlikedcourses(
        (
          prev // remove ks logic thoda samjho
        ) => prev.filter((cid) => cid !== course.id)
      )
     setlikedcorsesdata((prev)=> prev.filter((courseId) => courseId !== course.id));
      toast.warning("like removed ");
    } else {
      // phele se like nhi h
      // daalna h likeed course me
      if (likedcourses.length === 0) {
        setlikedcourses([course.id]);
      } else {
        // empty h phele se
        setlikedcourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
       setlikedcorsesdata((prev) => [...prev, course])
    }
  }
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url}></img>
        <div className=" w-[40px] h-[40px]  bg-white  rounded-full absolute right-2 bottom-[-12px] grid place-items-center  ">
          <button onClick={clickhandler}>
            {/* <FcLike fontSize='1.75rem'></FcLike> */}
            {likedcourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem"></FcLike>
            ) : (
              <FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>
            )}
          </button>
        </div>
      </div>
      <div className="py-4">
        <p className="text-white font-semibold text-lg leading-6 ml-3">
          {course.title}
        </p>
        <p className="mt-2 text-white ml-3">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};
