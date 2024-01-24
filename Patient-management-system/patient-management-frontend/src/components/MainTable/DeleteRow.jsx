import {
  useDeletePatientMutation,
} from "../../redux/api/authApi";
const DeleteRow = ({ id, handleDeleteModal }) => {
  const [deletePatient, { data, isLoading, isError, isSuccess }] =
    useDeletePatientMutation();
  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    const response = await deletePatient({ id, token });
    if (response.data) {
      console.log("data successfully");
      handleDeleteModal();
    } else {
      console.log("delete failed");
    }
  };

  return (
    <div className="delete-modal">
      {console.log(token, "token")}
      <div className="edit-details">Edit Details</div>
      <hr />
      <div className="delete-row" onClick={handleDelete}>
        Delete Items
      </div>
    </div>
  );
};

export default DeleteRow;
