import React, { useState } from "react";

import axios from "axios";
import "../Styles/AddRecipe.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const initialState = {
  title: "",
  description: "",
  category: "",
  imageUrl: "",
};
const options = [
  "Pizza",
  "Burger",
  "Pasta",
  "Coffee",
  "Chinese",
  "Indian",
  "Soup",
  "Tea_Desset",
  "Bakery",
  "Korean",
];
const getDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  return today;
};

const AddRecipe = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [categoryErrMsg, setCategoryErrMsg] = useState(null);
  const { title, description, category, imageUrl } = formValue;
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setEditMode(true);
      getSingleBlog(id);
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id]);

  const getSingleBlog = async (id) => {
    const singleBlog = await axios.get(`http://localhost:5000/blogs/${id}`);
    if (singleBlog.status === 200) {
      setFormValue({ ...singleBlog.data });
    } else {
      alert("Something Went Wrong");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      setCategoryErrMsg("Please select a category");
    }

    // const imageValidation = !editMode ? imageUrl : true;

    if (title && description && imageUrl && category) {
      const currentDate = getDate();
      if (!editMode) {
        const updatedBlogData = { ...formValue, date: currentDate };
        const response = await axios.post(
          "http://localhost:5000/blogs",
          updatedBlogData
        );
        console.log(response);
        if (response.status === 201) {
          alert(" Your Recipe Posted Successfully");
        } else {
          alert("Something Went Wrong");
        }
      } else {
        const response = await axios.put(
          `http://localhost:5000/blogs/${id}`,
          formValue
        );
        console.log(response);
        if (response.status === 200) {
          alert("Your Recipe Updated Successfully");
        } else {
          alert("Something Went Wrong");
        }
      }

      setFormValue({ title: "", description: "", category: "", imageUrl: "" });
      navigate("/hotpicks");
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const onUploadImage = (file) => {
    console.log("file", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mivjmkcg");
    axios
      .post("https://api.cloudinary.com/v1_1/dvuphar2o/image/upload", formData)
      .then((res) => {
        alert("Image Uploaded Successfully");
        setFormValue({ ...formData, imageUrl: res.data.url });
      });
  };
  const onCategoryChange = (e) => {
    setCategoryErrMsg(null);
    setFormValue({ ...formValue, category: e.target.value });
  };
  return (
    <div>
      <p className="disaster1">{editMode ? "Update Recipe" : "Add Recipe"}</p>
      <form action="" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={title || ""}
          type="text"
          onChange={(e) => {
            onInputChange(e);
          }}
          required
          label="Title"
        />
        <br />
        <input
          name="description"
          placeholder="Description"
          value={description || ""}
          type="text"
          onChange={onInputChange}
          required
          label="Description"
        />
        <br />
        {!editMode && (
          <>
            <input
              type="file"
              onChange={(e) => onUploadImage(e.target.files[0])}
              required
              placeholder="No file Choosen"
            />
            <br />
          </>
        )}

        <select
          className="categoryDropddown"
          onChange={(e) => onCategoryChange(e)}
          value={category}
        >
          <option>Please select Category</option>
          {options.map((option, index) => (
            <option value={option || ""} key={index}>
              {option}
            </option>
          ))}
        </select>

        {categoryErrMsg && (
          <div className="categoryErrorMsg">{categoryErrMsg}</div>
        )}
        <br />
        <br />
        <input type="submit" />
      </form>
      <button className="disaster" onClick={() => navigate("/")}>
        GO BACK
      </button>
    </div>
  );
};

export default AddRecipe;
