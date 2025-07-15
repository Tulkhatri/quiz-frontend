import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteQuestion } from "../../services/pages";
import { useState } from "react";
interface PropsType {
  show: boolean;
  setShow: (data: boolean) => void;
  id: number | undefined;
  title: string | undefined;
  setFetchData: (data: string) => void;
}
function ConfirmDelete({ show, setShow, id, title, setFetchData }: PropsType) {
  const [loading, setLoading] = useState(false);
  const confirmDelete = async () => {
    setLoading(true);
    const { data } = await deleteQuestion(id);
    if (data) {
      setLoading(false);
      setFetchData(data.message);
      setShow(false);
    }
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="sm"
        className="confirm_dialog"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="no btn-cancle"
          >
            close
          </Button>
          <div className="yes">
            <Button
              disabled={loading}
              className="btn-delete"
              onClick={() => {
                confirmDelete();
              }}
            >
              {loading ? "Delete" : "Delete"}
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ConfirmDelete;
