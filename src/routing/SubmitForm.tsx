import { useNavigate } from "react-router-dom";

const SubmitForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <button type="submit">Submit</button>
      </form>
      <a href="/">HomePage</a>
    </div>
  );
};

export default SubmitForm;
