import "./maintable.css";
import { useGetPatientQuery,useDeletePatientMutation} from "../../redux/api/authApi";
import { useState } from "react";
import DeleteRow from "./DeleteRow";
const MainTableContent = () => {
  const { data, isLoading, isError, isSuccess } = useGetPatientQuery();
  // const [] = useDeletePatientMutation();

  const [deleteModal, setDeleteModal] = useState(false)
  const [deletedId, setDeletedId] = useState('')
  const handleDeleteModal= (id) => {
    setDeleteModal(!deleteModal)
    setDeletedId(id);
  }
  return (
    <div className="table-content">
      <table>
        <thead>
          <tr>
            <th>Basic Info</th>
            <th>Phone Number</th>
            <th>D.O.B</th>
            <th>Address</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {isSuccess
            ? data.map((val, index) => {
                return (
                  <>
                    <tr className="td-wrapper" key={index}>
                      <td>
                        <div className="info-wrapper">
                          <div className="patient-image">
                            <img src={val.image} alt="" />
                          </div>
                          <div className="info-content">
                            <div className="name">{val.full_name}</div>
                            <div className="email">{val.email}</div>
                          </div>
                        </div>
                      </td>
                      <td>{val.contact}</td>
                      <td>{val.DOB}</td>
                      <td>{val.Address}</td>
                      <td>{val.gender}</td>
                      <td>
                        <div className="edit-icon" >
                          <img src="./images/icons8-dot-25.png" onClick={() => handleDeleteModal(val.id)} alt="" />
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })
            : null}
        </tbody>
      </table>
      {deleteModal ? <DeleteRow id={deletedId} handleDeleteModal={handleDeleteModal} />:null}
    </div>
  );
};

export default MainTableContent;
