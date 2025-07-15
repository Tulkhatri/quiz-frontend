import type { AxiosError } from "axios";
import http from "../http";
import type { TypeName } from "../../pages/type";
import type { LoginErrorResponse } from "../../type";
import type { QuestionType } from "../../pages/question-manage/type";
import type { AnswerType } from "../../pages/answer-manage/type";

  interface QuizType {
  title: string;
  category_id: number;
  difficulty_level_id: number;
  time_limit_minutes: number;
  id:number
}

export const categoryLIst = async (body: TypeName) => {
  try {
    const response = await http.post("api/admin/categories", body);
    if (response.status == 200) {
      return {
        data: response.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: true,
      };
    }
  } catch (error) {
    const err = error as AxiosError<LoginErrorResponse>;
    return {
      data: err.response?.data ?? "Something went wrong",
    };
  }
};

export const categorySave = async (body: TypeName) => {
  try {
    const response = await http.post("api/admin/categories", body);
    if (response.status == 200) {
      return {
        data: response.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: true,
      };
    }
  } catch (error) {
    const err = error as AxiosError<LoginErrorResponse>;
    return {
      data: err.response?.data ?? "Something went wrong",
    };
  }
};

export const getCategory = async () => {
  try {
    const response = await http.get("api/admin/categories");
    if (response.status == 200) {
      return {
        data: response.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: true,
      };
    }
  } catch (error) {
    const err = error as AxiosError<LoginErrorResponse>;
    return {
      data: err.response?.data ?? "Something went wrong",
    };
  }
};

export const deleteRecord = async (id: number | undefined) => {
  try {
    const { data } = await http.delete(`api/admin/categories/${id}`);
    if (data) {
      return {
        data: data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: data,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      data: null,
      error: { err: "Error" },
    };
  }
};

export const levelSave = async (body: TypeName) => {
  try {
    const response = await http.post("api/admin/difficulty-levels", body);
    if (response.status == 200) {
      return {
        data: response.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: true,
      };
    }
  } catch (error) {
    const err = error as AxiosError<LoginErrorResponse>;
    return {
      data: err.response?.data ?? "Something went wrong",
    };
  }
};

export const getLevel = async () => {
  try {
    const response = await http.get("api/admin/difficulty-levels");
    if (response.status == 200) {
      return {
        data: response.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: true,
      };
    }
  } catch (error) {
    const err = error as AxiosError<LoginErrorResponse>;
    return {
      data: err.response?.data ?? "Something went wrong",
    };
  }
};

export const deleteLevel = async (id: number | undefined) => {
  try {
    const { data } = await http.delete(`api/admin/difficulty-levels/${id}`);
    if (data) {
      return {
        data: data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: data,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      data: null,
      error: { err: "Error" },
    };
  }
};



export const quizSave = async (body: QuizType) => {
  try {
    const response = await http.post("api/admin/quizzes", body);
    if (response.status == 200) {
      return {
        data: response.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: true,
      };
    }
  } catch (error) {
    const err = error as AxiosError<LoginErrorResponse>;
    return {
      data: err.response?.data ?? "Something went wrong",
    };
  }
};

export const getquiz = async () => {
  try {
    const response = await http.get("api/admin/quizzes");
    if (response.status == 200) {
      return {
        data: response.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: true,
      };
    }
  } catch (error) {
    const err = error as AxiosError<LoginErrorResponse>;
    return {
      data: err.response?.data ?? "Something went wrong",
    };
  }
};

export const deletequiz = async (id: number | undefined) => {
  try {
    const { data } = await http.delete(`api/admin/quizzes/${id}`);
    if (data) {
      return {
        data: data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: data,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      data: null,
      error: { err: "Error" },
    };
  }
};


export const questionSave = async (body: QuestionType) => {
  try {
    const response = await http.post("api/admin/questions", body);
    if (response.status == 200) {
      return {
        data: response.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: true,
      };
    }
  } catch (error) {
    const err = error as AxiosError<LoginErrorResponse>;
    return {
      data: err.response?.data ?? "Something went wrong",
    };
  }
};

export const getQuestion = async () => {
  try {
    const response = await http.get("api/admin/questions");
    if (response.status == 200) {
      return {
        data: response.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: true,
      };
    }
  } catch (error) {
    const err = error as AxiosError<LoginErrorResponse>;
    return {
      data: err.response?.data ?? "Something went wrong",
    };
  }
};

export const deleteQuestion = async (id: number | undefined) => {
  try {
    const { data } = await http.delete(`api/admin/questions/${id}`);
    if (data) {
      return {
        data: data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: data,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      data: null,
      error: { err: "Error" },
    };
  }
};


export const answerSave = async (body: AnswerType) => {
  try {
    const response = await http.post("api/admin/answers", body);
    if (response.status == 200) {
      return {
        data: response.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: true,
      };
    }
  } catch (error) {
    const err = error as AxiosError<LoginErrorResponse>;
    return {
      data: err.response?.data ?? "Something went wrong",
    };
  }
};

export const getAnswer = async () => {
  try {
    const response = await http.get("api/admin/answers");
    if (response.status == 200) {
      return {
        data: response.data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: true,
      };
    }
  } catch (error) {
    const err = error as AxiosError<LoginErrorResponse>;
    return {
      data: err.response?.data ?? "Something went wrong",
    };
  }
};

export const deleteAnswer = async (id: number | undefined) => {
  try {
    const { data } = await http.delete(`api/admin/answers/${id}`);
    if (data) {
      return {
        data: data,
        error: null,
      };
    } else {
      return {
        data: null,
        error: data,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      data: null,
      error: { err: "Error" },
    };
  }
};



