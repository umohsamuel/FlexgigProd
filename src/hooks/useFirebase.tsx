import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import "../config/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useFirebase = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const showSuccessMessage = () => {
    toast.success(
      <div className="text-[10px]">
        <p className="text-[#1EAE6B] font-bold">
          Your account has successfully been created
        </p>
        <p className="text-[#424242] font-medium">
          Kindly provide your login details to sign in
        </p>
      </div>,
      {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
      }
    );
  };

  const signUp = async (data: { email: string; password: string }) => {
    try {
      const { email, password } = data;
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully");
      showSuccessMessage();
      navigate("/signin");
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error logging user:", error.message);
      } else {
        console.log("Unknown error:", error);
      }
    }
  };

  const signIn = async (data: { email: string; password: string }) => {
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged In successfully");
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error logging user:", error.message);
      } else {
        console.log("Unknown error:", error);
      }
    }
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logged Out Successfully");
      toast.success("Logged Out Successfully");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Error logging out:", error.message);
      } else {
        console.log("unknown error:", error);
      }
    }
  };

  const handleForgotPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent successfully");
      navigate("/signin");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Error sending password reset email:", error.message);
      } else {
        console.log("unknown error:", error);
      }
    }
  };

  return {
    signInWithGoogle,
    signUp,
    signIn,
    handleLogout,
    handleForgotPassword,
  };
};
