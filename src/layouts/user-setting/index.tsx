import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { logoutUser } from "../../services/auth/Auth";

const UserSetting = () => {
  const navigate = useNavigate();
  const { setUserData } = useAuth();

  const handleLogout = async () => {
    try {
      const { data } = await logoutUser(); // call your logout API
      if (data?.status === 200) {
        localStorage.removeItem("token");
        setUserData({ token: "", role: "" });
        toast.success(data.message, {
          onClose: () => navigate("/login"),
          autoClose: 500,
        });
      } else {
        toast.error(data?.message || "Failed to logout");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Something went wrong while logging out");
    }
  };

  return (
    <>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default UserSetting;
