import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { useEffect, useState } from "react";
import type { QuestionType } from "../question-manage/type";
import { answerSave, getQuestion } from "../../services/pages";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import type { AnswerType } from "./type";
import Progressing from "../../components/Progressing";
import InputTypeText from "../../components/text-field";

const AnswerForm = () => {
  const [question, setQuestion] = useState<QuestionType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const item = location.state?.item;

  const getQuizList = async () => {
    setLoading(true);
    try {
      const { data } = await getQuestion();
      if (data?.status === 200) {
        setQuestion(data.response);
      } else {
        toast.error(data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AnswerType>();
  const onSubmit = async (formData: AnswerType) => {
    setLoading(true);
    if (item?.id) {
      formData.id = item.id;
    }
    try {
      const { data } = await answerSave(formData);
      if (data?.status === 200) {
        toast.success(data.message, {
          onClose: () => navigate("/answer"),
          autoClose: 500,
        });
      } else {
        toast.error(data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuizList();
  }, []);

  useEffect(() => {
    if (item) {
      setValue("answer_text", item.answer_text);
      setValue("question_id", item.question_id);
      setValue("is_correct", item.is_correct);
    }
  }, [item, question, setValue]);

  return (
    <div className="dashboard">
      <div className="header-section">
        <div className="left-section">
          <h3>{item?.id ? "Update" : "Add"} Answer</h3>
        </div>
        <div className="right-section">
          <NavLink className="nav-link" to="/answer">
            Back
          </NavLink>
        </div>
      </div>
      <div className="body-section">
        <form onSubmit={handleSubmit(onSubmit)} className="loader_relative">
          <Progressing loading={loading} />
          <div className="input-wrapper">
            <label>
              Question <span className="required">*</span>
            </label>
            <div className="input-error-wrapper">
              <select
                {...register("question_id", {
                  required: "Question is required",
                })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Question
                </option>

                {question?.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.question_text}
                  </option>
                ))}
              </select>

              {errors.question_id && (
                <p className="error">{errors.question_id.message}</p>
              )}
            </div>
          </div>
          <div className="input-wrapper">
            <label>
              Answer <span className="required">*</span>
            </label>
            <div className="input-error-wrapper">
              <InputTypeText
                type="text"
                placeholder="Enter Answer"
                {...register("answer_text", {
                  required: "Answer is required",
                })}
              />
              {errors.answer_text && (
                <p className="error">{errors.answer_text.message}</p>
              )}
            </div>
          </div>

          <div className="input-wrapper">
            <label>
              Is Correct Answer <span className="required">*</span>
            </label>
            <div className="input-error-wrapper">
              <select
                {...register("is_correct", {
                  required: "Select one",
                })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select One
                </option>
                <option key="Y" value="Y">
                  Yes
                </option>
                <option key="N" value="N">
                  No
                </option>
              </select>

              {errors.is_correct && (
                <p className="error">{errors.is_correct.message}</p>
              )}
            </div>
            <Button
              buttonName={item?.id ? "Update" : "Save"}
              loading={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnswerForm;
