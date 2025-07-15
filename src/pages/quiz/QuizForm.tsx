import { NavLink, useLocation, useNavigate } from "react-router-dom";
import InputTypeText from "../../components/text-field";
import Button from "../../components/button";
import { useEffect, useState } from "react";
import type { TypeName } from "../type";
import { getCategory, getLevel, quizSave } from "../../services/pages";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Progressing from "../../components/Progressing";

interface FormData {
  title: string;
  category_id: number;
  difficulty_level_id: number;
  time_limit_minutes: number;
  id: number;
}

const QuizForm = () => {
  const [category, setCategory] = useState<TypeName[]>([]);
  const [difficultyLevel, setDifficultyLevel] = useState<TypeName[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const item = location.state?.item;

  const getCategoryLilst = async () => {
    setLoading(true);
    try {
      const { data } = await getCategory();
      if (data?.status === 200) {
        setCategory(data.response);
      } else {
        toast.error(data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const getLevelLilst = async () => {
    setLoading(true);
    try {
      const { data } = await getLevel();
      if (data?.status === 200) {
        setDifficultyLevel(data.response);
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
  } = useForm<FormData>();
  const onSubmit = async (formData: FormData) => {
    setLoading(true);
    if (item?.id) {
      formData.id = item.id;
    }
    try {
      const { data } = await quizSave(formData);
      if (data?.status === 200) {
        toast.success(data.message, {
          onClose: () => navigate("/quiz"),
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
    getCategoryLilst();
    getLevelLilst();
  }, []);

  useEffect(() => {
    if (item) {
      setValue("category_id", item.category_id);
      setValue("difficulty_level_id", item.difficulty_level_id);
      setValue("title", item.title);
      setValue("time_limit_minutes", item.time_limit_minutes);
    }
  }, [item, category, difficultyLevel, setValue]);

  return (
    <div className="dashboard">
      <div className="header-section">
        <div className="left-section">
          <h3>{item?.id ? "Update" : "Add"} Quiz</h3>
        </div>
        <div className="right-section">
          <NavLink className="nav-link" to="/quiz">
            Back
          </NavLink>
        </div>
      </div>
      <div className="body-section">
        <form onSubmit={handleSubmit(onSubmit)} className="loader_relative">
           <Progressing loading={loading} />
          <div className="input-wrapper">
            <label>
              Quiz Title <span className="required">*</span>
            </label>
            <div className="input-error-wrapper">
              <InputTypeText
                type="text"
                placeholder="Enter Quiz title"
                {...register("title", {
                  required: "Quiz title is required",
                })}
              />
              {errors.title && <p className="error">{errors.title.message}</p>}
            </div>
          </div>
          <div className="input-wrapper">
            <label>
              Category <span className="required">*</span>
            </label>

            <div className="input-error-wrapper">
              <select
                /* make the field part of the form */
                {...register("category_id", {
                  required: "Category is required",
                })}
                /* good UX: start on the placeholder */
                defaultValue=""
              >
                <option value="" disabled>
                  Select Category
                </option>

                {/* render your categories */}
                {category.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>

              {/* inline validation error */}
              {errors.category_id && (
                <p className="error">{errors.category_id.message}</p>
              )}
            </div>
          </div>
          <div className="input-wrapper">
            <label>
              Level <span className="required">*</span>
            </label>
            <div className="input-error-wrapper">
              <select
                {...register("difficulty_level_id", {
                  required: "Level is required",
                })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Level
                </option>

                {difficultyLevel.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>

              {errors.difficulty_level_id && (
                <p className="error">{errors.difficulty_level_id.message}</p>
              )}
            </div>
          </div>
          <div className="input-wrapper">
            <label>
              Time(Minute) <span className="required">*</span>
            </label>
            <div className="input-error-wrapper">
              <InputTypeText
                type="text"
                placeholder="Enter time in minute"
                {...register("time_limit_minutes", {
                  required: "time is required",
                })}
              />
              {errors.time_limit_minutes && (
                <p className="error">{errors.time_limit_minutes.message}</p>
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

export default QuizForm;
