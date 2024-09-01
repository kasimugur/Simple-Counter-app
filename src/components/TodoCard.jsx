import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { RiDeleteBin6Line, RiFileEditLine } from "react-icons/ri";

export default function TodoCard() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h1>crucial</h1>
        </div>
        <div className="card-body">
          <li>react to js  working and kasım </li>
        </div>
        <div className="card-footer">
          <span className="done"><IoCheckmarkDoneCircleOutline className="icon"/></span>
          <span className="edit"><RiFileEditLine className="icon"/></span>
          <span className="delete"><RiDeleteBin6Line className="icon"/></span>

        </div>
      </div>
    </>
  )
}